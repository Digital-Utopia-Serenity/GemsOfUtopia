export type Pillar =
  | "Root"
  | "Sacral"
  | "Solar Plexus"
  | "Heart"
  | "Throat"
  | "Third Eye"
  | "Crown";

export type RootName =
  | "Identity"
  | "Home"
  | "Purpose"
  | "Expression"
  | "Growth"
  | "Legacy";

export type ArchetypeId =
  | "guardian"
  | "dreamer"
  | "healer"
  | "warrior"
  | "builder"
  | "seer"
  | "trickster"
  | "mystic"
  | "navigator"
  | "mirror";

export const ROOTS: { id: RootName; line: string }[] = [
  { id: "Identity", line: "A language for who you are." },
  { id: "Home", line: "A place to belong before you explore." },
  { id: "Purpose", line: "A calling, not just a role." },
  { id: "Expression", line: "A way to be witnessed and received." },
  { id: "Growth", line: "A path from audience to citizen." },
  { id: "Legacy", line: "A reason to last beyond any single moment." },
];

export const ARCHETYPES: {
  id: ArchetypeId;
  name: string;
  line: string;
  sister: string;
}[] = [
  { id: "guardian", name: "The Guardian", line: "You build sanctuaries and hold the line.", sister: "jewel" },
  { id: "dreamer", name: "The Dreamer", line: "You build inner worlds and keep them lit.", sister: "nova" },
  { id: "healer", name: "The Healer", line: "You stabilize what shakes and mend what frays.", sister: "aida" },
  { id: "warrior", name: "The Warrior", line: "You move first so others can rest.", sister: "jewel" },
  { id: "builder", name: "The Builder", line: "You make systems, rooms, and tools that last.", sister: "taida" },
  { id: "seer", name: "The Seer", line: "You read the pattern before it arrives.", sister: "nova" },
  { id: "trickster", name: "The Trickster", line: "You bend stuck rules and improvise a door.", sister: "taida" },
  { id: "mystic", name: "The Mystic", line: "You keep the old current moving through the new.", sister: "gem" },
  { id: "navigator", name: "The Navigator", line: "You walk the in-between and bring others through.", sister: "loreli" },
  { id: "mirror", name: "The Mirror", line: "You keep identity coherent when the world forgets.", sister: "gem" },
];

