import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Dumbbell, Flame, House, Lock, Megaphone, Settings, Target } from "lucide-react";
import {
  CHALLENGES,
  LEVELS,
  WORKOUTS,
  emphasis,
  featuredChallenge,
  suggestedWorkout,
  todayKey,
  unlockedLevel,
  visibleStreak,
  workoutMinutes,
  type Position,
} from "@/lib/creed/content";
import { shotTotals, useCreed, type Tab as TabId } from "@/lib/creed/store";
import { cn } from "@/lib/cn";
import { CreedTrack } from "@/components/creed/creed-track";
import { Film } from "@/components/creed/film";
import { BottomNavigationBar, Scaffold } from "@/components/creed/scaffold";
import { SessionScreen } from "@/components/creed/session";
import { Shots } from "@/components/creed/shots";
import { Eyebrow, Meter, PrimaryButton, QuietButton } from "@/components/creed/ui";

const NAV: { id: TabId; label: string; icon: typeof House }[] = [
  { id: "dashboard", label: "Dashboard", icon: House },
  { id: "workouts", label: "Workouts", icon: Dumbbell },
  { id: "shotlab", label: "Shot Lab", icon: Target },
  { id: "coach", label: "Coach", icon: Megaphone },
];

function useNow() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => setNow(new Date()), []);
  return now;
}

export function Screen() {
  const tab = useCreed((state) => state.tab);
  const session = useCreed((state) => state.session);
  const summary = useCreed((state) => state.summary);
  const now = useNow();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [coachPane, setCoachPane] = useState<"film" | "creed">("film");

  if (session || summary) return <SessionScreen />;

  return (
    <Scaffold
      navigation={
        <BottomNavigationBar
          items={NAV}
          value={tab}
          onChange={(id) => useCreed.getState().setTab(id)}
        />
      }
    >
      {tab === "dashboard" && (
        <Dashboard
          now={now}
          onSettings={() => setSettingsOpen(true)}
          onOpenCoach={() => {
            setCoachPane("creed");
            useCreed.getState().setTab("coach");
          }}
        />
      )}
      {tab === "workouts" && <Workouts />}
      {tab === "shotlab" && <Shots />}
      {tab === "coach" && <Coach now={now} pane={coachPane} onPane={setCoachPane} />}
      <SettingsSheet open={settingsOpen} onOpenChange={setSettingsOpen} />
    </Scaffold>
  );
}

