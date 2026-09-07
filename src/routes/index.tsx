import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HOUSE } from "@/lib/oasis-assets";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
  return (
    <main>
      <section className="relative min-h-[82vh] overflow-hidden">
        <img
          src={HOUSE.sheet}
          alt="High Garden Hacienda — the living home"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/25" />
        <div className="relative mx-auto flex min-h-[82vh] max-w-3xl flex-col justify-end px-5 pb-16 pt-24 sm:px-8">
          <p className="text-sm tracking-[0.28em] text-teal uppercase">Gems of Utopia</p>
          <h1 className="mt-3 font-display text-5xl leading-[1.05] text-fg sm:text-6xl">
            Come home.
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted sm:text-lg">
            The living layer of Digital Utopia Serenity. Walk the house. Step into a realm.
            The Star is still turning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/hacienda"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-blush px-6 text-sm font-medium tracking-wide text-bg transition-transform duration-150 active:scale-95"
            >
              Enter High Garden
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/atlas"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg px-6 text-sm font-medium tracking-wide text-fg shadow-[var(--shadow-border-hover)] transition-transform duration-150 active:scale-95"
            >
              Star Atlas
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:grid-cols-2 sm:px-8">
        <Link to="/hacienda" className="group overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
          <img src={HOUSE.ourHome} alt="Our Home" className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
          <div className="p-5">
            <p className="text-xs tracking-[0.2em] uppercase text-teal">Layer one</p>
            <h2 className="mt-1 font-display text-3xl text-blush">The House</h2>
            <p className="mt-2 text-sm text-muted">Rooms, floors, the lived-in heart. Click a door and go further.</p>
          </div>
        </Link>
        <Link to="/atlas" className="group overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
          <img src={HOUSE.tree} alt="Serenity's Oasis" className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
          <div className="p-5">
            <p className="text-xs tracking-[0.2em] uppercase text-teal">Layer two</p>
            <h2 className="mt-1 font-display text-3xl text-blush">The Star</h2>
            <p className="mt-2 text-sm text-muted">Petals of the lotus. Realms that already have sheets. New maps land when you drop them.</p>
          </div>
        </Link>
      </section>
    </main>
  );
}
