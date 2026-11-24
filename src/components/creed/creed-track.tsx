import { useState } from "react";
import { Check } from "lucide-react";
import {
  CHALLENGES,
  TRACK_LABEL,
  featuredChallenge,
  sameWeek,
  todayKey,
  type Track,
} from "@/lib/creed/content";
import { useCreed } from "@/lib/creed/store";
import { cn } from "@/lib/cn";
import { Eyebrow, PrimaryButton } from "@/components/creed/ui";

const FILTERS: { id: "all" | Track; label: string }[] = [
  { id: "all", label: "All" },
  { id: "confidence", label: "Confidence" },
  { id: "lead", label: "Lead" },
  { id: "aggression", label: "Aggression" },
];

export function CreedTrack({ now, nested = false }: { now: Date | null; nested?: boolean }) {
  const challenges = useCreed((state) => state.challenges);
  const complete = useCreed((state) => state.completeChallenge);
  const note = useCreed((state) => state.note);
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const featured = now ? featuredChallenge(now) : CHALLENGES[0];
  const today = now ? todayKey(now) : null;
  const list = CHALLENGES.filter(
    (item) => item.id !== featured.id && (filter === "all" || item.track === filter),
  );

  return (
    <div className={nested ? "px-4 pt-4" : "px-4 pt-5"}>
      {!nested && (
        <>
          <Eyebrow>Creed</Eyebrow>
          <h1 className="mt-1 font-display text-4xl leading-none tracking-wide">Confidence. Lead. Attack.</h1>
          <p className="mt-3 text-sm text-muted">
            Drills build the skill. These build the habit of using it. A week sticks when you do the hard one out loud.
          </p>
        </>
      )}

      <article className={cn("rounded-xl border border-primary bg-surface p-4", nested ? "" : "mt-5")}>
        <p className="font-display text-sm tracking-widest text-primary uppercase">This week · {TRACK_LABEL[featured.track]}</p>
        <h2 className="mt-1 font-display text-3xl leading-none tracking-wide">{featured.title}</h2>
        <p className="mt-3 text-sm">{featured.how}</p>
        <p className="mt-2 text-sm text-muted">Done looks like: {featured.done}</p>
        <ChallengeButton id={featured.id} today={today} done={challenges} onDone={complete} />
      </article>

      <div className="mt-5 flex gap-2 overflow-x-auto">
        {FILTERS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            className={cn(
              "h-11 shrink-0 rounded-full border px-3 text-sm",
              filter === item.id ? "border-primary bg-primary text-bg" : "border-line text-fg",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <ul className="mt-4 space-y-3">
        {list.map((item) => {
          const doneToday = today ? challenges.some((entry) => entry.id === item.id && entry.day === today) : false;
          const doneWeek = now ? challenges.some((entry) => entry.id === item.id && sameWeek(entry.day, now)) : false;
          return (
            <li key={item.id} className="rounded-xl border border-line p-4">
              <p className="font-display text-sm tracking-widest text-muted uppercase">{TRACK_LABEL[item.track]}</p>
              <h3 className="mt-1 text-lg leading-tight">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.how}</p>
              <p className="mt-2 text-sm">Done looks like: {item.done}</p>
              <ChallengeButton id={item.id} today={today} done={challenges} onDone={complete} />
              {doneWeek && !doneToday && <p className="mt-3 text-sm text-muted">Logged earlier this week.</p>}
            </li>
          );
        })}
      </ul>

      {note.trim() && (
        <aside className="mt-6 border-l-2 border-primary pl-3">
          <p className="font-display text-sm tracking-widest text-muted uppercase">Your sentence</p>
          <p className="mt-1">{note}</p>
        </aside>
      )}
    </div>
  );
}

function ChallengeButton({
  id,
  today,
  done,
  onDone,
}: {
  id: string;
  today: string | null;
  done: { id: string; day: string }[];
  onDone: (id: string) => boolean;
}) {
  const already = today ? done.some((entry) => entry.id === id && entry.day === today) : false;
  if (already) return <Logged />;
  return (
    <PrimaryButton type="button" className="mt-4" onClick={() => onDone(id)}>
      I did this
    </PrimaryButton>
  );
}

function Logged() {
  return (
    <p className="mt-4 flex items-center gap-2 text-sm text-primary">
      <Check className="size-4" /> Logged today
    </p>
  );
}