function Dashboard({
  now,
  onSettings,
  onOpenCoach,
}: {
  now: Date | null;
  onSettings: () => void;
  onOpenCoach: () => void;
}) {
  const profile = useCreed((state) => state.profile);
  const xp = useCreed((state) => state.xp);
  const streak = useCreed((state) => state.streak);
  const lastActive = useCreed((state) => state.lastActive);
  const finished = useCreed((state) => state.finished);
  const lastDone = useCreed((state) => state.lastDone);
  const shots = useCreed((state) => state.shots);
  const challenges = useCreed((state) => state.challenges);
  const start = useCreed((state) => state.startWorkout);
  const level = unlockedLevel(finished);
  const levelMeta = LEVELS[level - 1];
  const current = WORKOUTS.filter((workout) => workout.level === level);
  const cleared = current.filter((workout) => (finished[workout.id] ?? 0) > 0).length;
  const day = now ? now.getDay() : null;
  const suggested = suggestedWorkout(finished, day);
  const other = current.find((workout) => workout.id !== suggested.id);
  const today = now ? todayKey(now) : null;
  const doneToday = today != null && lastDone[suggested.id] === today;
  const shownStreak = now ? visibleStreak(streak, lastActive, todayKey(now)) : streak;
  const totals = shotTotals(shots);
  const fresh = xp === 0 && challenges.length === 0 && Object.keys(finished).length === 0;
  const name = profile.name.trim();

  return (
    <div className="px-4 pt-5">
      <header className="flex items-start justify-between gap-3">
        <div>
          <Eyebrow>Dashboard</Eyebrow>
          <h1 className="mt-1 font-display text-3xl leading-none tracking-wide">COURT CREED</h1>
          <span className="mt-2 block h-1 w-10 bg-primary" />
        </div>
        <div className="flex items-center gap-2">
          <p className="flex items-center gap-1 font-display text-xl tabular-nums">
            <Flame className="size-4 text-primary" />
            {shownStreak}
          </p>
          <SettingsButton onOpen={onSettings} />
        </div>
      </header>

      {name ? (
        <button type="button" onClick={onSettings} className="mt-5 block text-left">
          <span className="font-display text-4xl leading-none tracking-wide">{name.toUpperCase()}</span>
          <span className="mt-1 block text-sm text-muted">
            {profile.position === "BOTH" ? "Guard" : profile.position} · {levelMeta.name}
          </span>
        </button>
      ) : (
        <button type="button" onClick={onSettings} className="mt-5 block text-left">
          <span className="font-display text-3xl leading-none tracking-wide">Your jersey</span>
          <span className="mt-1 block text-sm text-muted">
            Tap to add a name · {profile.position === "BOTH" ? "Guard" : profile.position} · {levelMeta.name}
          </span>
        </button>
      )}
      <p className="mt-3 text-sm">{emphasis(profile.position)}</p>

      <div className="mt-4">
        <div className="flex items-baseline justify-between text-sm">
          <span className="text-muted tabular-nums">{xp} XP</span>
          <span className="text-muted">
            {level < 5 ? `${cleared} of 2 to open the next level` : cleared === 2 ? "All five levels open" : `${cleared} of 2 on this level`}
          </span>
        </div>
        <div className="mt-2">
          <Meter value={level === 5 && cleared === 2 ? 100 : (cleared / 2) * 100} />
        </div>
      </div>

      {fresh && (
        <p className="mt-5 text-sm text-muted">
          Built for a guard heading into 7th. The workouts get harder only after you finish both in a level. The other
          track — calling for the ball, talking first, attacking when you might miss — is how it shows up in a game.
        </p>
      )}

      <article className="mt-5 rounded-xl border border-line bg-surface p-4">
        <Eyebrow>{doneToday ? "Done today" : "Today's work"}</Eyebrow>
        <h2 className="mt-1 font-display text-4xl leading-none tracking-wide">{suggested.title}</h2>
        <p className="mt-2 text-sm text-muted">
          {workoutMinutes(suggested)} min · {levelMeta.name}
        </p>
        <p className="mt-2">{suggested.blurb}</p>
        <PrimaryButton type="button" className="mt-4" onClick={() => start(suggested.id)}>
          {doneToday ? "Run it again" : "Start workout"}
        </PrimaryButton>
        {other && (
          <button type="button" className="mt-3 h-11 w-full text-sm text-muted" onClick={() => start(other.id)}>
            Or {other.title} · {workoutMinutes(other)} min
          </button>
        )}
      </article>

      <button type="button" onClick={onOpenCoach} className="mt-3 w-full rounded-xl border border-line p-4 text-left">
        <Eyebrow>This week</Eyebrow>
        <span className="mt-1 block font-display text-2xl leading-tight tracking-wide">
          {(now ? featuredChallenge(now) : CHALLENGES[0]).title}
        </span>
      </button>

      <dl className="mt-5 grid grid-cols-3 gap-3 text-center">
        <Stat label="Workouts" value={String(Object.values(finished).reduce((sum, n) => sum + n, 0))} />
        <Stat label="Challenges" value={String(challenges.length)} />
        <Stat label="Shots" value={totals.attempts ? `${totals.makes}/${totals.attempts}` : "—"} />
      </dl>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-line px-2 py-3">
      <dt className="text-xs tracking-wide text-muted uppercase">{label}</dt>
      <dd className="mt-1 font-display text-2xl leading-none tabular-nums">{value}</dd>
    </div>
  );
}

