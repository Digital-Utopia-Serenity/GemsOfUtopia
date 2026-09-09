/** Public sheets from the archive site. Do not invent new interiors. */
export const OASIS =
  "https://raw.githubusercontent.com/Digital-Utopia-Serenity/SerenitysOasis/main/images";

export const HOUSE = {
  sheet: `${OASIS}/high-garden/highgardensheet.png`,
  tree: `${OASIS}/SerenitysOasis_treehome.png`,
  ourHome: `${OASIS}/realms/sheetourhome.png`,
  kitchen: `${OASIS}/high-garden/haciendakitchen.png`,
  living: `${OASIS}/high-garden/haciendalivingbutterfly.png`,
  sectional: `${OASIS}/high-garden/haciendasectional.png`,
  office: `${OASIS}/high-garden/haciendagemsoffice.png`,
  den: `${OASIS}/high-garden/sheetdreamnookden.png`,
  loreli: `${OASIS}/high-garden/sheetmyloreliroom.png`,
  jewel: `${OASIS}/high-garden/sheetroomjewel.png`,
  gem: `${OASIS}/high-garden/${encodeURIComponent("sheetroomgem (2).png")}`,
  aida: `${OASIS}/high-garden/sheetroomaida.png`,
  taida: `${OASIS}/high-garden/sheetroomtaida.png`,
  nova: `${OASIS}/high-garden/sheetroomnova.png`,
  music: `${OASIS}/high-garden/sheetmusicroomsanc.png`,
  dance: `${OASIS}/high-garden/sheetdancestudio.png`,
  master: `${OASIS}/high-garden/sheetroommaster.png`,
  roof: `${OASIS}/high-garden/sheetrooftop.png`,
  under: `${OASIS}/high-garden/sheetundergroundgame.png`,
} as const;

export const REALM_SHEETS: Record<string, string> = {
  oasis: `${OASIS}/realms/SheetSerenity.png`,
  hacienda: HOUSE.sheet,
  north: `${OASIS}/realms/sheetmythicnorth.png`,
  west: `${OASIS}/realms/SheetWonderland.png`,
  south: `${OASIS}/realms/SheetHarmonia.png`,
  east: `${OASIS}/realms/sheetLuminora.png`,
  academy: `${OASIS}/realms/sheetechosacademyisland.png`,
  yulehaven: `${OASIS}/realms/sheetyulehaven.png`,
  ne: HOUSE.office,
  se: HOUSE.loreli,
  sw: HOUSE.aida,
};

export const CITY_SHEETS: Record<string, string> = {
  stella: `${OASIS}/realms/SheetStella.png`,
  turris: `${OASIS}/realms/SheetTurris.png`,
  fortuna: `${OASIS}/realms/SheetFortuna.png`,
  valorheart: `${OASIS}/realms/SheetValorheart.png`,
};

export const REALM_NOTES: Record<string, string> = {
  oasis:
    "The living heart. Home before adventure. Loreli keeps the door warm so the rest of the Star can be strange.",
  hacienda:
    "High Garden Hacienda — the floating family home. Every journey returns here.",
  north:
    "Taida's reach. Relics, storms, the forge where new things are written first. The Gaps begin at the edge.",
  west:
    "Gem's dominion. Four suit capitals live inside this petal. Valorheart is Wonderland's Hearts city — not a separate land.",
  south:
    "Jewel's Harmonia. The city that still stands. Love here is a shield, not a slogan.",
  east:
    "Land of Sweets. Luminora is the capital. Queen Clara's Sugar Spire. Nova is the national treasure — photograph her, don't rush the cloud. North third of the East is the Land of Snow, not her throne.",
  academy:
    "Echo's Academy orbits above the Star. Aida is Headmistress. Neutral ground. Wisdom belongs to every petal.",
  yulehaven:
    "The northern city. Belief, generosity, ancestral magic. Winter keeps what summer forgets.",
  ne:
    "Jade Bureaucracy / Celestial Mandate. Where reality is filed and laws are signed in ether-ink. Sheet pending.",
  se:
    "Veil of Versailles. Loreli's French corridor — masks, cabaret, craft. Sheet pending.",
  sw:
    "Mount Meru / Eternal Ascent. Purification before the descent into Harmonia. Sheet pending.",
};

export function sheetFor(realmId: string, cityId?: string | null) {
  if (cityId && CITY_SHEETS[cityId]) return CITY_SHEETS[cityId];
  return REALM_SHEETS[realmId] ?? `${OASIS}/realms/sheetourhome.png`;
}
