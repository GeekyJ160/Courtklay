import { SPOTS, type Motion, type SpotId } from "@/lib/creed/content";

export function MotionCourt({ motion }: { motion: Motion }) {
  return (
    <div className="motion relative overflow-hidden rounded-xl bg-court text-bg" data-motion={motion} aria-hidden="true">
      <svg viewBox="0 0 300 168" className="block w-full">
        <g fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="16" y="10" width="268" height="148" />
          <line x1="122" y1="22" x2="178" y2="22" strokeWidth="3" />
          <circle cx="150" cy="34" r="8" />
          <line x1="150" y1="34" x2="150" y2="22" />
          <rect x="112" y="22" width="76" height="78" />
          <path d="M40 22 V68 A 110 72 0 0 0 260 68 V22" />
        </g>
      </svg>
      <span className="player" />
      <span className="cone cone-a" />
      <span className="cone cone-b" />
      <span className="ball" />
      <span className="ball ball-b" />
    </div>
  );
}

export function ShotCourt({ selected, onSelect }: { selected: SpotId; onSelect: (id: SpotId) => void }) {
  return (
    <svg viewBox="0 0 300 268" className="w-full select-none rounded-xl bg-court text-bg" role="group" aria-label="Half court">
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="16" y="12" width="268" height="244" />
        <line x1="120" y1="26" x2="180" y2="26" strokeWidth="3" />
        <circle cx="150" cy="40" r="8" />
        <line x1="150" y1="40" x2="150" y2="26" />
        <rect x="112" y="26" width="76" height="108" />
        <circle cx="150" cy="134" r="28" />
        <path d="M32 26 V90 A 118 88 0 0 0 268 90 V26" />
      </g>
      {SPOTS.map((spot) => {
        const on = spot.id === selected;
        return (
          <g
            key={spot.id}
            role="button"
            tabIndex={0}
            aria-label={spot.label}
            aria-pressed={on}
            onClick={() => onSelect(spot.id)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onSelect(spot.id);
              }
            }}
          >
            <circle
              cx={spot.x}
              cy={spot.y}
              r="16"
              className={on ? "fill-primary" : "fill-court"}
              stroke="currentColor"
              strokeWidth="2"
            />
            <text
              x={spot.x}
              y={spot.y + 3}
              textAnchor="middle"
              fontSize="8"
              fontWeight="700"
              className="fill-bg"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              {spot.short}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
