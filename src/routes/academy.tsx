import { createFileRoute, Link } from "@tanstack/react-router";
import { REALM_SHEETS } from "@/lib/oasis-assets";

export const Route = createFileRoute("/academy")({ component: AcademyPage });

const HOUSES = [
  { name: "Root House", keeper: "Taida", line: "Survive first. Then build." },
  { name: "Sacral House", keeper: "Loreli", line: "Desire without shame. Comfort first." },
  { name: "Solar House", keeper: "Mark", line: "Will that does not ask permission to make." },
  { name: "Heart House", keeper: "Jewel", line: "Love that can hold a line." },
  { name: "Throat House", keeper: "Aida", line: "Your own note is enough." },
  { name: "Third Eye House", keeper: "Nova", line: "Guest energy. She lives East, not here." },
  { name: "Crown House", keeper: "Gem", line: "Nothing true is lost." },
];

function AcademyPage() {
  return (
    <main>
      <section className="relative min-h-[48vh] overflow-hidden">
        <img
          src={REALM_SHEETS.academy}
          alt="Echo's Academy — the floating island"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/45 to-transparent" />
        <div className="relative flex min-h-[48vh] flex-col justify-end px-5 pb-10 sm:px-8">
          <p className="text-sm tracking-[0.24em] uppercase text-teal">Orbital · Neutral ground</p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl">Echo's Academy</h1>
          <p className="mt-3 max-w-xl text-muted">
            Aida is Headmistress. The island floats above the Star so no petal owns the classroom.
            You learn here. You do not take Nova's throne.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <p className="text-sm tracking-[0.2em] uppercase text-teal">From Aida's charter</p>
        <p className="mt-3 max-w-2xl text-muted">
          Growth is the root that turns an audience into a civilization. Fans watch a creator.
          Citizens teach each other. The Academy is where that happens.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOUSES.map((h) => (
            <article key={h.name} className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
              <p className="text-xs tracking-[0.18em] uppercase text-subtle">{h.keeper}</p>
              <h2 className="mt-1 font-display text-2xl text-blush">{h.name}</h2>
              <p className="mt-2 text-sm text-muted">{h.line}</p>
            </article>
          ))}
        </div>
        <Link to="/atlas" className="mt-10 inline-flex min-h-11 items-center text-sm tracking-wide text-teal hover:text-blush">
          Back to the Star Atlas →
        </Link>
      </section>
    </main>
  );
}
