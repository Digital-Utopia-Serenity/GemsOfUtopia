import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Gem, Image as ImageIcon, Shirt, Sparkles } from "lucide-react";
import { SHOPS, STORE_SHELVES } from "@/lib/canon";
import { STORE_PRODUCTS, type StoreShelf } from "@/lib/store-products";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/store")({ component: StorePage });

const SHELF_ICONS: Record<StoreShelf, typeof Shirt> = {
  Apparel: Shirt,
  Prints: ImageIcon,
  Relics: Gem,
};

function StorePage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
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

      <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs tracking-[0.18em] uppercase text-blush">
        <Sparkles className="size-3.5" />
        Open now · 48 live products
      </p>
      <p className="mt-4 max-w-2xl text-sm text-muted">
        Everything below is live in the shop right now. Prices are the shop&rsquo;s
        listed prices — nothing changed. The two Loreli drafts (chibi sticker &amp;
        Whisper Blade charm) stay unpublished until Mark says so.
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

      {STORE_SHELVES.map((shelf) => {
        const Icon = SHELF_ICONS[shelf.name];
        const products = STORE_PRODUCTS.filter((product) => product.shelf === shelf.name);
        return (
          <section key={shelf.name} className="mt-14">
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-raised text-blush shadow-[var(--shadow-border)]">
                <Icon className="size-5" />
              </span>
              <div>
                <h2 className="font-display text-3xl text-blush">{shelf.name}</h2>
                <p className="text-sm text-muted">{shelf.line}</p>
              </div>
              <span className="ml-auto shrink-0 text-xs tracking-[0.18em] uppercase text-subtle">
                {products.length} pieces
              </span>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <li key={product.name}>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full flex-col justify-between gap-4 rounded-xl border border-border/60 bg-raised/70 p-5 shadow-[var(--shadow-border)] backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-blush/40 hover:shadow-[0_0_28px_rgb(230_138_184/0.22)]"
                  >
                    <h3 className="font-display text-xl leading-snug text-fg group-hover:text-blush">
                      {product.name}
                    </h3>
                    <p className="flex items-center justify-between gap-2 text-sm">
                      <span className="tracking-wide text-teal">
                        From ${product.fromPrice}
                      </span>
                      <span className="inline-flex shrink-0 items-center gap-1 tracking-wide text-blush">
                        Shop
                        <ExternalLink className="size-3.5 text-subtle" />
                      </span>
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </main>
  );
}