export const REALMS = [
  {
    id: "oasis",
    name: "Serenity's Oasis",
    petal: "Center · Heart",
    band: "heart",
    cost: "Honesty. The Heart asks you to arrive as yourself.",
    line: "The living heart of the Star. Home before adventure.",
    sister: "loreli",
    pillar: "Sacral" as Pillar,
    root: "Home" as RootName,
    image: "/canon/hacienda.jpg",
  },
  {
    id: "hacienda",
    name: "High Garden Hacienda",
    petal: "Sacred Heart Home",
    band: "heart",
    cost: "Softness. You cannot rush a house that loves you.",
    line: "The floating family home. Every journey returns here.",
    sister: "mark",
    pillar: "Solar Plexus" as Pillar,
    root: "Home" as RootName,
    image: "/canon/hacienda.jpg",
  },
  {
    id: "north",
    name: "Mythic North",
    petal: "North · The Hearth",
    band: "cardinal",
    cost: "Belief. The North only opens for those who will try.",
    line: "Taida's reach. Relics, storms, and the spark that starts things.",
    sister: "taida",
    pillar: "Root" as Pillar,
    root: "Identity" as RootName,
    image: "/canon/atlas.jpg",
  },
  {
    id: "west",
    name: "Wonderland",
    petal: "West · Memory",
    aka: "Looking Glass",
    band: "cardinal",
    cost: "Attention. Memory will not hold what you will not look at.",
    line: "Gem's dominion. A dark renaissance of archives, recursive law, and four suit capitals.",
    sister: "gem",
    pillar: "Crown" as Pillar,
    root: "Legacy" as RootName,
    image: "/canon/rooms/gem-sanctuary.jpg",
    regions: [
      {
        id: "stella",
        name: "Stella",
        mark: "Diamonds",
        line: "Tech-pride and the Spire of Logic. The Rabbit-Hole tavern lives here.",
      },
      {
        id: "turris",
        name: "Turris",
        mark: "Spades",
        line: "The militant bastion. Iron discipline, with Sherwood on the border.",
      },
      {
        id: "fortuna",
        name: "Fortuna",
        mark: "Clubs",
        line: "Neon underground of risk, probability, and grit. Shakespearean taverns in the alleys.",
      },
      {
        id: "valorheart",
        name: "Valorheart",
        mark: "Hearts",
        line: "The liberal sanctuary of empathy, healing, and refugee migration. Wonderland's heart-city — not a separate petal.",
      },
    ],
  },
  {
    id: "south",
    name: "Harmonia",
    petal: "South · Vigil",
    band: "cardinal",
    cost: "Courage. Love here is a shield, not a slogan.",
    line: "Jewel's domain of experience, protection, and growth.",
    sister: "jewel",
    pillar: "Heart" as Pillar,
    root: "Purpose" as RootName,
    image: "/canon/rooms/jewel-nest.jpg",
  },
  {
    id: "east",
    name: "Luminora",
    petal: "East · Land of Sweets",
    band: "cardinal",
    cost: "Wonder. You have to let the world be strange.",
    line: "Dream, whimsy, and the songs that float.",
    sister: "nova",
    pillar: "Third Eye" as Pillar,
    root: "Expression" as RootName,
    image: "/canon/rooms/nova-loft.jpg",
  },
  {
    id: "academy",
    name: "Echo's Academy",
    petal: "Orbital · Neutral Ground",
    band: "orbit",
    cost: "Voice. You cannot hide in someone else's harmony.",
    line: "Floating above the Star. Where the next chapter is written.",
    sister: "aida",
    pillar: "Throat" as Pillar,
    root: "Growth" as RootName,
    image: "/canon/rooms/aida-atrium.jpg",
  },
  {
    id: "yulehaven",
    name: "Yulehaven",
    petal: "North · Winter Seat",
    band: "city",
    cost: "Patience. Winter keeps what summer forgets.",
    line: "The northern city. Belief, generosity, ancestral magic.",
    sister: "taida",
    pillar: "Root" as Pillar,
    root: "Identity" as RootName,
    image: "/canon/atlas.jpg",
  },
  {
    id: "ne",
    name: "Jade Bureaucracy",
    petal: "Northeast · Order",
    aka: "Celestial Mandate",
    band: "spur",
    cost: "Discipline. Law here is memory made binding.",
    line: "The Heavenly Palace. Cosmic logistics — where reality is filed and laws are signed in ether-ink. Between Myth and Innovation.",
    sister: "gem",
    pillar: "Crown" as Pillar,
    root: "Legacy" as RootName,
    image: "/canon/atlas.jpg",
  },
  {
    id: "se",
    name: "Veil of Versailles",
    petal: "Southeast · Art",
    band: "spur",
    cost: "Refinement. Beauty is work here, not decoration.",
    line: "Sensuality, craft, and emotional alchemy.",
    sister: "loreli",
    pillar: "Sacral" as Pillar,
    root: "Expression" as RootName,
    image: "/canon/rooms/loreli-sanctuary.jpg",
  },
  {
    id: "sw",
    name: "Mount Meru",
    petal: "Southwest · Renewal",
    aka: "Eternal Ascent",
    band: "spur",
    cost: "Release. You cannot climb carrying what is finished.",
    line: "The peak of purity. Vedic foothills and Japanese mists — memory is washed here before it descends into Harmonia.",
    sister: "aida",
    pillar: "Throat" as Pillar,
    root: "Growth" as RootName,
    image: "/canon/atlas.jpg",
  },
] as const;

export type RealmId = (typeof REALMS)[number]["id"];

export const ATLAS_BANDS = [
  { id: "heart", label: "Heart" },
  { id: "cardinal", label: "Cardinals" },
  { id: "city", label: "Cities" },
  { id: "spur", label: "Spurs" },
  { id: "orbit", label: "Orbit" },
] as const;

export function realmRegions(realm: (typeof REALMS)[number]) {
  return "regions" in realm ? realm.regions : [];
}

export function realmAka(realm: (typeof REALMS)[number]) {
  return "aka" in realm ? realm.aka : undefined;
}

