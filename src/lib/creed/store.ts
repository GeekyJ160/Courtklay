import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  XP,
  type Hand,
  type ModelId,
  type Position,
  type SpotId,
  levelJustCleared,
  nextStreak,
  todayKey,
  unlockedLevel,
  workoutById,
} from "@/lib/creed/content";

export type Tab = "dashboard" | "workouts" | "shotlab" | "coach";

const LEGACY_TABS: Record<string, Tab> = {
  today: "dashboard",
  train: "workouts",
  shots: "shotlab",
  film: "coach",
  creed: "coach",
  dashboard: "dashboard",
  workouts: "workouts",
  shotlab: "shotlab",
  coach: "coach",
};

export function normalizeTab(value: unknown): Tab {
  if (typeof value === "string" && value in LEGACY_TABS) return LEGACY_TABS[value];
  return "dashboard";
}

export type ShotEntry = {
  id: string;
  day: string;
  spot: SpotId;
  makes: number;
  attempts: number;
  source: "court" | "workout";
};

export type Session = {
  workoutId: string;
  index: number;
  checked: boolean[];
  running: boolean;
  workoutMs: number;
  drillMs: number;
  anchor: number | null;
  shots: Partial<Record<SpotId, { makes: number; attempts: number }>>;
  spot: SpotId;
};

export type Summary = {
  workoutId: string;
  xp: number;
  minutes: number;
  unlocked: boolean;
  cleared: boolean;
  level: 1 | 2 | 3 | 4 | 5;
};

type Profile = {
  name: string;
  position: Position;
  hand: Hand;
  sound: boolean;
};

type CreedState = {
  profile: Profile;
  tab: Tab;
  xp: number;
  streak: number;
  lastActive: string | null;
  finished: Record<string, number>;
  lastDone: Record<string, string>;
  challenges: { id: string; day: string }[];
  shots: ShotEntry[];
  shotXpDay: string | null;
  session: Session | null;
  summary: Summary | null;
  courtDraft: Partial<Record<SpotId, { makes: number; attempts: number }>>;
  courtSpot: SpotId;
  note: string;
  seen: Partial<Record<ModelId, boolean[]>>;
  setTab: (tab: Tab) => void;
  setProfile: (patch: Partial<Profile>) => void;
  startWorkout: (id: string) => void;
  pause: () => void;
  resume: () => void;
  tick: (now: number) => void;
  setSessionSpot: (spot: SpotId) => void;
  addSessionShot: (result: "make" | "miss", spot: SpotId) => void;
  completeDrill: () => void;
  abandon: () => void;
  dismissSummary: () => void;
  setCourtSpot: (spot: SpotId) => void;
  addCourtShot: (result: "make" | "miss") => void;
  logCourt: () => number;
  completeChallenge: (id: string) => boolean;
  setNote: (note: string) => void;
  toggleSeen: (id: ModelId, index: number) => void;
  resetProgress: () => void;
};

const emptyProfile: Profile = { name: "", position: "BOTH", hand: "R", sound: true };

