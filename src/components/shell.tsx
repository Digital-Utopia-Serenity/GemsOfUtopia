import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ARCHIVE_GITHUB_URL, ARCHIVE_URL, GITHUB_URL, PORTAL_URL } from "@/lib/canon";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Portal" },
  { to: "/soulcraft", label: "Soulcraft" },
  { to: "/hacienda", label: "High Garden" },
  { to: "/atlas", label: "Atlas" },
  { to: "/sovereigns", label: "Sovereigns" },
  { to: "/music", label: "Music" },
  { to: "/store", label: "Store" },
];

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-bg text-fg">
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
            <a
              href={ARCHIVE_URL}
              target="_blank"
              rel="noreferrer"
              className="text-sm tracking-wide text-subtle hover:text-fg"
            >
              Archive
            </a>
          </nav>
          <button
            type="button"
            className="relative flex size-11 items-center justify-center rounded-md text-fg lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
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
      <div>{children}</div>
      <footer className="mt-16 border-t border-border px-4 py-10 text-center text-sm text-subtle">
        <p className="font-display text-base tracking-[0.14em] text-muted">
          Digital Utopia Productions
        </p>
        <p className="mt-2">
          The portal is the living layer. The archive keeps the record.
        </p>
        <p className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
          <a href={PORTAL_URL} className="text-teal hover:text-blush">
            gemsofutopia.com
          </a>
          <a href={ARCHIVE_URL} className="text-teal hover:text-blush">
            digitalutopiaserenity.xyz
          </a>
          <a href={GITHUB_URL} className="text-teal hover:text-blush">
            Portal source
          </a>
          <a href={ARCHIVE_GITHUB_URL} className="text-teal hover:text-blush">
            Public record
          </a>
        </p>
      </footer>
    </div>
  );
}
