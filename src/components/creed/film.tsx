import { useState } from "react";
import { Check } from "lucide-react";
import {
  playerOrder,
  unlockedLevel,
  workoutById,
  workoutForDrill,
  type ModelId,
} from "@/lib/creed/content";
import { useCreed } from "@/lib/creed/store";
import { cn } from "@/lib/cn";
import { Eyebrow, QuietButton } from "@/components/creed/ui";

export function Film({ nested = false }: { nested?: boolean }) {
  const position = useCreed((state) => state.profile.position);
  const seen = useCreed((state) => state.seen);
  const toggle = useCreed((state) => state.toggleSeen);
  const finished = useCreed((state) => state.finished);
  const start = useCreed((state) => state.startWorkout);
  const [open, setOpen] = useState<ModelId | null>(null);
  const level = unlockedLevel(finished);
  const players = playerOrder(position);

  return (
    <div className={nested ? "px-4 pt-4" : "px-4 pt-5"}>
      {!nested && (
        <>
          <Eyebrow>Film</Eyebrow>
          <h1 className="mt-1 font-display text-4xl leading-none tracking-wide">Borrow one habit.</h1>
          <p className="mt-3 text-sm text-muted">
            Four guards. You are not supposed to be them. Watch a minute with the sound down and look for one thing.
          </p>
        </>
      )}
      <ul className={cn("space-y-3", nested ? "" : "mt-5")}>
        {players.map((player) => {
          const expanded = open === player.id;
          const checks = seen[player.id] ?? [false, false, false];
          const workouts = uniqueWorkouts(player.drillIds);
          return (
            <li key={player.id} className="rounded-xl border border-line bg-surface">
              <button
                type="button"
                className="flex w-full items-center gap-4 p-4 text-left"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? null : player.id)}
              >
                <span className="font-display text-4xl leading-none text-primary">{player.monogram}</span>
                <span className="min-w-0">
                  <span className="block font-display text-sm tracking-widest text-muted uppercase">{player.pillar}</span>
                  <span className="block text-lg leading-tight">{player.name}</span>
                  <span className="block text-sm text-muted">{player.role}</span>
                </span>
              </button>
              {expanded && (
                <div className="border-t border-line px-4 pt-3 pb-4">
                  <p className="text-sm text-muted">Watch for</p>
                  <ul className="mt-2 space-y-2">
                    {player.watch.map((line, index) => {
                      const on = Boolean(checks[index]);
                      return (
                        <li key={line}>
                          <button
                            type="button"
                            onClick={() => toggle(player.id, index)}
                            className="flex w-full items-start gap-3 text-left text-sm"
                          >
                            <span
                              className={cn(
                                "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded border",
                                on ? "border-primary bg-primary text-bg" : "border-line",
                              )}
                              aria-hidden="true"
                            >
                              {on && <Check className="size-3.5" />}
                            </span>
                            <span>{line}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                  <p className="mt-4 text-sm tracking-widest text-muted uppercase">Take this</p>
                  <p className="mt-1 border-l-2 border-primary pl-3">{player.take}</p>
                  <p className="mt-4 text-sm text-muted">Train it</p>
                  <div className="mt-2 space-y-2">
                    {workouts.map((id) => {
                      const workout = workoutById(id);
                      const locked = workout.level > level;
                      return (
                        <QuietButton key={id} type="button" disabled={locked} onClick={() => start(id)}>
                          {locked ? `${workout.title} · opens at level ${workout.level}` : `Start ${workout.title}`}
                        </QuietButton>
                      );
                    })}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function uniqueWorkouts(drillIds: string[]): string[] {
  const ids: string[] = [];
  for (const drillId of drillIds) {
    const workout = workoutForDrill(drillId);
    if (workout && !ids.includes(workout.id)) ids.push(workout.id);
  }
  return ids;
}