function uid(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function withDelta(session: Session, now: number): Session {
  const delta = session.running && session.anchor ? Math.max(0, now - session.anchor) : 0;
  return {
    ...session,
    workoutMs: session.workoutMs + delta,
    drillMs: session.drillMs + delta,
    anchor: session.running ? now : null,
  };
}

function entriesFrom(
  shots: Session["shots"],
  day: string,
  source: ShotEntry["source"],
): ShotEntry[] {
  return (Object.entries(shots) as [SpotId, { makes: number; attempts: number }][])
    .filter(([, value]) => value && value.attempts > 0)
    .map(([spot, value]) => ({
      id: uid(),
      day,
      spot,
      makes: value.makes,
      attempts: value.attempts,
      source,
    }));
}

function shotBonus(entries: ShotEntry[], shotXpDay: string | null, day: string): { xp: number; shotXpDay: string | null } {
  const attempts = entries.reduce((sum, entry) => sum + entry.attempts, 0);
  if (attempts >= 10 && shotXpDay !== day) return { xp: XP.shots, shotXpDay: day };
  return { xp: 0, shotXpDay };
}

const fresh = {
  profile: emptyProfile,
  tab: "dashboard" as Tab,
  xp: 0,
  streak: 0,
  lastActive: null as string | null,
  finished: {} as Record<string, number>,
  lastDone: {} as Record<string, string>,
  challenges: [] as { id: string; day: string }[],
  shots: [] as ShotEntry[],
  shotXpDay: null as string | null,
  session: null as Session | null,
  summary: null as Summary | null,
  courtDraft: {} as Partial<Record<SpotId, { makes: number; attempts: number }>>,
  courtSpot: "top" as SpotId,
  note: "",
  seen: {} as Partial<Record<ModelId, boolean[]>>,
};

export const useCreed = create<CreedState>()(
  persist(
    (set, get) => ({
      ...fresh,
      setTab: (tab) => set({ tab }),
      setProfile: (patch) => set({ profile: { ...get().profile, ...patch } }),
      startWorkout: (id) => {
        const workout = workoutById(id);
        const level = unlockedLevel(get().finished);
        if (workout.level > level) return;
        set({
          summary: null,
          session: {
            workoutId: id,
            index: 0,
            checked: workout.drillIds.map(() => false),
            running: true,
            workoutMs: 0,
            drillMs: 0,
            anchor: Date.now(),
            shots: {},
            spot: "top",
          },
        });
      },
      pause: () =>
        set((state) => {
          if (!state.session) return state;
          const live = withDelta(state.session, Date.now());
          return { session: { ...live, running: false, anchor: null } };
        }),
      resume: () =>
        set((state) => {
          if (!state.session) return state;
          return { session: { ...state.session, running: true, anchor: Date.now() } };
        }),
      tick: (now) =>
        set((state) => {
          if (!state.session?.running || state.session.anchor == null) return state;
          const delta = now - state.session.anchor;
          if (delta < 180) return state;
          return {
            session: {
              ...state.session,
              workoutMs: state.session.workoutMs + delta,
              drillMs: state.session.drillMs + delta,
              anchor: now,
            },
          };
        }),
      setSessionSpot: (spot) =>
        set((state) => (state.session ? { session: { ...state.session, spot } } : state)),
      addSessionShot: (result, spot) =>
        set((state) => {
          if (!state.session) return state;
          const current = state.session.shots[spot] ?? { makes: 0, attempts: 0 };
          return {
            session: {
              ...state.session,
              spot,
              shots: {
                ...state.session.shots,
                [spot]: {
                  makes: current.makes + (result === "make" ? 1 : 0),
                  attempts: current.attempts + 1,
                },
              },
            },
          };
        }),
      completeDrill: () => {
        const state = get();
        if (!state.session) return;
        const now = Date.now();
        const live = withDelta(state.session, now);
        const workout = workoutById(live.workoutId);
        const checked = live.checked.slice();
        checked[live.index] = true;
        const last = live.index >= workout.drillIds.length - 1;
        if (!last) {
          set({
            session: {
              ...live,
              checked,
              index: live.index + 1,
              drillMs: 0,
              anchor: live.running ? now : null,
            },
          });
          return;
        }
        const day = todayKey();
        const drillXp = workout.drillIds.length * XP.drill + XP.bonus;
        const logged = entriesFrom(live.shots, day, "workout");
        const bonus = shotBonus(logged, state.shotXpDay, day);
        const finished = { ...state.finished, [workout.id]: (state.finished[workout.id] ?? 0) + 1 };
        const cleared = levelJustCleared(workout.level, state.finished, finished);
        const before = unlockedLevel(state.finished);
        const after = unlockedLevel(finished);
        set({
          session: null,
          xp: state.xp + drillXp + bonus.xp,
          streak: nextStreak(state.streak, state.lastActive, day),
          lastActive: day,
          finished,
          lastDone: { ...state.lastDone, [workout.id]: day },
          shots: [...logged, ...state.shots].slice(0, 500),
          shotXpDay: bonus.shotXpDay,
          summary: {
            workoutId: workout.id,
            xp: drillXp + bonus.xp,
            minutes: Math.max(1, Math.round(live.workoutMs / 60000)),
            unlocked: after > before,
            cleared,
            level: workout.level,
          },
        });
      },
      abandon: () => set({ session: null }),
      dismissSummary: () => set({ summary: null, tab: "dashboard" }),
      setCourtSpot: (spot) => set({ courtSpot: spot }),
      addCourtShot: (result) =>
        set((state) => {
          const spot = state.courtSpot;
          const current = state.courtDraft[spot] ?? { makes: 0, attempts: 0 };
          return {
            courtDraft: {
              ...state.courtDraft,
              [spot]: {
                makes: current.makes + (result === "make" ? 1 : 0),
                attempts: current.attempts + 1,
              },
            },
          };
        }),
      logCourt: () => {
        const state = get();
        const day = todayKey();
        const logged = entriesFrom(state.courtDraft, day, "court");
        if (!logged.length) return 0;
        const bonus = shotBonus(logged, state.shotXpDay, day);
        set({
          shots: [...logged, ...state.shots].slice(0, 500),
          courtDraft: {},
          xp: state.xp + bonus.xp,
          shotXpDay: bonus.shotXpDay,
        });
        return bonus.xp;
      },
      completeChallenge: (id) => {
        const state = get();
        const day = todayKey();
        if (state.challenges.some((item) => item.id === id && item.day === day)) return false;
        set({
          challenges: [{ id, day }, ...state.challenges].slice(0, 200),
          xp: state.xp + XP.challenge,
          streak: nextStreak(state.streak, state.lastActive, day),
          lastActive: day,
        });
        return true;
      },
      setNote: (note) => set({ note: note.slice(0, 180) }),
      toggleSeen: (id, index) =>
        set((state) => {
          const current = state.seen[id]?.slice() ?? [false, false, false];
          current[index] = !current[index];
          return { seen: { ...state.seen, [id]: current } };
        }),
      resetProgress: () => set({ ...fresh, profile: get().profile }),
    }),
    {
      name: "court-creed-v1",
      version: 1,
      migrate: (persisted) => {
        const state = (persisted ?? {}) as { tab?: unknown };
        return { ...state, tab: normalizeTab(state.tab) };
      },
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        state.tab = normalizeTab(state.tab);
        if (state.session?.running) {
          state.session.running = false;
          state.session.anchor = null;
        }
      },
    },
  ),
);

export function shotTotals(entries: ShotEntry[]) {
  const makes = entries.reduce((sum, entry) => sum + entry.makes, 0);
  const attempts = entries.reduce((sum, entry) => sum + entry.attempts, 0);
  return { makes, attempts };
}
