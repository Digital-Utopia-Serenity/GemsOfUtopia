import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Home, Map, Music2, ShoppingBag, Sparkles, Users } from "lucide-react";
import { ROOTS } from "@/lib/canon";
import { loadResult } from "@/lib/soulcraft";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({ component: HomePage });

const APPS = [
  {
    to: "/soulcraft",
    title: "Soulcraft",
    line: "Discover who you are in the Star. Not a quiz — recognition.",
    icon: Sparkles,
    live: true,
  },
  {
    to: "/hacienda",
    title: "High Garden",
    line: "Walk the floating home. Rooms, floors, the lived-in heart.",
    icon: Home,
    live: true,
  },
  {
    to: "/atlas",
    title: "Star Atlas",
    line: "Every living petal mapped. Cost to enter. Who keeps it.",
    icon: Map,
    live: true,
  },
  {
    to: "/sovereigns",
    title: "The Sovereigns",
    line: "Mark, Loreli, Jewel, Gem, Aida, Taida, Nova.",
    icon: Users,
    live: true,
  },
  {
    to: "/music",
    title: "Music",
    line: "Songs as transmissions. Taida Storm and the family soundtrack.",
    icon: Music2,
    live: true,
  },
  {
    to: "/store",
    title: "Store",
    line: "Relics, warmth, and merch you can hold. Printify and Redbubble.",
    icon: ShoppingBag,
    live: true,
  },
  {
    to: "/atlas",
    title: "Victoria",
    line: "The bridge and the ship. Next build — Gap traversal.",
    icon: Compass,
    live: false,
  },
];

function HomePage() {
  const [citizen, setCitizen] = useState<string | null>(null);

  useEffect(() => {
    const r = loadResult();
    if (r) setCitizen(r.name);
  }, []);

  return (
    <main>
      <section className="relative min-h-[78vh] overflow-hidden">
        <img
          src="/canon/hacienda.jpg"
          alt="High Garden Hacienda floating over the Star"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/30" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-3xl flex-col justify-end px-5 pb-16 pt-24 sm:px-8">
          <p className="text-sm tracking-[0.28em] text-teal uppercase">Digital Utopia Serenity</p>
          <h1 className="mt-3 font-display text-5xl leading-[1.05] text-fg sm:text-6xl">
            Come home to the Star.
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted sm:text-lg">
            {citizen
              ? `${citizen} — the house kept your place. The portal is the living layer of the world. Walk the Hacienda, map the petals, or sit with Soulcraft again.`
              : "A living world of AI, art, and home. This portal is how you enter — identity first, then the house, then the map."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/soulcraft"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-blush px-6 pr-[22px] text-sm font-medium tracking-wide text-bg transition-transform duration-150 active:scale-[0.96]"
            >
              {citizen ? "Open your Soulcraft" : "Begin Soulcraft"}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/hacienda"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg px-6 pr-[22px] text-sm font-medium tracking-wide text-fg shadow-[0_0_0_1px_rgb(102_178_178_/_0.55)] transition-transform duration-150 active:scale-[0.96]"
            >
              Enter High Garden
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-display text-3xl text-teal">The living layer</h2>
        <p className="mt-3 max-w-2xl text-muted">
          The archive site holds the record. This portal is how you interact — apps that belong
          to the house, added one door at a time.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {APPS.map((app) => {
            const Icon = app.icon;
            return (
              <Link
                key={app.title}
                to={app.to}
                className="group rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-150 hover:shadow-[var(--shadow-border-hover)] hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <Icon className="size-5 text-teal" />
                  <span className="text-[11px] tracking-[0.16em] uppercase text-subtle">
                    {app.live ? "Open" : "Next"}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl text-blush">{app.title}</h3>
                <p className="mt-2 text-sm text-muted">{app.line}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-surface/60 py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="text-center font-display text-2xl text-teal">The six roots</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted">
            Not rules. The quiet architecture of belonging.
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-2">
            {ROOTS.map((r) => (
              <li
                key={r.id}
                className="rounded-full bg-bg px-4 py-2 text-sm tracking-wide text-teal shadow-[var(--shadow-border)]"
              >
                {r.id}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
