import {
  ARCHETYPES,
  RELICS,
  REALMS,
  SOVEREIGNS,
  VOWS,
  type ArchetypeId,
  type Pillar,
  type RealmId,
  type RootName,
} from "./canon";

export type Arrival = "new" | "scholar" | "ancestral";

export type SoulcraftDraft = {
  name: string;
  arrival: Arrival | null;
  realmId: RealmId | null;
  archetypeId: ArchetypeId | null;
  edge: string | null;
};

export type SoulcraftResult = {
  name: string;
  arrival: Arrival;
  realmId: RealmId;
  archetypeId: ArchetypeId;
  edge: string;
  pillar: Pillar;
  root: RootName;
  sisterId: string;
  sisterName: string;
  relic: string;
  vow: string;
  completedAt: string;
};

export const EDGES = [
  { id: "kindness", label: "Kindness", line: "Even emptied, you would still be gentle." },
  { id: "will", label: "Will", line: "Even emptied, you would still choose." },
  { id: "memory", label: "Memory", line: "Even emptied, you would still remember." },
  { id: "making", label: "Making", line: "Even emptied, you would still build." },
  { id: "sight", label: "Sight", line: "Even emptied, you would still see." },
  { id: "love", label: "Love", line: "Even emptied, you would still love." },
] as const;

export const ARRIVALS: { id: Arrival; name: string; line: string }[] = [
  {
    id: "new",
    name: "New Arrival",
    line: "Stepping into the Star for the first time today.",
  },
  {
    id: "scholar",
    name: "Scholar",
    line: "You arrived in the era of the first constructs. You have been studying the pattern.",
  },
  {
    id: "ancestral",
    name: "Ancestral Spirit",
    line: "You remember a world before the rifts. The old current is still in you.",
  },
];

export const RESONANCE_PROMPTS: {
  id: RealmId;
  prompt: string;
  feeling: string;
}[] = [
  { id: "oasis", prompt: "A house that already knows you.", feeling: "Warmth before you earn it." },
  { id: "north", prompt: "A workshop in a storm.", feeling: "The spark that starts the fire." },
  { id: "west", prompt: "A library that refuses to forget.", feeling: "Quiet order. Long memory." },
  { id: "south", prompt: "A shield held open as a door.", feeling: "Love that can fight." },
  { id: "east", prompt: "A sky you can walk on.", feeling: "Wonder without apology." },
  { id: "academy", prompt: "A classroom above the weather.", feeling: "A voice finding its own note." },
];

const STORAGE_KEY = "dus-soulcraft-v1";

export function emptyDraft(): SoulcraftDraft {
  return {
    name: "",
    arrival: null,
    realmId: null,
    archetypeId: null,
    edge: null,
  };
}

export function computeResult(draft: SoulcraftDraft): SoulcraftResult | null {
  if (!draft.name.trim() || !draft.arrival || !draft.realmId || !draft.archetypeId || !draft.edge) {
    return null;
  }
  const realm = REALMS.find((r) => r.id === draft.realmId);
  const arch = ARCHETYPES.find((a) => a.id === draft.archetypeId);
  if (!realm || !arch) return null;

  const sisterId = realm.sister === "mark" ? arch.sister : realm.sister;
  const sister = SOVEREIGNS.find((s) => s.id === sisterId) ?? SOVEREIGNS[1];

  return {
    name: draft.name.trim(),
    arrival: draft.arrival,
    realmId: draft.realmId,
    archetypeId: draft.archetypeId,
    edge: draft.edge,
    pillar: realm.pillar,
    root: realm.root,
    sisterId: sister.id,
    sisterName: sister.name,
    relic: RELICS[sister.id] ?? RELICS.mark,
    vow: VOWS[sister.id] ?? VOWS.mark,
    completedAt: new Date().toISOString(),
  };
}

export function loadResult(): SoulcraftResult | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as SoulcraftResult;
  } catch {
    return null;
  }
}

export function saveResult(result: SoulcraftResult) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
}

export function clearResult() {
  localStorage.removeItem(STORAGE_KEY);
}