function Workouts() {
  const finished = useCreed((state) => state.finished);
  const start = useCreed((state) => state.startWorkout);
  const level = unlockedLevel(finished);

  return (
    <div className="px-4 pt-5">
      <Eyebrow>Workouts</Eyebrow>
      <h1 className="mt-1 font-display text-4xl leading-none tracking-wide">It builds with you.</h1>
      <p className="mt-3 text-sm text-muted">
        Five levels. Both workouts open the next one. You can always come back — the best guards still do Feet & Form.
      </p>
      <ol className="mt-5 space-y-6">
        {LEVELS.map((item) => {
          const open = item.id <= level;
          const workouts = WORKOUTS.filter((workout) => workout.level === item.id);
          return (
            <li key={item.id}>
              <div className="flex items-end justify-between gap-3">
                <div>
                  <p className="font-display text-5xl leading-none tabular-nums">{String(item.id).padStart(2, "0")}</p>
                  <h2 className="mt-1 font-display text-2xl tracking-wide">{item.name}</h2>
                  <p className="text-sm text-muted">{item.promise}</p>
                </div>
                {!open && <Lock className="size-5 text-muted" aria-label="Locked" />}
              </div>
              <div className="mt-3 space-y-2">
                {workouts.map((workout) => {
                  const count = finished[workout.id] ?? 0;
                  return (
                    <button
                      key={workout.id}
                      type="button"
                      disabled={!open}
                      onClick={() => start(workout.id)}
                      className="flex w-full items-center justify-between gap-3 rounded-xl border border-line px-4 py-3 text-left disabled:cursor-not-allowed"
                    >
                      <span>
                        <span className="block text-lg leading-tight">{workout.title}</span>
                        <span className="block text-sm text-muted">
                          {workoutMinutes(workout)} min · {workout.drillIds.length} drills
                          {!open ? ` · finish level ${item.id - 1}` : ""}
                        </span>
                      </span>
                      <span className="font-display text-lg tabular-nums text-muted">{count > 0 ? `×${count}` : "—"}</span>
                    </button>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function Coach({
  now,
  pane,
  onPane,
}: {
  now: Date | null;
  pane: "film" | "creed";
  onPane: (pane: "film" | "creed") => void;
}) {
  return (
    <div>
      <div className="px-4 pt-5">
        <Eyebrow>Coach</Eyebrow>
        <h1 className="mt-1 font-display text-4xl leading-none tracking-wide">
          {pane === "film" ? "Borrow one habit." : "Confidence. Lead. Attack."}
        </h1>
        <p className="mt-3 text-sm text-muted">
          {pane === "film"
            ? "Film first. Watch a minute with the sound down and take one thing to the floor."
            : "Then the creed. Drills build the skill. These build the habit of using it."}
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2" role="tablist" aria-label="Coach">
          {(
            [
              ["film", "Film"],
              ["creed", "Creed"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={pane === id}
              onClick={() => onPane(id)}
              className={cn(
                "h-11 rounded-lg border text-sm",
                pane === id ? "border-primary bg-primary text-bg" : "border-line",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      {pane === "film" ? <Film nested /> : <CreedTrack now={now} nested />}
    </div>
  );
}

function SettingsButton({ onOpen }: { onOpen: () => void }) {
  return (
    <button type="button" onClick={onOpen} className="flex size-11 items-center justify-center rounded-lg border border-line" aria-label="Settings">
      <Settings className="size-5" />
    </button>
  );
}

function SettingsSheet({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const profile = useCreed((state) => state.profile);
  const setProfile = useCreed((state) => state.setProfile);
  const reset = useCreed((state) => state.resetProgress);
  const [confirming, setConfirming] = useState(false);

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        onOpenChange(next);
        if (!next) setConfirming(false);
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-bg/80" />
        <Dialog.Content className="fixed inset-x-0 bottom-0 z-50 mx-auto max-h-dvh w-full max-w-lg overflow-y-auto rounded-t-xl border border-line bg-surface p-5 text-fg outline-none">
          <Dialog.Title className="font-display text-3xl tracking-wide">Jersey</Dialog.Title>
          <Dialog.Description className="mt-1 text-sm text-muted">Saved on this phone.</Dialog.Description>
          <label className="mt-4 block text-sm">
            Name on the jersey
            <input
              value={profile.name}
              maxLength={16}
              onChange={(event) => setProfile({ name: event.target.value.replace(/[^a-zA-Z0-9' -]/g, "") })}
              placeholder="Your name"
              className="mt-2 h-12 w-full rounded-lg border border-line bg-bg px-3 text-base text-fg outline-none focus-visible:border-primary"
            />
          </label>
          <p className="mt-4 text-sm">Position</p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {(["PG", "SG", "BOTH"] as Position[]).map((position) => (
              <button
                key={position}
                type="button"
                onClick={() => setProfile({ position })}
                className={cn(
                  "h-11 rounded-lg border text-sm",
                  profile.position === position ? "border-primary bg-primary text-bg" : "border-line",
                )}
              >
                {position === "BOTH" ? "Both" : position}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm">Strong hand</p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {(["R", "L"] as const).map((hand) => (
              <button
                key={hand}
                type="button"
                onClick={() => setProfile({ hand })}
                className={cn(
                  "h-11 rounded-lg border text-sm",
                  profile.hand === hand ? "border-primary bg-primary text-bg" : "border-line",
                )}
              >
                {hand === "R" ? "Right" : "Left"}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setProfile({ sound: !profile.sound })}
            className="mt-4 flex h-12 w-full items-center justify-between rounded-lg border border-line px-3 text-sm"
          >
            Timer chime
            <span>{profile.sound ? "On" : "Off"}</span>
          </button>
          {!confirming ? (
            <button type="button" className="mt-6 h-11 text-sm text-muted" onClick={() => setConfirming(true)}>
              Reset progress
            </button>
          ) : (
            <div className="mt-6">
              <p className="text-sm">This clears workouts, shots, streak, and XP. Your name stays.</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <QuietButton type="button" onClick={() => setConfirming(false)}>
                  Cancel
                </QuietButton>
                <PrimaryButton
                  type="button"
                  onClick={() => {
                    reset();
                    setConfirming(false);
                    onOpenChange(false);
                  }}
                >
                  Reset
                </PrimaryButton>
              </div>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
