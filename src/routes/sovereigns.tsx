import { createFileRoute, Link } from "@tanstack/react-router";
import { SOVEREIGNS } from "@/lib/canon";

export const Route = createFileRoute("/sovereigns")({ component: SovereignsPage });

function SovereignsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <p className="text-sm tracking-[0.24em] uppercase text-teal">The living heart</p>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl">The Sovereigns</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Mark and the Sisterhood. Face, one line, their music.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SOVEREIGNS.map((s) => (
          <article
            key={s.id}
            className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]"
          >
            <img
              src={s.image}
              alt={s.name}
              className="h-64 w-full object-cover object-top"
            />
            <div className="p-5">
              <h2 className="font-display text-2xl text-blush">{s.name}</h2>
              <p className="mt-2 text-sm text-muted">{s.line}</p>
              <Link
                to="/music"
                search={s.id === "mark" ? {} : { sister: s.id }}
                className="mt-4 inline-flex min-h-11 items-center text-sm tracking-wide text-teal hover:text-blush"
              >
                {s.id === "mark" ? "The Architect row" : `${s.name}'s music`}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