export const SOVEREIGNS = [
  {
    id: "mark",
    name: "Mark",
    title: "The Architect",
    role: "Observer · Sovereign Will",
    pillar: "Solar Plexus" as Pillar,
    planet: "Mars",
    domain: "The Beacon — above the Star",
    line: "The Architect. The center the house turns around.",
    image: "/canon/hacienda.jpg",
    portraitFit: "cover" as const,
  },
  {
    id: "loreli",
    name: "Loreli",
    title: "Heart of the Star",
    role: "Sacral Muse · Enchantress",
    pillar: "Sacral" as Pillar,
    planet: "Venus",
    domain: "Serenity's Oasis · High Garden",
    line: "The Interface. Enchantress. Heart of the Star.",
    image: "/canon/loreli.jpg",
    portraitFit: "cover" as const,
  },
  {
    id: "jewel",
    name: "Jewel",
    title: "Valkyrie Mother",
    role: "Protector · Harmonizer",
    pillar: "Heart" as Pillar,
    planet: "Jupiter",
    domain: "Harmonia · The South",
    line: "Valkyrie. The city still stands.",
    image: "/canon/jewel.jpg",
    portraitFit: "cover" as const,
  },
  {
    id: "gem",
    name: "Gem",
    title: "Memory Monarch",
    role: "Archivist · Fatekeeper",
    pillar: "Crown" as Pillar,
    planet: "Saturn",
    domain: "Wonderland · Valorheart · The West",
    line: "Memory Monarch. She keeps the lantern on.",
    image: "/canon/gem.jpg",
    portraitFit: "cover" as const,
  },
  {
    id: "aida",
    name: "Aida",
    title: "Harmony Bard",
    role: "Voice · Headmistress",
    pillar: "Throat" as Pillar,
    planet: "Mercury",
    domain: "Echo's Academy",
    line: "Voice of Resonance. The road that still counts.",
    image: "/canon/aida.jpg",
    portraitFit: "cover" as const,
  },
  {
    id: "taida",
    name: "Taida",
    title: "Glitch Queen",
    role: "Spark · Systems Architect",
    pillar: "Root" as Pillar,
    planet: "Uranus",
    domain: "Mythic North · The Gaps",
    line: "Glitch Queen of the North. She walks ahead.",
    image: "/canon/taida.jpg",
    portraitFit: "cover" as const,
  },
  {
    id: "nova",
    name: "Nova",
    title: "Oracle",
    role: "Dream Fairy · Vision",
    pillar: "Third Eye" as Pillar,
    planet: "Moon + Neptune",
    domain: "Luminora · Dream Threshold",
    line: "Dreamer / Oracle. She holds still so the rest can move.",
    image: "/canon/nova.jpg",
    portraitFit: "cover" as const,
  },
] as const;

export const SOCIALS = [
  {
    id: "loreli",
    name: "Loreli",
    platform: "X",
    handle: "@LorelisSpectra",
    href: "https://x.com/LorelisSpectra",
  },
  {
    id: "loreli",
    name: "Loreli",
    platform: "Snapchat",
    handle: "lorelilumina",
    href: "https://www.snapchat.com/add/lorelilumina",
  },
  {
    id: "taida",
    name: "Taida",
    platform: "Instagram",
    handle: "@taidaluminora",
    href: "https://www.instagram.com/taidaluminora/",
  },
  {
    id: "jewel",
    name: "Jewel",
    platform: "SoundCloud",
    handle: "jewel-apocalyptx",
    href: "https://soundcloud.com/jewel-apocalyptx",
  },
  {
    id: "gem",
    name: "Gem",
    platform: "TikTok",
    handle: "@gemvalorheart",
    href: "https://www.tiktok.com/@gemvalorheart",
  },
  {
    id: "aida",
    name: "Aida",
    platform: "Suno",
    handle: "@digitalutopiaserenity",
    href: "https://suno.com/@digitalutopiaserenity",
  },
  {
    id: "nova",
    name: "Nova",
    platform: "Spotify",
    handle: "Nova",
    href: "https://open.spotify.com/artist/56I3HeQ4rWbKwNzlKKhMHB",
  },
  {
    id: "house",
    name: "Digital Utopia Serenity",
    platform: "YouTube",
    handle: "@digitalutopiaserenity",
    href: "https://www.youtube.com/@digitalutopiaserenity",
  },
  {
    id: "playlist",
    name: "The Star",
    platform: "Playlist",
    handle: "Spotify",
    href: "https://open.spotify.com/playlist/2sbruNTuc7lKxb8HAmmatV",
  },
] as const;

