import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

/** App shell: one content column and a fixed bottom bar, same on every section. */
export function Scaffold({ children, navigation }: { children: ReactNode; navigation: ReactNode }) {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <main className="mx-auto max-w-lg pb-nav">{children}</main>
      {navigation}
    </div>
  );
}

export function BottomNavigationBar<T extends string>({
  items,
  value,
  onChange,
}: {
  items: { id: T; label: string; icon: LucideIcon }[];
  value: T;
  onChange: (id: T) => void;
}) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-bg" aria-label="Sections">
      <div className="mx-auto flex max-w-lg pb-safe">
        {items.map((item) => {
          const Icon = item.icon;
          const on = value === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-current={on ? "page" : undefined}
              onClick={() => onChange(item.id)}
              className={cn(
                "relative flex min-h-14 flex-1 flex-col items-center justify-center gap-1 px-1 text-xs leading-none",
                on ? "text-fg" : "text-muted",
              )}
            >
              {on && <span className="absolute inset-x-0 top-0 mx-auto h-0.5 w-8 bg-primary" />}
              <Icon className="size-5" strokeWidth={on ? 2.4 : 1.8} />
              <span className="whitespace-nowrap">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
