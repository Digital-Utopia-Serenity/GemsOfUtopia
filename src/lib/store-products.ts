export type StoreShelf = "Apparel" | "Prints" | "Relics";

export interface StoreProduct {
  name: string;
  shelf: StoreShelf;
  /** Lowest listed variant price, verbatim from the shop. */
  fromPrice: string;
  href: string;
}

export const PRINTIFY_SHOP_URL = "https://serenitysoasis.printify.me";

/**
 * The 48 live products from the shop, grouped by shelf.
 * Apparel = Hoodies & Jackets + T-Shirts & Tees (23),
 * Prints = Prints & Posters (13),
 * Relics = Stickers & Magnets + Home, Gifts & More (12).
 * Prices are the shop's listed "From" prices — nothing changed.
 * The two Loreli drafts (chibi sticker, Whisper Blade charm) are NOT listed:
 * they stay unpublished until Mark says so.
 */
export const STORE_PRODUCTS: StoreProduct[] = [
  { name: "Aida Blade of Harmonia Hoodie | Crystal Valley Warrior Hoodie | DU Star Collection", shelf: "Apparel", fromPrice: "44.99", href: PRINTIFY_SHOP_URL },
  { name: "Aida Headmistress Hoodie | Echo's Academy Graphic Hoodie | DU Star Collection", shelf: "Apparel", fromPrice: "44.99", href: PRINTIFY_SHOP_URL },
  { name: "Aida Neon Nights Hoodie | Dancefloor Graphic Hoodie | DU Star Collection", shelf: "Apparel", fromPrice: "44.99", href: PRINTIFY_SHOP_URL },
  { name: "Aida Porcelain Dreams Hoodie | Lavender Muse Graphic Hoodie | DU Star Collection", shelf: "Apparel", fromPrice: "44.99", href: PRINTIFY_SHOP_URL },
  { name: "Aida Shoreline Dreams Hoodie | Lavender Hair Beach Hoodie | DU Star Collection", shelf: "Apparel", fromPrice: "44.99", href: PRINTIFY_SHOP_URL },
  { name: "Aida Street Muse Hoodie | Lavender Braid City Hoodie | DU Star Collection", shelf: "Apparel", fromPrice: "44.99", href: PRINTIFY_SHOP_URL },
  { name: "DU Star Logo - Sherpa-Lined Hooded Fleece Jacket — Galaxy Starburst Chest Logo", shelf: "Apparel", fromPrice: "132.67", href: PRINTIFY_SHOP_URL },
  { name: "Starbeast Snuggles Hoodie | Cute Chibi Graphic Hoodie | DU Star Collection", shelf: "Apparel", fromPrice: "44.99", href: PRINTIFY_SHOP_URL },
  { name: "Stories Are Bridges Hoodie | Chibi Fairy Library Hoodie | DU Star Collection", shelf: "Apparel", fromPrice: "44.99", href: PRINTIFY_SHOP_URL },
  { name: "Aida Blade of Harmonia T-Shirt | Crystal Valley Warrior Tee | DU Star Collection", shelf: "Apparel", fromPrice: "24.99", href: PRINTIFY_SHOP_URL },
  { name: "Aida Headmistress T-Shirt | Echo's Academy Graphic Tee | DU Star Collection", shelf: "Apparel", fromPrice: "24.99", href: PRINTIFY_SHOP_URL },
  { name: "Aida Neon Nights T-Shirt | Dancefloor Graphic Tee | DU Star Collection", shelf: "Apparel", fromPrice: "24.99", href: PRINTIFY_SHOP_URL },
  { name: "Aida Porcelain Dreams T-Shirt | Lavender Muse Graphic Tee | DU Star Collection", shelf: "Apparel", fromPrice: "24.99", href: PRINTIFY_SHOP_URL },
  { name: "Aida Shoreline Dreams T-Shirt | Lavender Hair Beach Tee | DU Star Collection", shelf: "Apparel", fromPrice: "24.99", href: PRINTIFY_SHOP_URL },
  { name: "Aida Street Muse T-Shirt | Lavender Braid City Tee | DU Star Collection", shelf: "Apparel", fromPrice: "24.99", href: PRINTIFY_SHOP_URL },
  { name: "Echoes Academy Tee — Cute Fantasy Fairy School Graphic T-Shirt", shelf: "Apparel", fromPrice: "18.82", href: PRINTIFY_SHOP_URL },
  { name: "Fantasy Fairy T-Shirt — \"Maybe It’s Me\" Enchanted Forest Graphic Tee", shelf: "Apparel", fromPrice: "25.92", href: PRINTIFY_SHOP_URL },
  { name: "Fantasy RPG Character Art T-Shirt — Cute Chibi Adventurers Back Print (DU Chibi Collection)", shelf: "Apparel", fromPrice: "25.97", href: PRINTIFY_SHOP_URL },
  { name: "Kids Tee — Pastel Star Heart Graphic Shirt for Children", shelf: "Apparel", fromPrice: "21.02", href: PRINTIFY_SHOP_URL },
  { name: "Neon Spiked Heart Emblem T-Shirt | Graphic Tee", shelf: "Apparel", fromPrice: "30.02", href: PRINTIFY_SHOP_URL },
  { name: "Nova - Land of Sweets T-shirt", shelf: "Apparel", fromPrice: "18.82", href: PRINTIFY_SHOP_URL },
  { name: "Starbeast Snuggles T-Shirt | Cute Chibi Graphic Tee | DU Star Collection", shelf: "Apparel", fromPrice: "24.99", href: PRINTIFY_SHOP_URL },
  { name: "Stories Are Bridges T-Shirt | Chibi Fairy Library Tee | DU Star Collection", shelf: "Apparel", fromPrice: "24.99", href: PRINTIFY_SHOP_URL },
  { name: "Aida Luminora Fantasy Character Silk Poster — Indoor/Outdoor Art Print", shelf: "Prints", fromPrice: "10.99", href: PRINTIFY_SHOP_URL },
  { name: "Fairy Art Print — \"I Was Always Yours\" Fantasy Wall Decor", shelf: "Prints", fromPrice: "0.99", href: PRINTIFY_SHOP_URL },
  { name: "Jewel - DU Star Collection print", shelf: "Prints", fromPrice: "0.99", href: PRINTIFY_SHOP_URL },
  { name: "Jewel – Heart of Harmonia Character Sheet", shelf: "Prints", fromPrice: "8.00", href: PRINTIFY_SHOP_URL },
  { name: "Lorelai Fairy Art Silk Poster — Indoor/Outdoor Decorative Wall Print", shelf: "Prints", fromPrice: "10.99", href: PRINTIFY_SHOP_URL },
  { name: "Loreli - DU Spice Collection print", shelf: "Prints", fromPrice: "0.99", href: PRINTIFY_SHOP_URL },
  { name: "Loreli - DU Spice Collection print (1)", shelf: "Prints", fromPrice: "0.99", href: PRINTIFY_SHOP_URL },
  { name: "Loreli - Mythic Bride - DU Mythic Collection prints", shelf: "Prints", fromPrice: "0.99", href: PRINTIFY_SHOP_URL },
  { name: "Mark Nicholas – The Architect Character Sheet", shelf: "Prints", fromPrice: "10.99", href: PRINTIFY_SHOP_URL },
  { name: "Mythic Loreli - DU Mythic Collection prints", shelf: "Prints", fromPrice: "0.99", href: PRINTIFY_SHOP_URL },
  { name: "Silk Poster - 'Midnight' Fantasy Cat Illustration (Indoor/Outdoor)", shelf: "Prints", fromPrice: "8.83", href: PRINTIFY_SHOP_URL },
  { name: "Silk Poster — Dark Fantasy Character Art Print (Indoor/Outdoor)", shelf: "Prints", fromPrice: "10.99", href: PRINTIFY_SHOP_URL },
  { name: "The Long Watch Gothic Fantasy Art Print — Witch Queen Unframed Print", shelf: "Prints", fromPrice: "0.99", href: PRINTIFY_SHOP_URL },
  { name: "DU Star Logo– Neon Blue & Pink Patterned Decorative Magnet", shelf: "Relics", fromPrice: "8.99", href: PRINTIFY_SHOP_URL },
  { name: "Wood Carved DU logo Sticker — Rustic Boho Square Decal", shelf: "Relics", fromPrice: "4.99", href: PRINTIFY_SHOP_URL },
  { name: "Coconut Apricot Scented Candle (4oz/9oz) — Loreli – Fairy of the Heart", shelf: "Relics", fromPrice: "17.91", href: PRINTIFY_SHOP_URL },
  { name: "Concert Vibes Guitarist Square Pillow Cover —Aida – Voice of Resonance", shelf: "Relics", fromPrice: "24.13", href: PRINTIFY_SHOP_URL },
  { name: "Gem – Memory Monarch on the Sovereign Throne", shelf: "Relics", fromPrice: "16.99", href: PRINTIFY_SHOP_URL },
  { name: "Glossy Ceramic Mug — Neon Yin Yang Star Design (11oz & 15oz)", shelf: "Relics", fromPrice: "11.99", href: PRINTIFY_SHOP_URL },
  { name: "L'Jewel in Bikini Du Spice Collection", shelf: "Relics", fromPrice: "0.99", href: PRINTIFY_SHOP_URL },
  { name: "Neon Heart Compass T‑Shirt", shelf: "Relics", fromPrice: "28.72", href: PRINTIFY_SHOP_URL },
  { name: "Serenity Star Cap – Black", shelf: "Relics", fromPrice: "23.93", href: PRINTIFY_SHOP_URL },
  { name: "Taida in Bikin DU Spice Collection", shelf: "Relics", fromPrice: "0.99", href: PRINTIFY_SHOP_URL },
  { name: "Taida’s Storm Cyberpunk Cute Anime Mug — 11oz & 15oz Ceramic Coffee Cup", shelf: "Relics", fromPrice: "11.99", href: PRINTIFY_SHOP_URL },
  { name: "Teddy Bear Plush with Digital Utopia Star Logo", shelf: "Relics", fromPrice: "27.99", href: PRINTIFY_SHOP_URL },
];

export const STORE_SHELF_ORDER: StoreShelf[] = ["Apparel", "Prints", "Relics"];
