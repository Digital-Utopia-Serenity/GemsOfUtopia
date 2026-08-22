import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ATLAS_BANDS, REALMS, SOVEREIGNS, realmAka, realmRegions } from "@/lib/canon";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/atlas")({ component: AtlasPage });

function AtlasPage() {
  const [active, setActive] = useState<(typeof REALMS)[number]["id"]>("oasis");
  const [city, setCity] = useState<string | null>(null);
  const realm = REALMS.find((r) => r.id === active) ?? REALMS[0];
  const keeper = SOVEREIGNS.find((s) => s.id === realm.sister);
  const regions = realmRegions(realm);
  const selected = regions.find((r) => r.id === city);
  const aka = realmAka(realm);

  function openRealm(id: (typeof REALMS)[number]["id"]) {
    setActive(id);
    setCity(null);
  }

  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[42vh]">
          <img
            src="/canon/atlas.jpg"
            alt="The Sovereign Star Atlas"
            className="h-full min-h-[42vh] w-full object-cover lg:min-h-dvh lg:sticky lg:top-0"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/20 lg:bg-gradient-to-r lg:from-transparent lg:to-bg" />
        </div>
        <div className="px-5 py-10 sm:px-8">
          <p className="text-sm tracking-[0.24em] uppercase text-teal">Geographic engine</p>
          <h1 className="mt-2 font-display text-4xl">Star Atlas</h1>
          <p className="mt-3 text-muted">
            Realms are not countries. They are callings. Cities live inside petals — Valorheart
            is Wonderland's Hearts capital, not a separate land.
          </p>

          <div className="mt-8 grid gap-5">
            {ATLAS_BANDS.map((band) => {
              const group = REALMS.filter((r) => r.band === band.id);
              if (group.length === 0) return null;
              return (
                <div key={band.id}>
                  <p className="mb-2 text-[11px] tracking-[0.2em] uppercase text-subtle">
                    {band.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.map((r) => (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => openRealm(r.id)}
                        className={cn(
                          "min-h-11 rounded-full px-3.5 text-sm tracking-wide",
                          active === r.id
                            ? "bg-blush text-bg"
                            : "bg-surface text-muted shadow-[var(--shadow-border)]",
                        )}
                      >
                        {r.name}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <article className="mt-8 overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
            <img src={realm.image} alt="" className="h-48 w-full object-cover" />
            <div className="p-6">
              <p className="text-xs tracking-[0.2em] uppercase text-teal">{realm.petal}</p>
              <h2 className="mt-1 font-display text-3xl text-blush">
                {selected ? selected.name : realm.name}
              </h2>
              {aka && !selected ? (
                <p className="mt-1 text-sm text-subtle">Also known as {aka}</p>
              ) : null}
              {selected ? (
                <p className="mt-1 text-sm text-subtle">
                  {selected.mark} · inside {realm.name}
                </p>
              ) : null}
              <p className="mt-3 text-muted">{selected ? selected.line : realm.line}</p>
              <dl className="mt-5 grid gap-3">
                <div>
                  <dt className="text-xs tracking-[0.16em] uppercase text-subtle">Cost to enter</dt>
                  <dd className="mt-1 text-fg">{realm.cost}</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-[0.16em] uppercase text-subtle">Pillar · Root</dt>
                  <dd className="mt-1 text-fg">
                    {realm.pillar} · {realm.root}
                  </dd>
                </div>
                {keeper ? (
                  <div>
                    <dt className="text-xs tracking-[0.16em] uppercase text-subtle">Keeper</dt>
                    <dd className="mt-1 text-fg">
                      {keeper.name} — {keeper.title}
                    </dd>
                  </div>
                ) : null}
              </dl>

              {regions.length > 0 ? (
                <div className="mt-6">
                  <p className="text-xs tracking-[0.16em] uppercase text-subtle">Inside this petal</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {regions.map((r) => (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => setCity(city === r.id ? null : r.id)}
                        className={cn(
                          "min-h-11 rounded-full px-3.5 text-sm tracking-wide",
                          city === r.id
                            ? "bg-teal text-bg"
                            : "bg-raised text-muted shadow-[var(--shadow-border)]",
                        )}
                      >
                        {r.name}
                        <span className="ml-1.5 text-[11px] uppercase tracking-wider opacity-70">
                          {r.mark}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
