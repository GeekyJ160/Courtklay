import { useState } from "react";
import { SPOTS, pct, spotById, type SpotId } from "@/lib/creed/content";
import { shotTotals, useCreed } from "@/lib/creed/store";
import { ShotCourt } from "@/components/creed/court";
import { Eyebrow, Meter, PrimaryButton, QuietButton } from "@/components/creed/ui";

export function Shots() {
  const draft = useCreed((state) => state.courtDraft);
  const spot = useCreed((state) => state.courtSpot);
  const setSpot = useCreed((state) => state.setCourtSpot);
  const add = useCreed((state) => state.addCourtShot);
  const log = useCreed((state) => state.logCourt);
  const shots = useCreed((state) => state.shots);
  const [loggedXp, setLoggedXp] = useState<number | null>(null);

  const draftEntries = Object.values(draft);
  const draftMakes = draftEntries.reduce((sum, item) => sum + (item?.makes ?? 0), 0);
  const draftAttempts = draftEntries.reduce((sum, item) => sum + (item?.attempts ?? 0), 0);
  const here = draft[spot] ?? { makes: 0, attempts: 0 };
  const totals = shotTotals(shots);

  const rows = SPOTS.map((item) => {
    const bag = shots.filter((entry) => entry.spot === item.id);
    const makes = bag.reduce((sum, entry) => sum + entry.makes, 0);
    const attempts = bag.reduce((sum, entry) => sum + entry.attempts, 0);
    return { ...item, makes, attempts };
  }).sort((a, b) => b.attempts - a.attempts);

  return (
    <div className="px-4 pt-5">
      <Eyebrow>Shot Lab</Eyebrow>
      <div className="mt-1 flex items-end justify-between gap-3">
        <h1 className="font-display text-4xl leading-none tracking-wide">Makes count. Misses count.</h1>
      </div>
      <p className="mt-3 text-sm text-muted">
        Left and right are yours, facing the basket.{" "}
        {totals.attempts > 0 ? (
          <span className="tabular-nums text-fg">
            All time {totals.makes}/{totals.attempts} · {pct(totals.makes, totals.attempts)}%
          </span>
        ) : (
          "Nothing logged yet."
        )}
      </p>

      <div className="mt-4">
        <ShotCourt selected={spot} onSelect={setSpot} />
      </div>

      <div className="mt-4 flex items-baseline justify-between">
        <h2 className="font-display text-3xl tracking-wide">{spotById(spot).label}</h2>
        <p className="tabular-nums text-muted">
          {here.makes}/{here.attempts}
          {here.attempts > 0 ? ` · ${pct(here.makes, here.attempts)}%` : ""}
        </p>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <QuietButton type="button" onClick={() => add("miss")}>
          Miss
        </QuietButton>
        <PrimaryButton type="button" onClick={() => add("make")}>
          Make
        </PrimaryButton>
      </div>
      <p className="mt-3 text-sm text-muted tabular-nums">
        This session {draftMakes}/{draftAttempts}
        {draftAttempts > 0 ? ` · ${pct(draftMakes, draftAttempts)}%` : ""}
      </p>
      <QuietButton
        type="button"
        className="mt-3"
        disabled={draftAttempts === 0}
        onClick={() => setLoggedXp(log())}
      >
        Log this session
      </QuietButton>
      {loggedXp !== null && (
        <p className="mt-2 text-sm text-muted">
          {loggedXp > 0 ? ` Logged. +${loggedXp} XP for 10 shots.` : " Logged."}
        </p>
      )}

      <h2 className="mt-8 font-display text-2xl tracking-wide">By spot</h2>
      <ul className="mt-3 space-y-3">
        {rows.map((row) => (
          <li key={row.id}>
            <button type="button" onClick={() => setSpot(row.id)} className="block w-full text-left">
              <span className="flex items-baseline justify-between gap-3 text-sm">
                <span>{row.label}</span>
                <span className="tabular-nums text-muted">
                  {row.attempts > 0 ? `${row.makes}/${row.attempts} · ${pct(row.makes, row.attempts)}%` : "—"}
                </span>
              </span>
              <span className="mt-1 block">
                <Meter value={row.attempts ? pct(row.makes, row.attempts) : 0} />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
