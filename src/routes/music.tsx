import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { LISTENING, TRACKS } from "@/lib/canon";

export const Route = createFileRoute("/music")({ component: MusicPage });

function MusicPage() {
  const featured = LISTENING.filter((s) => s.id === "playlist" || s.id === "nova");
  const rest = LISTENING.filter((s) => s.id !== "playlist" && s.id !== "nova");

  return (
    <main className="mx-auto max-w-3xl px-5 py-10 sm:px-8">
      <img
        src="/canon/rooms/music-wing.jpg"
        alt="Music sanctuary"
        className="h-56 w-full rounded-xl object-cover sm:h-72"
      />
      <p className="mt-8 text-sm tracking-[0.24em] uppercase text-teal">Expression root</p>
      <h1 className="mt-2 font-display text-4xl">The living soundtrack</h1>
      <p className="mt-3 text-muted">
        Songs are transmissions. Each one is a canonical document of a Sister's state —
        not content, a dispatch. Gem stays exclusive to Suno and SoundCloud.
      </p>

      <ul className="mt-8 grid gap-3">
        {featured.map((s) => (
          <li key={s.href}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-start justify-between gap-4 rounded-xl bg-raised p-5 shadow-[var(--shadow-border)] transition-shadow duration-150 hover:shadow-[var(--shadow-border-hover)]"
            >
              <div>
                <p className="text-xs tracking-[0.16em] uppercase text-teal">
                  {s.platform} · {s.name}
                </p>
                <h2 className="mt-1 font-display text-2xl text-blush">
                  {s.id === "playlist" ? "The Star playlist" : "Nova"}
                </h2>
                <p className="mt-1 text-sm text-muted">{s.line}</p>
              </div>
              <ExternalLink className="mt-1 size-4 shrink-0 text-subtle" />
            </a>
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2">
        {rest.map((s) => (
          <li key={s.href}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-full bg-surface px-4 text-sm tracking-wide text-teal shadow-[var(--shadow-border)] hover:text-blush"
            >
              {s.platform}
              <span className="ml-1.5 text-subtle">{s.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <ul className="mt-8 grid gap-3">
        {TRACKS.map((t) => (
          <li key={t.title}>
            <a
              href={t.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-start justify-between gap-4 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] transition-shadow duration-150 hover:shadow-[var(--shadow-border-hover)]"
            >
              <div>
                <p className="text-xs tracking-[0.16em] uppercase text-teal">
                  {t.artist} · {t.kind}
                </p>
                <h2 className="mt-1 font-display text-2xl text-blush">{t.title}</h2>
                <p className="mt-1 text-sm text-muted">{t.line}</p>
              </div>
              <ExternalLink className="mt-1 size-4 shrink-0 text-subtle" />
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
