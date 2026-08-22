import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { FLOORS, ROOMS } from "@/lib/canon";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/hacienda")({ component: HaciendaPage });

function HaciendaPage() {
  const [floor, setFloor] = useState<(typeof FLOORS)[number]["id"]>("main");
  const rooms = useMemo(() => ROOMS.filter((r) => r.floor === floor), [floor]);
  const meta = FLOORS.find((f) => f.id === floor);

  return (
    <main>
      <section className="relative h-[42vh] min-h-72 overflow-hidden">
        <img
          src="/canon/hacienda.jpg"
          alt="High Garden Hacienda"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
        <div className="relative flex h-full flex-col justify-end px-5 pb-8 sm:px-8">
          <p className="text-sm tracking-[0.24em] uppercase text-teal">Sacred Heart Home</p>
          <h1 className="mt-1 font-display text-4xl sm:text-5xl">High Garden Hacienda</h1>
          <p className="mt-2 max-w-xl text-muted">
            Sun-drenched, deeply loved, slightly messy. A five-pointed star floating through
            the Star, pulled by Victoria.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {FLOORS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFloor(f.id)}
              className={cn(
                "min-h-11 shrink-0 rounded-full px-4 text-sm tracking-wide transition-colors duration-150",
                floor === f.id
                  ? "bg-blush text-bg"
                  : "bg-surface text-muted shadow-[var(--shadow-border)] hover:text-fg",
              )}
            >
              {f.name}
            </button>
          ))}
        </div>

        {meta ? (
          <div className="mt-8">
            <h2 className="font-display text-3xl text-blush">{meta.name}</h2>
            <p className="mt-1 text-sm tracking-wide text-teal">{meta.theme}</p>
            <p className="mt-2 max-w-2xl text-muted">{meta.line}</p>
          </div>
        ) : null}

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {rooms.map((room) => (
            <article
              key={room.id}
              className="overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]"
            >
              <img src={room.image} alt="" className="h-52 w-full object-cover sm:h-60" />
              <div className="p-5">
                <h3 className="font-display text-2xl text-fg">{room.name}</h3>
                <p className="mt-2 text-sm text-muted">{room.line}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