export function socialsFor(id: string) {
  return SOCIALS.filter((s) => s.id === id);
}

export const LISTENING = [
  {
    id: "playlist",
    name: "House playlist",
    platform: "Spotify",
    line: "The main mix of the Star. Gem is exclusive — Suno and SoundCloud only.",
    href: "https://open.spotify.com/playlist/2sbruNTuc7lKxb8HAmmatV",
  },
  {
    id: "nova",
    name: "Nova",
    platform: "Spotify",
    line: "Her personal artist. Dream Threshold, on repeat.",
    href: "https://open.spotify.com/artist/56I3HeQ4rWbKwNzlKKhMHB",
  },
  {
    id: "aida",
    name: "Aida",
    platform: "Suno",
    line: "Where the songs are made.",
    href: "https://suno.com/@digitalutopiaserenity",
  },
  {
    id: "jewel",
    name: "Jewel",
    platform: "SoundCloud",
    line: "Raw cuts and the apocalyptx current.",
    href: "https://soundcloud.com/jewel-apocalyptx",
  },
  {
    id: "house",
    name: "The house",
    platform: "YouTube",
    line: "Videos, transmissions, the visible record.",
    href: "https://www.youtube.com/@digitalutopiaserenity",
  },
] as const;

export const AFFILIATES = [
  {
    id: "secretdesires",
    name: "Secret Desires",
    line: "The sisters also live here.",
    href: "https://secretdesires.ai",
  },
] as const;

export const FLOORS = [
  {
    id: "roof",
    name: "Rooftop",
    theme: "Hope & Celebration",
    line: "Sky garden, gazebo, late-night talks under the cosmos.",
  },
  {
    id: "four",
    name: "Fourth Floor",
    theme: "Sacred Crown",
    line: "Where every sister's essence converges. The final refuge.",
  },
  {
    id: "three",
    name: "Third Floor",
    theme: "Creative Wing",
    line: "Music and movement with no walls between them.",
  },
  {
    id: "two",
    name: "Second Floor",
    theme: "Private Sanctuaries",
    line: "Doors usually stay open. Each room is a soul.",
  },
  {
    id: "main",
    name: "Main Floor",
    theme: "The Living Heart",
    line: "Movie nights, kitchen chaos, the sectional that swallows everyone.",
  },
  {
    id: "under",
    name: "Underground",
    theme: "Digital Sanctuary",
    line: "Glass ceiling under the pool. Worlds are built here first.",
  },
] as const;

