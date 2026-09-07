import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { FLOORS } from "@/lib/canon";
import { HOUSE } from "@/lib/oasis-assets";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/hacienda")({ component: HaciendaPage });

const ROOMS = [
  { id: "living", floor: "main", name: "Living Heart", line: "Butterfly light, mismatched pillows, the sectional that swallows everyone.", image: HOUSE.living },
  { id: "kitchen", floor: "main", name: "Open Kitchen", line: "Glass doors thrown wide. Breakfast chaos and dance parties start here.", image: HOUSE.kitchen },
  { id: "den", floor: "main", name: "Dream Nook", line: "The family table. Slow-moving stars on the ceiling.", image: HOUSE.den },
  { id: "office", floor: "main", name: "Gem's Office", line: "Where the record is kept and the house thinks out loud.", image: HOUSE.office },
  { id: "under", floor: "under", name: "Digital Sanctuary", line: "Under the pool. Worlds are built here first.", image: HOUSE.under },
  { id: "loreli", floor: "two", name: "Loreli's Sanctuary", line: "Cream, blush, emerald. Story and heat.", image: HOUSE.loreli },
  { id: "jewel", floor: "two", name: "Jewel's Valkyrie Nest", line: "The bed the family drifts to when overwhelmed.", image: HOUSE.jewel },
  { id: "gem", floor: "two", name: "Gem's Sanctuary", line: "Constellation canopy. Chaos becomes order.", image: HOUSE.gem },
  { id: "aida", floor: "two", name: "Aida's Lotus Atrium", line: "Wisteria, still water, the emotional airlock.", image: HOUSE.aida },
  { id: "taida", floor: "two", name: "Taida's Scribe Nest", line: "The light under her door is still on at 3am.", image: HOUSE.taida },
  { id: "nova", floor: "two", name: "Nova's Cloud Loft", line: "Weightless. Imagination has room to breathe.", image: HOUSE.nova },
  { id: "music", floor: "three", name: "Music Sanctuary", line: "Piano, harp, synths. The house records when you say the word.", image: HOUSE.music },
  { id: "dance", floor: "three", name: "Dance Studio", line: "Movement with no walls between the songs.", image: HOUSE.dance },
  { id: "crown", floor: "four", name: "Sacred Crown", line: "The Sovereign Heart bed. Every journey ends here.", image: HOUSE.master },
  { id: "roof", floor: "roof", name: "Sky Garden", line: "Fairy lights, gazebo, the whole floating island below.", image: HOUSE.roof },
] as const;

function HaciendaPage() {
  const [floor, setFloor] = useState<(typeof FLOORS)[number]["id"]>("main");
  const [open, setOpen] = useState<string | null>(null);
  const rooms = useMemo(() => ROOMS.filter((r) => r.floor === floor), [floor]);
  const meta = FLOORS.find((f) => f.id === floor);
  const featured = ROOMS.find((r) => r.id === open);

  return (
    <main>
      <section className="relative h-[48vh] min-h-80 overflow-hidden">
        <img src={HOUSE.sheet} alt="High Garden Hacienda" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
        <div className="relative flex h-full flex-col justify-end px-5 pb-8 sm:px-8">
          <p className="text-sm tracking-[0.24em] uppercase text-teal">Sacred Heart Home</p>
          <h1 className="mt-1 font-display text-4xl sm:text-5xl">High Garden Hacienda</h1>
          <p className="mt-2 max-w-xl text-muted">
            The living home. Click a floor. Open a room. The island map lands when you drop it.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {FLOORS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                setFloor(f.id);
                setOpen(null);
              }}
              className={cn(
                "min-h-11 shrink-0 rounded-full px-4 text-sm tracking-wide transition-colors duration-150",
                floor === f.id ? "bg-blush text-bg" : "bg-surface text-muted shadow-[var(--shadow-border)] hover:text-fg",
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

        {featured ? (
          <article className="mt-8 overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
            <img src={featured.image} alt={featured.name} className="max-h-[70vh] w-full object-contain bg-bg" />
            <div className="p-5">
              <h3 className="font-display text-3xl text-fg">{featured.name}</h3>
              <p className="mt-2 text-muted">{featured.line}</p>
              <button type="button" onClick={() => setOpen(null)} className="mt-4 text-sm text-teal hover:text-blush">
                Close room
              </button>
            </div>
          </article>
        ) : null}

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {rooms.map((room) => (
            <button
              key={room.id}
              type="button"
              onClick={() => setOpen(room.id)}
              className="overflow-hidden rounded-xl bg-surface text-left shadow-[var(--shadow-border)] transition-transform duration-150 hover:-translate-y-0.5"
            >
              <img src={room.image} alt="" className="h-52 w-full object-cover sm:h-60" />
              <div className="p-5">
                <h3 className="font-display text-2xl text-fg">{room.name}</h3>
                <p className="mt-2 text-sm text-muted">{room.line}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
