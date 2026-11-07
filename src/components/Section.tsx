import type { ReactNode } from "react";

interface Props { id: string; title: string; intro?: string; wide?: boolean; children: ReactNode }

/** Two-column layout: sticky title on the left, content on the right. `wide` stacks them. */
export default function Section({ id, title, intro, wide, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-16 border-t border-line py-20 md:py-28">
      <div className={`mx-auto max-w-6xl gap-10 px-5 md:px-8 ${wide ? "" : "grid md:grid-cols-12"}`}>
        <header className={wide ? "mb-10 max-w-xl" : "md:col-span-4"}>
          <div className={wide ? "" : "md:sticky md:top-28"}>
            <h2 id={`${id}-title`} className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
            {intro && <p className="mt-3 max-w-xs text-muted">{intro}</p>}
          </div>
        </header>
        <div className={wide ? "" : "md:col-span-8"}>{children}</div>
      </div>
    </section>
  );
}
