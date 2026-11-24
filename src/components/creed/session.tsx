import { useEffect, useRef, useState } from "react";
import { Pause, Play, X } from "lucide-react";
import {
  LEVELS,
  LEVEL_NOTES,
  SPOTS,
  drillById,
  formatClock,
  handLabel,
  spotById,
  workoutById,
  workoutMinutes,
  type SpotId,
} from "@/lib/creed/content";
import { useCreed } from "@/lib/creed/store";
import { cn } from "@/lib/cn";
import { MotionCourt } from "@/components/creed/court";
import { Eyebrow, PrimaryButton, QuietButton } from "@/components/creed/ui";

function beep() {
  const Ctx = window.AudioContext;
  if (!Ctx) return;
  const ctx = new Ctx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.value = 698;
  gain.gain.value = 0.035;
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.22);
  osc.stop(ctx.currentTime + 0.24);
  window.setTimeout(() => void ctx.close(), 400);
}

export function SessionScreen() {
  const session = useCreed((state) => state.session);
  const summary = useCreed((state) => state.summary);
  if (summary && !session) return <Summary />;
  if (!session) return null;
  return <LiveSession />;
}

function LiveSession() {
  const session = useCreed((state) => state.session);
  const profile = useCreed((state) => state.profile);
  const note = useCreed((state) => state.note);
  const tick = useCreed((state) => state.tick);
  const pause = useCreed((state) => state.pause);
  const resume = useCreed((state) => state.resume);
  const complete = useCreed((state) => state.completeDrill);
  const abandon = useCreed((state) => state.abandon);
  const setSpot = useCreed((state) => state.setSessionSpot);
  const setNote = useCreed((state) => state.setNote);
  const [leaving, setLeaving] = useState(false);
  const warned = useRef(false);

  useEffect(() => {
    if (!session?.running) return;
    const id = window.setInterval(() => tick(Date.now()), 250);
    return () => window.clearInterval(id);
  }, [session?.running, tick]);

  useEffect(() => {
    const onHide = () => {
      if (document.hidden) pause();
    };
    document.addEventListener("visibilitychange", onHide);
    return () => document.removeEventListener("visibilitychange", onHide);
  }, [pause]);

  useEffect(() => {
    if (!session) return;
    const current = drillById(workoutById(session.workoutId).drillIds[session.index]);
    const overtime = session.drillMs >= current.minutes * 60000;
    if (!overtime) {
      warned.current = false;
      return;
    }
    if (!warned.current) {
      warned.current = true;
      if (useCreed.getState().profile.sound) beep();
    }
  }, [session]);

  if (!session) return null;
  const workout = workoutById(session.workoutId);
  const drill = drillById(workout.drillIds[session.index]);
  const limit = drill.minutes * 60000;
  const remaining = limit - session.drillMs;
  const overtime = remaining < 0;
  const last = session.index === workout.drillIds.length - 1;
  const spot: SpotId | null = drill.track === "pick" ? session.spot : drill.track ?? null;
  const tally = spot ? session.shots[spot] : undefined;
  const hands = handLabel(profile.hand);

  return (
    <main className="mx-auto min-h-dvh max-w-lg px-4">
      <header className="sticky top-0 z-10 bg-bg pt-4 pb-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Eyebrow>
              {workout.title} · {session.index + 1}/{workout.drillIds.length}
            </Eyebrow>
            <p className="font-display text-sm tracking-wide text-muted tabular-nums">
              {formatClock(session.workoutMs)} / {workoutMinutes(workout)}:00
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-lg border border-line"
              onClick={() => (session.running ? pause() : resume())}
              aria-label={session.running ? "Pause" : "Resume"}
            >
              {session.running ? <Pause className="size-5" /> : <Play className="size-5" />}
            </button>
            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-lg border border-line"
              onClick={() => setLeaving(true)}
              aria-label="End workout"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>
        <div className="mt-3 flex gap-1">
          {workout.drillIds.map((id, index) => (
            <span
              key={id}
              className={cn("h-1 flex-1 rounded-full", index <= session.index ? "bg-primary" : "bg-line")}
            />
          ))}
        </div>
      </header>

      <MotionCourt motion={drill.motion} />

      <div className="mt-4 flex items-end justify-between gap-3">
        <h1 className="font-display text-4xl leading-none tracking-wide">{drill.title}</h1>
        <p className={cn("font-display text-4xl leading-none tabular-nums", overtime && "text-primary")}>
          {formatClock(remaining)}
        </p>
      </div>
      {overtime && <p className="mt-1 text-sm text-primary">Time's up. Finish the rep, or mark it done.</p>}
      {drill.model && (
        <p className="mt-2 text-sm tracking-widest text-muted uppercase">
          Study · {drill.model === "clark" ? "Clark" : drill.model === "bueckers" ? "Bueckers" : drill.model === "watkins" ? "Watkins" : "Curry"}
        </p>
      )}

      <p className="mt-4 border-l-2 border-primary pl-3 text-lg leading-snug">{drill.cue}</p>
      {drill.hands && (
        <p className="mt-3 text-sm text-muted">
          Strong hand is your {hands.strong}. Weak hand is your {hands.weak}.
        </p>
      )}
      <p className="mt-4 text-sm text-muted">{drill.setup}</p>
      <ol className="mt-3 space-y-2">
        {drill.steps.map((step, index) => (
          <li key={step} className="flex gap-3 text-sm">
            <span className="font-display text-lg leading-none text-primary tabular-nums">{index + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      {drill.note && (
        <label className="mt-4 block">
          <span className="text-sm text-muted">The sentence you'll say</span>
          <textarea
            value={note}
            onChange={(event) => setNote(event.target.value)}
            rows={3}
            maxLength={180}
            placeholder="I want the ball on the wing."
            className="mt-2 w-full resize-none rounded-lg border border-line bg-surface px-3 py-3 text-fg outline-none focus-visible:border-primary"
          />
        </label>
      )}

      {spot && (
        <div className="mt-5">
          {drill.track === "pick" && (
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {SPOTS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSpot(item.id)}
                  className={cn(
                    "h-11 shrink-0 rounded-full border px-3 text-sm",
                    item.id === spot ? "border-primary bg-primary text-bg" : "border-line text-fg",
                  )}
                >
                  {item.short}
                </button>
              ))}
            </div>
          )}
          <ShotButtons spot={spot} makes={tally?.makes ?? 0} attempts={tally?.attempts ?? 0} />
          <p className="mt-2 text-sm text-muted">Don't end on a miss. One more make, then you're done.</p>
        </div>
      )}

      <div className="sticky bottom-0 bg-bg pt-4 pb-safe">
        <PrimaryButton type="button" onClick={() => complete()}>
          {last ? "Finish workout" : "Done with this drill"}
        </PrimaryButton>
      </div>

      {leaving && (
        <div className="fixed inset-0 z-40 flex items-end justify-center bg-bg/80 px-4 pb-6">
          <div className="w-full max-w-lg rounded-xl border border-line bg-surface p-5" role="dialog" aria-modal="true">
            <h2 className="font-display text-2xl tracking-wide">Leave this workout?</h2>
            <p className="mt-2 text-sm text-muted">This session won't be saved. Shots you tapped stay only if you finish.</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <QuietButton type="button" onClick={() => setLeaving(false)}>
                Stay
              </QuietButton>
              <PrimaryButton type="button" onClick={() => abandon()}>
                Leave
              </PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function ShotButtons({ spot, makes, attempts }: { spot: SpotId; makes: number; attempts: number }) {
  const add = useCreed((state) => state.addSessionShot);
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <p className="font-display text-2xl tracking-wide">{spotById(spot).label}</p>
        <p className="tabular-nums text-muted">
          {makes}/{attempts}
        </p>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <QuietButton type="button" onClick={() => add("miss", spot)}>
          Miss
        </QuietButton>
        <PrimaryButton type="button" onClick={() => add("make", spot)}>
          Make
        </PrimaryButton>
      </div>
    </div>
  );
}

function Summary() {
  const summary = useCreed((state) => state.summary);
  const streak = useCreed((state) => state.streak);
  const dismiss = useCreed((state) => state.dismissSummary);
  if (!summary) return null;
  const workout = workoutById(summary.workoutId);
  const next = summary.unlocked ? LEVELS.find((level) => level.id === summary.level + 1) : undefined;
  return (
    <main className="mx-auto flex min-h-dvh max-w-lg flex-col justify-between px-4 py-8">
      <div>
        <Eyebrow>Work logged</Eyebrow>
        <h1 className="mt-2 font-display text-5xl leading-none tracking-wide">{workout.title}</h1>
        <p className="mt-3 text-muted">{summary.minutes} min on the floor</p>
        <p className="mt-8 font-display text-6xl leading-none tabular-nums">+{summary.xp}</p>
        <p className="text-sm tracking-widest text-muted uppercase">XP</p>
        <p className="mt-6 font-display text-3xl tabular-nums">{streak}-day streak</p>
        {summary.cleared && <p className="mt-6 border-l-2 border-primary pl-3 text-lg">{LEVEL_NOTES[summary.level]}</p>}
        {next && <p className="mt-4 text-lg">{next.name} is open.</p>}
      </div>
      <PrimaryButton type="button" onClick={() => dismiss()}>
        Back to today
      </PrimaryButton>
    </main>
  );
}
