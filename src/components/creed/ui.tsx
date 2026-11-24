import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="font-display text-sm tracking-widest text-muted uppercase">{children}</p>;
}

export function PrimaryButton({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 font-semibold text-bg disabled:cursor-not-allowed disabled:opacity-40",
        className,
      )}
    />
  );
}

export function QuietButton({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={cn(
        "flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-line bg-surface px-4 font-semibold text-fg disabled:cursor-not-allowed disabled:opacity-40",
        className,
      )}
    />
  );
}

export function Meter({ value }: { value: number }) {
  const width = Math.max(0, Math.min(100, value));
  return (
    <span className="block h-1.5 overflow-hidden rounded-full bg-line" aria-hidden="true">
      <span className="block h-full bg-primary" style={{ width: `${width}%` }} />
    </span>
  );
}
