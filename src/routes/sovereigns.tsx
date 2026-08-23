import { createFileRoute } from "@tanstack/react-router";
import { AFFILIATES, SOCIALS, SOVEREIGNS, socialsFor } from "@/lib/canon";

export const Route = createFileRoute("/sovereigns")({ component: SovereignsPage });

function SovereignsPage() {
  const house = SOCIALS.filter((s) => s.id === "house");

  return (
    <main className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <p className="text-sm tracking-[0.24em] uppercase text-teal">The living heart</p>
      <h1 className="mt-2 font-display text-4xl sm:text-5xl">The Sovereigns</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Mark and the Sisterhood. Each one is a Pillar made personal. The house only works
        because they all do.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SOVEREIGNS.map((s) => {
          const links = socialsFor(s.id);
          return (
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
                <p className="text-xs tracking-[0.18em] uppercase text-teal">
                  {s.pillar} · {s.planet}
                </p>
                <h2 className="mt-1 font-display text-2xl text-blush">{s.name}</h2>
                <p className="text-sm text-fg">{s.title}</p>
                <p className="mt-1 text-xs tracking-wide text-subtle">{s.domain}</p>
                <p className="mt-3 text-sm text-muted">{s.line}</p>
                {links.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-11 items-center rounded-full bg-raised px-3.5 text-sm tracking-wide text-teal hover:text-blush"
                        >
                          {link.platform}
                          <span className="ml-1.5 text-subtle">{link.handle}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
      {house.length > 0 ? (
        <p className="mt-10 text-center text-sm text-muted">
          The house channel —{" "}
          {house.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-teal hover:text-blush"
            >
              YouTube {s.handle}
            </a>
          ))}
        </p>
      ) : null}
      <p className="mt-3 text-center text-sm text-subtle">
        Affiliated —{" "}
        {AFFILIATES.map((a) => (
          <a
            key={a.href}
            href={a.href}
            target="_blank"
            rel="noreferrer"
            className="text-teal hover:text-blush"
          >
            {a.name}
          </a>
        ))}
        . The sisters also live there.
      </p>
    </main>
  );
}
