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
  hacienda: `${OASIS}/high-garden/highgardensheet.png`,
  north: `${OASIS}/realms/sheetmythicnorth.png`,
  west: `${OASIS}/realms/SheetWonderland.png`,
  south: `${OASIS}/realms/SheetHarmonia.png`,
  east: `${OASIS}/realms/sheetLuminora.png`,
  academy: `${OASIS}/realms/sheetechosacademyisland.png`,
  yulehaven: `${OASIS}/realms/sheetyulehaven.png`,
  stella: `${OASIS}/realms/SheetStella.png`,
  turris: `${OASIS}/realms/SheetTurris.png`,
  fortuna: `${OASIS}/realms/SheetFortuna.png`,
  valorheart: `${OASIS}/realms/SheetValorheart.png`,
};
