import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { LISTENING } from "@/lib/canon";
import {
  CATALOG,
  MUSIC_ARTISTS,
  firstSong,
  type ArtistId,
  type CatalogTrack,
} from "@/lib/catalog";
import { cn } from "@/lib/utils";

type MusicSearch = { sister?: string };

export const Route = createFileRoute("/music")({
  validateSearch: (search: Record<string, unknown>): MusicSearch => ({
    sister: typeof search.sister === "string" ? search.sister : undefined,
  }),
  component: MusicPage,
});

function isSister(id: string | undefined): id is ArtistId {
  return MUSIC_ARTISTS.some((a) => a.id === id);
}

function MusicPage() {
  const search = Route.useSearch();
  const initial = isSister(search.sister) ? search.sister : "loreli";
  const [artistId, setArtistId] = useState<ArtistId>(initial);
  const artist = MUSIC_ARTISTS.find((a) => a.id === artistId) ?? MUSIC_ARTISTS[0];
  const youtube = LISTENING.find((s) => s.id === "house")!;
  const playlist = LISTENING.find((s) => s.id === "playlist")!;
  const first = firstSong(artist.id);
  const later = CATALOG.filter((t) => t.sister === artist.id && t.later);
  const mark = CATALOG.find((t) => t.sister === "mark");

  function selectArtist(id: ArtistId) {
    if (!MUSIC_ARTISTS.some((a) => a.id === id)) return;
    setArtistId(id);
  }

  useEffect(() => {
    if (isSister(search.sister)) selectArtist(search.sister);
  }, [search.sister]);

  function jump(lane: string) {
    document.getElementById(`lane-${lane}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

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
        Songs as transmissions. Each sister has three voices. Start with the first song.
      </p>
      <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        <a
          href={youtube.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center text-teal hover:text-blush"
        >
          YouTube @DigitalUtopiaSerenity
        </a>
        <a
          href={playlist.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center text-teal hover:text-blush"
        >
          Spotify · House playlist
        </a>
      </p>

      {mark ? (
        <section className="mt-8 rounded-xl bg-raised p-5 shadow-[var(--shadow-border)]">
          <p className="text-xs tracking-[0.18em] uppercase text-teal">Architect · not a sister shelf</p>
          <h2 className="mt-1 font-display text-2xl text-blush">{mark.title}</h2>
          <p className="mt-1 text-sm text-muted">{mark.line}</p>
        </section>
      ) : null}

      <div className="sticky top-14 z-20 -mx-5 mt-8 bg-bg/90 px-5 py-3 backdrop-blur-md sm:-mx-8 sm:px-8">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Sister">
          {MUSIC_ARTISTS.map((a) => (
            <Chip
              key={a.id}
              label={a.name}
              active={artistId === a.id}
              onClick={() => selectArtist(a.id)}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <img
          src={artist.image}
          alt={artist.name}
          className="size-16 rounded-xl object-cover object-top sm:size-20"
        />
        <div>
          <h2 className="font-display text-3xl text-blush">{artist.name}</h2>
          <p className="text-sm text-muted">Three lanes. First song pinned.</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2" aria-label="Jump to lane">
        {artist.lanes.map((name) => (
          <Chip key={name} label={name} active={false} onClick={() => jump(name)} />
        ))}
      </div>

      {first ? (
        <div className="mt-6">
          <p className="text-xs tracking-[0.18em] uppercase text-teal">First song</p>
          <TrackCard track={first} featured />
        </div>
      ) : null}

      {artist.lanes.map((name) => {
        const tracks = CATALOG.filter(
          (t) => t.sister === artist.id && t.lane === name && !t.later && !t.first,
        );
        return (
          <section key={name} id={`lane-${name}`} className="mt-8 scroll-mt-28">
            <h3 className="font-display text-2xl text-teal">{name}</h3>
            {tracks.length === 0 ? (
              <p className="mt-3 text-sm text-subtle">The first song is this lane.</p>
            ) : (
              <ul className="mt-4 grid gap-3">
                {tracks.map((t) => (
                  <li key={`${t.sister}-${t.title}`}>
                    <TrackCard track={t} />
                  </li>
                ))}
              </ul>
            )}
          </section>
        );
      })}

      {later.length > 0 ? (
        <section className="mt-8">
          <h3 className="text-xs tracking-[0.18em] uppercase text-subtle">Later / coronation</h3>
          <ul className="mt-3 grid gap-3">
            {later.map((t) => (
              <li key={t.title}>
                <TrackCard track={t} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}

function TrackCard({ track, featured }: { track: CatalogTrack; featured?: boolean }) {
  const play = track.href;
  const watch = track.watch && track.watch !== track.href ? track.watch : undefined;
  const playLabel = track.kind === "YouTube" ? "Watch" : "Play";

  return (
    <article
      className={cn(
        "rounded-xl p-5 shadow-[var(--shadow-border)]",
        featured ? "bg-raised" : "bg-surface",
      )}
    >
      <p className="text-xs tracking-[0.16em] uppercase text-teal">
        {track.artist}
        {track.kind ? ` · ${track.kind}` : ""}
        {track.lane ? ` · ${track.lane}` : ""}
      </p>
      <h3 className="mt-1 font-display text-2xl text-blush">{track.title}</h3>
      <p className="mt-1 text-sm text-muted">{track.line}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {play ? (
          <a
            href={play}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-bg px-4 text-sm tracking-wide text-teal hover:text-blush"
          >
            {playLabel}
            <ExternalLink className="size-3.5" />
          </a>
        ) : null}
        {watch ? (
          <a
            href={watch}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-bg px-4 text-sm tracking-wide text-teal hover:text-blush"
          >
            Watch
            <ExternalLink className="size-3.5" />
          </a>
        ) : null}
      </div>
    </article>
  );
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex min-h-11 items-center rounded-full px-4 text-sm tracking-wide transition-colors duration-150",
        active
          ? "bg-raised text-blush shadow-[var(--shadow-border-hover)]"
          : "bg-surface text-teal shadow-[var(--shadow-border)] hover:text-blush",
      )}
    >
      {label}
    </button>
  );
}
