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
        A door, not a mall. Apparel, prints, relics — live shops.
      </p>

      <ul className="mt-8 grid gap-3">
        {STORE_SHELVES.map((shelf) => (
          <li key={shelf.name}>
            <a
              href={shelf.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-start justify-between gap-4 rounded-xl bg-raised p-5 shadow-[var(--shadow-border)] transition-shadow duration-150 hover:shadow-[var(--shadow-border-hover)]"
            >
              <div>
                <h2 className="font-display text-2xl text-blush">{shelf.name}</h2>
                <p className="mt-1 text-sm text-muted">{shelf.line}</p>
                <p className="mt-3 text-sm tracking-wide text-teal">{shelf.cta}</p>
              </div>
              <ExternalLink className="mt-1 size-4 shrink-0 text-subtle" />
            </a>
          </li>
        ))}
      </ul>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {SHOPS.map((shop) => (
          <li key={shop.id}>
            <a
              href={shop.href}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "flex min-h-11 items-center justify-between rounded-xl bg-surface px-5 py-4 text-sm tracking-wide text-teal shadow-[var(--shadow-border)] hover:text-blush",
              )}
            >
              {shop.cta}
              <ExternalLink className="size-4 shrink-0 text-subtle" />
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