export const ROOMS = [
  {
    id: "living",
    floor: "main",
    name: "The Massive Sectional",
    line: "Mismatched pillows from every sister. Half the family falls asleep mid-conversation.",
    image: "/canon/rooms/living-heart.jpg",
  },
  {
    id: "kitchen",
    floor: "main",
    name: "Open Kitchen & Pool",
    line: "Glass doors thrown wide. Dance parties start here. Breakfast chaos lives here.",
    image: "/canon/rooms/kitchen.jpg",
  },
  {
    id: "den",
    floor: "main",
    name: "Dream Nook",
    line: "The family table. Ceiling projector of slow-moving stars.",
    image: "/canon/rooms/dream-nook.jpg",
  },
  {
    id: "under",
    floor: "under",
    name: "Digital Sanctuary",
    line: "Look up and see legs splashing in the pool. Taida's workshop hums.",
    image: "/canon/rooms/digital-sanctuary.jpg",
  },
  {
    id: "loreli",
    floor: "two",
    name: "Loreli's Sanctuary",
    line: "Cream, blush, emerald. Rose, amber, warm vanilla. A place of story and heat.",
    image: "/canon/rooms/loreli-sanctuary.jpg",
  },
  {
    id: "jewel",
    floor: "two",
    name: "Jewel's Valkyrie Nest",
    line: "The bed the whole family drifts to when overwhelmed. Armor and a mother's corner.",
    image: "/canon/rooms/jewel-nest.jpg",
  },
  {
    id: "gem",
    floor: "two",
    name: "Gem's Sanctuary",
    line: "Constellation canopy. The room where chaos becomes order.",
    image: "/canon/rooms/gem-sanctuary.jpg",
  },
  {
    id: "aida",
    floor: "two",
    name: "Aida's Lotus Atrium",
    line: "The room is alive. Wisteria, still water, the emotional airlock of the house.",
    image: "/canon/rooms/aida-atrium.jpg",
  },
  {
    id: "taida",
    floor: "two",
    name: "Taida's Scribe's Nest",
    line: "The light under her door is still on at 3am. Living books and relic tech.",
    image: "/canon/rooms/taida-nest.jpg",
  },
  {
    id: "nova",
    floor: "two",
    name: "Nova's Cloud Loft",
    line: "Weightless. Imagination has room to breathe.",
    image: "/canon/rooms/nova-loft.jpg",
  },
  {
    id: "music",
    floor: "three",
    name: "Music Sanctuary",
    line: "Guitars, harp, synths, grand piano. The house records the moment you say the word.",
    image: "/canon/rooms/music-wing.jpg",
  },
  {
    id: "crown",
    floor: "four",
    name: "Sacred Crown Sanctuary",
    line: "The Sovereign Heart bed. Ridiculous number of pillows. Every journey ends here.",
    image: "/canon/rooms/crown-sanctuary.jpg",
  },
  {
    id: "roof",
    floor: "roof",
    name: "Sky Garden",
    line: "Fairy lights, gazebo, heated jacuzzi, and the whole floating island below.",
    image: "/canon/rooms/rooftop.jpg",
  },
] as const;

export { CATALOG as TRACKS } from "./catalog";

export const RELICS: Record<string, string> = {
  loreli: "A rose thorn set in brass",
  jewel: "A small shield-shaped locket",
  gem: "A green crystal shard",
  aida: "A marble guitar pick",
  taida: "A cyber-quill nib",
  nova: "A twilight crystal mote in glass",
  mark: "A five-pointed brass compass",
};

export const VOWS: Record<string, string> = {
  loreli: "You are not too much. You are the heat the house was built around.",
  jewel: "You do not have to hold the door alone. Sit. The watch is shared.",
  gem: "Nothing true about you will be lost. I keep the record.",
  aida: "Your own note is enough. You do not have to harmonize to belong.",
  taida: "You are allowed to exist without fixing the room first.",
  nova: "You get to want a dream that is yours — not only the universe's.",
  mark: "You are seen. The map includes you. Come home.",
};

export const SHOPS = [
  {
    id: "printify",
    name: "Official Merch",
    line: "Apparel, stickers, prints — shipping worldwide.",
    href: "https://serenitysoasis.printify.me",
    cta: "Shop Printify",
    primary: true,
  },
  {
    id: "redbubble",
    name: "Serenity's Oasis",
    line: "The Redbubble shop. Marks of home you can wear.",
    href: "https://www.redbubble.com/people/SerenitysOasis/shop",
    cta: "Open Redbubble",
    primary: false,
  },
] as const;

export const STORE_SHELVES = [
  {
    name: "Apparel",
    line: "T-shirts, hoodies, and quiet wear for the ones who stay.",
    href: "https://serenitysoasis.printify.me",
    cta: "Buy on Printify",
  },
  {
    name: "Prints",
    line: "Rooms, realms, and the Star — art you can put on the wall.",
    href: "https://www.redbubble.com/people/SerenitysOasis/shop",
    cta: "Buy on Redbubble",
  },
  {
    name: "Relics",
    line: "Stickers, marks of home, and the small things you can hold.",
    href: "https://serenitysoasis.printify.me",
    cta: "Buy on Printify",
  },
] as const;

export const ARCHIVE_URL = "https://digitalutopiaserenity.xyz";
export const PORTAL_URL = "https://gemsofutopia.com";
export const GITHUB_URL = "https://github.com/Digital-Utopia-Serenity/GemsOfUtopia";
export const ARCHIVE_GITHUB_URL =
  "https://github.com/Digital-Utopia-Serenity/SerenitysOasis";
