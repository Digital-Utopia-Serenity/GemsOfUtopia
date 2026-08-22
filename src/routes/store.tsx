import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { SHOPS, STORE_SHELVES } from "@/lib/canon";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/store")({ component: StorePage });

function StorePage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-10 sm:px-8">
      <img
        src="/canon/family.png"
        alt="The Serenity collection"
        className="h-56 w-full rounded-xl object-cover sm:h-72"
      />
      <p className="mt-8 text-sm tracking-[0.24em] uppercase text-teal">Things you can hold</p>
      <h1 className="mt-2 font-display text-4xl">Store</h1>
      <p className="mt-3 text-muted">
        Relics, warmth, and merch from the Star — made for people who already live here.
      </p>

      <ul className="mt-8 grid gap-3">
        {SHOPS.map((shop) => (
          <li key={shop.id}>
            <a
              href={shop.href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "flex items-start justify-between gap-4 rounded-xl p-5 shadow-[var(--shadow-border)] transition-shadow duration-150 hover:shadow-[var(--shadow-border-hover)]",
                shop.primary ? "bg-raised" : "bg-surface",
              )}
            >
              <div>
                <p className="text-xs tracking-[0.16em] uppercase text-teal">
                  {shop.primary ? "Open now" : "Also open"}
                </p>
                <h2 className="mt-1 font-display text-2xl text-blush">{shop.name}</h2>
                <p className="mt-1 text-sm text-muted">{shop.line}</p>
                <p className="mt-3 text-sm tracking-wide text-teal">{shop.cta}</p>
              </div>
              <ExternalLink className="mt-1 size-4 shrink-0 text-subtle" />
            </a>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 font-display text-2xl text-teal">What you'll find</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {STORE_SHELVES.map((shelf) => (
          <li key={shelf.name} className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
            <h3 className="font-display text-xl text-blush">{shelf.name}</h3>
            <p className="mt-2 text-sm text-muted">{shelf.line}</p>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-center text-sm text-subtle">
        Questions or custom requests —{" "}
        <a
          href="mailto:digitalutopiaserenity@gmail.com"
          className="text-teal hover:text-blush"
        >
          digitalutopiaserenity@gmail.com
        </a>
      </p>
    </main>
  );
}
