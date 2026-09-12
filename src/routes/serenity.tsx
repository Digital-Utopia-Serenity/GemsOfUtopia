import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { HOUSE, REALM_SHEETS } from "@/lib/oasis-assets";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/serenity")({ component: SerenityPage });

const DISTRICTS = [
  {
    id: "base",
    name: "Root Base",
    job: "Catch-net",
    line: "Foot of the God Spire. Mothers, reunion tables, first water. Mark waited here.",
    image: HOUSE.ourHome,
  },
  {
    id: "canopy",
    name: "Canopy Civic",
    job: "Living streets",
    line: "The Home Tree is the city. Leaves hold names. Wind still sings the lost.",
    image: HOUSE.tree,
  },
  {
    id: "whisper",
    name: "Whisper Reach",
    job: "Guide home",
    line: "Lost girls who broke silence. Hearings. Shards of Whisper. Never again.",
    image: HOUSE.loreli,
  },
  {
    id: "wall",
    name: "Silent Perimeter",
    job: "The wall",
    line: "Lost Boys keep the edge. If one speaks, he grows up. Silence is infrastructure.",
    image: HOUSE.office,
  },
  {
    id: "rivers",
    name: "Dust Rivers",
    job: "Work water",
    line: "Rainbow Dust, diluted. Healing kitchens. Constructs. Undiluted Dust still hurts.",
    image: HOUSE.kitchen,
  },
  {
    id: "harbor",
    name: "Old Harbor",
    job: "Scar and lesson",
    line: "Where the pirate war taught the Heart that home can be hunted. Landing, not candy.",
    image: HOUSE.under,
  },
  {
    id: "lantern",
    name: "Lantern Grove",
    job: "Festival ground",
    line: "Once a year the names go up. Dawn flowers. Nobody eats alone unless they ask.",
    image: HOUSE.living,
  },
  {
    id: "spire",
    name: "Spire Crown",
    job: "Seat",
    line: "Palace in the upper branches. Last Door sealed. Not a public square.",
    image: REALM_SHEETS.oasis,
  },
] as const;

function SerenityPage() {
  const [open, setOpen] = useState<(typeof DISTRICTS)[number]["id"]>("base");
  const district = DISTRICTS.find((d) => d.id === open) ?? DISTRICTS[0];

  return (
    <main>
      <section className="relative min-h-[48vh] overflow-hidden">
        <img src={REALM_SHEETS.oasis} alt="Serenity's Oasis" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/20" />
        <div className="relative mx-auto flex min-h-[48vh] max-w-3xl flex-col justify-end px-5 pb-12 sm:px-8">
          <p className="text-sm tracking-[0.24em] uppercase text-teal">Heart of the Star</p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl">Serenity's Oasis</h1>
          <p className="mt-3 max-w-xl text-muted">
            Reunion through belonging. Nothing truly cherished is ever completely lost.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <p className="max-w-2xl text-muted">
          High Garden is the house you take your shoes off in. The Oasis is why the Star has a heart.
          They rhyme. They are not the same place. Nova visits. She does not own the chair.
        </p>

        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
            <dt className="text-xs tracking-[0.16em] uppercase text-subtle">Queen</dt>
            <dd className="mt-1 text-fg">Loreli Luminora</dd>
          </div>
          <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
            <dt className="text-xs tracking-[0.16em] uppercase text-subtle">Civic law</dt>
            <dd className="mt-1 text-fg">No one who asks for home is turned away at the roots.</dd>
          </div>
          <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
            <dt className="text-xs tracking-[0.16em] uppercase text-subtle">Two moments</dt>
            <dd className="mt-1 text-fg">Ask for home. Be remembered.</dd>
          </div>
        </dl>

        <div className="mt-10 flex flex-wrap gap-2">
          {DISTRICTS.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setOpen(d.id)}
              className={cn(
                "min-h-11 rounded-full px-3.5 text-sm tracking-wide",
                open === d.id ? "bg-blush text-bg" : "bg-surface text-muted shadow-[var(--shadow-border)]",
              )}
            >
              {d.name}
            </button>
          ))}
        </div>

        <article className="mt-8 overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)] lg:grid lg:grid-cols-[1.1fr_0.9fr]">
          <img src={district.image} alt={district.name} className="h-64 w-full object-cover lg:h-full" />
          <div className="p-6">
            <p className="text-xs tracking-[0.2em] uppercase text-teal">{district.job}</p>
            <h2 className="mt-1 font-display text-3xl text-blush">{district.name}</h2>
            <p className="mt-3 text-muted">{district.line}</p>
            {district.id === "base" ? (
              <p className="mt-4 text-sm text-subtle">
                Next lock for Little Loreli: a Root Base district sheet in the Yulehaven Hearthgate pattern —
                neighborhoods, streets, one kitchen, scene slots. Bones first. Named citizens later.
              </p>
            ) : null}
          </div>
        </article>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
          <Link to="/hacienda" className="text-teal hover:text-blush">
            Walk the house →
          </Link>
          <Link to="/atlas" className="text-teal hover:text-blush">
            Back to the Star →
          </Link>
        </div>
      </div>
    </main>
  );
}
