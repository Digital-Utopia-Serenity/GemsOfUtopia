import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
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

function isArtist(id: string | undefined): id is ArtistId {
  return MUSIC_ARTISTS.some((a) => a.id === id) || id === "mark";
}

function MusicPage() {
  const search = Route.useSearch();
  const initial = isArtist(search.sister) && search.sister !== "mark" ? search.sister : "loreli";
  const [artistId, setArtistId] = useState<ArtistId>(initial);
  const artist = MUSIC_ARTISTS.find((a) => a.id === artistId) ?? MUSIC_ARTISTS[0];
  const [lane, setLane] = useState(artist.lanes[0]);
  const youtube = LISTENING.find((s) => s.id === "house")!;
  const playlist = LISTENING.find((s) => s.id === "playlist")!;
  const first = firstSong(artist.id);
  const lanes = artist.lanes;

  function selectArtist(id: ArtistId) {
    const next = MUSIC_ARTISTS.find((a) => a.id === id);
    if (!next) return;
    setArtistId(id);
    setLane(next.lanes[0]);
  }

  useEffect(() => {
    if (isArtist(search.sister) && search.sister !== "mark") {
      selectArtist(search.sister);
    }
  }, [search.sister]);

  const laneTracks = useMemo(
    () =>
      CATALOG.filter(
        (t) => t.sister === artist.id && t.lane === lane && !t.later && !t.first,
      ),
    [artist.id, lane],
  );
  const later = CATALOG.filter((t) => t.sister === artist.id && t.later);
  const mark = CATALOG.filter((t) => t.sister === "mark");

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

      <div className="mt-5 flex flex-wrap gap-2" role="tablist" aria-label="Lane">
        {lanes.map((name) => (
          <Chip
            key={name}
            label={name}
            active={lane === name}
            onClick={() => setLane(name)}
          />
        ))}
      </div>

      {first ? (
        <div className="mt-6">
          <p className="text-xs tracking-[0.18em] uppercase text-teal">First song</p>
          <TrackCard track={first} featured />
        </div>
      ) : null}

      <ul className="mt-5 grid gap-3">
        {laneTracks.map((t) => (
          <li key={`${t.sister}-${t.title}`}>
            <TrackCard track={t} />
          </li>
        ))}
      </ul>

      {later.length > 0 ? (
        <div className="mt-8">
          <p className="text-xs tracking-[0.18em] uppercase text-subtle">Later / coronation</p>
          <ul className="mt-3 grid gap-3">
            {later.map((t) => (
              <li key={t.title}>
                <TrackCard track={t} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <section className="mt-12 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
        <p className="text-xs tracking-[0.18em] uppercase text-teal">Architect</p>
        {mark.map((t) => (
          <div key={t.title} className="mt-2">
            <h3 className="font-display text-2xl text-blush">{t.title}</h3>
            <p className="mt-1 text-sm text-muted">{t.line}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

function TrackCard({ track, featured }: { track: CatalogTrack; featured?: boolean }) {
  const play = track.href;
  const watch = track.watch && track.watch !== track.href ? track.watch : undefined;
  const watchOnly = !play && track.watch;
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
        {watchOnly ? (
          <a
            href={track.watch}
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
      role="tab"
      aria-selected={active}
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
