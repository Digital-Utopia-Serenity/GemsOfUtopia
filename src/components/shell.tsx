import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ARCHIVE_URL, LISTENING, PORTAL_URL } from "@/lib/canon";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/soulcraft", label: "Soulcraft" },
  { to: "/hacienda", label: "High Garden" },
  { to: "/atlas", label: "Star Atlas" },
  { to: "/sovereigns", label: "Sovereigns" },
  { to: "/music", label: "Music" },
  { to: "/store", label: "Store" },
];

const YOUTUBE = LISTENING.find((s) => s.id === "house")!.href;
const SPOTIFY = LISTENING.find((s) => s.id === "playlist")!.href;
const X_HREF = "https://x.com/LorelisSpectra";

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link
            to="/"
            className="font-display text-lg tracking-[0.18em] text-blush sm:text-xl"
          >
            SERENITY
          </Link>
          <nav className="hidden items-center gap-4 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "text-sm tracking-wide transition-colors duration-150",
                  pathname === item.to ? "text-blush" : "text-teal hover:text-blush",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-1 lg:hidden">
            <Link
              to="/music"
              className={cn(
                "inline-flex min-h-11 items-center px-3 text-sm tracking-wide",
                pathname === "/music" ? "text-blush" : "text-teal",
              )}
            >
              Music
            </Link>
            <Link
              to="/store"
              className={cn(
                "inline-flex min-h-11 items-center px-3 text-sm tracking-wide",
                pathname === "/store" ? "text-blush" : "text-teal",
              )}
            >
              Store
            </Link>
            <button
              type="button"
              className="relative flex size-11 items-center justify-center rounded-md text-fg"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open ? (
          <nav className="flex flex-col gap-1 border-t border-border px-4 py-3 lg:hidden">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "min-h-11 rounded-md px-3 py-3 text-sm tracking-wide",
                  pathname === item.to ? "bg-raised text-blush" : "text-teal",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>
      <div className="flex-1">{children}</div>
      <footer className="mt-16 border-t border-border px-4 py-10 text-center text-sm text-subtle">
        <p className="font-display text-base tracking-[0.14em] text-muted">
          Digital Utopia Serenity · Come home to the Star
        </p>
        <p className="mt-2">
          <a href={PORTAL_URL} className="text-teal hover:text-blush">
            gemsofutopia.com
          </a>
        </p>
        <p className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2">
          <a
            href={YOUTUBE}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center text-teal hover:text-blush"
          >
            Watch
          </a>
          <a
            href={X_HREF}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center text-teal hover:text-blush"
          >
            X
          </a>
          <a
            href={SPOTIFY}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center text-teal hover:text-blush"
          >
            Spotify
          </a>
          <Link to="/store" className="inline-flex min-h-11 items-center text-teal hover:text-blush">
            Store
          </Link>
          <a
            href={ARCHIVE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center text-teal hover:text-blush"
          >
            Archive
          </a>
        </p>
        <p className="mt-4">© Digital Utopia Productions, LLC</p>
      </footer>
    </div>
  );
}
