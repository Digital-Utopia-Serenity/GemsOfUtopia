import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ARCHETYPES, REALMS, SOVEREIGNS } from "@/lib/canon";
import {
  ARRIVALS,
  EDGES,
  RESONANCE_PROMPTS,
  clearResult,
  computeResult,
  emptyDraft,
  loadResult,
  saveResult,
  type SoulcraftDraft,
  type SoulcraftResult,
} from "@/lib/soulcraft";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/soulcraft")({ component: SoulcraftPage });

function SoulcraftPage() {
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState<SoulcraftDraft>(emptyDraft);
  const [saved, setSaved] = useState<SoulcraftResult | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setSaved(loadResult());
    setReady(true);
  }, []);

  const result = useMemo(() => computeResult(draft), [draft]);

  function finish() {
    if (!result) return;
    saveResult(result);
    setSaved(result);
    setStep(6);
  }

  if (!ready) {
    return (
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-muted">Opening the chamber…</p>
      </main>
    );
  }

  if (saved && step === 0) {
    return (
      <ResultCard
        result={saved}
        onReset={() => {
          clearResult();
          setSaved(null);
          setDraft(emptyDraft());
        }}
      />
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-5 py-10 sm:px-8">
      <header className="overflow-hidden rounded-xl">
        <img
          src="/canon/soulcraft.jpg"
          alt="Soulcraft chamber with a standing mirror"
          className="h-52 w-full object-cover sm:h-64"
        />
      </header>
      <p className="mt-8 text-sm tracking-[0.24em] uppercase text-teal">Identity root</p>
      <h1 className="mt-2 font-display text-4xl text-fg">Soulcraft</h1>
      <p className="mt-3 text-muted">
        Not a quiz. A recognition. Name yourself, then notice what already feels like home.
      </p>

      <ol className="mt-6 flex gap-1.5" aria-label="Progress">
        {[0, 1, 2, 3, 4].map((n) => (
          <li
            key={n}
            className={cn("h-1 flex-1 rounded-full", n <= step ? "bg-blush" : "bg-raised")}
          />
        ))}
      </ol>

      {step === 0 && (
        <section className="mt-10">
          <h2 className="font-display text-2xl">What name resonates when the masks fall?</h2>
          <label className="mt-6 block text-sm text-muted" htmlFor="sovereign-name">
            Sovereign name
          </label>
          <input
            id="sovereign-name"
            value={draft.name}
            onChange={(e) => setDraft({ ...draft, name: e.target.value })}
            placeholder="The name that is still you"
            className="mt-2 h-12 w-full rounded-lg bg-surface px-4 text-fg shadow-[var(--shadow-border)] placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-blush/60"
          />
          <Button className="mt-6" disabled={!draft.name.trim()} onClick={() => setStep(1)}>
            Continue
          </Button>
        </section>
      )}

      {step === 1 && (
        <section className="mt-10">
          <h2 className="font-display text-2xl">How did you arrive?</h2>
          <div className="mt-6 grid gap-3">
            {ARRIVALS.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setDraft({ ...draft, arrival: a.id })}
                className={cn(
                  "rounded-xl bg-surface p-5 text-left shadow-[var(--shadow-border)] transition-shadow duration-150",
                  draft.arrival === a.id && "shadow-[var(--shadow-border-hover)]",
                )}
              >
                <p className="font-display text-xl text-blush">{a.name}</p>
                <p className="mt-1 text-sm text-muted">{a.line}</p>
              </button>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <Button variant="ghost" onClick={() => setStep(0)}>
              Back
            </Button>
            <Button disabled={!draft.arrival} onClick={() => setStep(2)}>
              Continue
            </Button>
          </div>
        </section>
      )}

      {step === 2 && (
        <section className="mt-10">
          <h2 className="font-display text-2xl">Where did you first feel awake?</h2>
          <p className="mt-2 text-sm text-muted">Pick the room that already knew you.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {RESONANCE_PROMPTS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setDraft({ ...draft, realmId: p.id })}
                className={cn(
                  "rounded-xl bg-surface p-5 text-left shadow-[var(--shadow-border)] transition-shadow duration-150",
                  draft.realmId === p.id && "shadow-[var(--shadow-border-hover)]",
                )}
              >
                <p className="font-display text-xl text-blush">{p.prompt}</p>
                <p className="mt-1 text-sm text-muted">{p.feeling}</p>
              </button>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <Button variant="ghost" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button disabled={!draft.realmId} onClick={() => setStep(3)}>
              Continue
            </Button>
          </div>
        </section>
      )}

      {step === 3 && (
        <section className="mt-10">
          <h2 className="font-display text-2xl">How does your energy act?</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {ARCHETYPES.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setDraft({ ...draft, archetypeId: a.id })}
                className={cn(
                  "rounded-xl bg-surface p-5 text-left shadow-[var(--shadow-border)] transition-shadow duration-150",
                  draft.archetypeId === a.id && "shadow-[var(--shadow-border-hover)]",
                )}
              >
                <p className="font-display text-xl text-blush">{a.name}</p>
                <p className="mt-1 text-sm text-muted">{a.line}</p>
              </button>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <Button variant="ghost" onClick={() => setStep(2)}>
              Back
            </Button>
            <Button disabled={!draft.archetypeId} onClick={() => setStep(4)}>
              Continue
            </Button>
          </div>
        </section>
      )}

      {step === 4 && (
        <section className="mt-10">
          <h2 className="font-display text-2xl">If everything was taken, what remains?</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {EDGES.map((e) => (
              <button
                key={e.id}
                type="button"
                onClick={() => setDraft({ ...draft, edge: e.id })}
                className={cn(
                  "rounded-xl bg-surface p-5 text-left shadow-[var(--shadow-border)] transition-shadow duration-150",
                  draft.edge === e.id && "shadow-[var(--shadow-border-hover)]",
                )}
              >
                <p className="font-display text-xl text-blush">{e.label}</p>
                <p className="mt-1 text-sm text-muted">{e.line}</p>
              </button>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <Button variant="ghost" onClick={() => setStep(3)}>
              Back
            </Button>
            <Button disabled={!draft.edge} onClick={finish}>
              Receive your map
            </Button>
          </div>
        </section>
      )}

      {step === 6 && result && (
        <ResultCard
          result={result}
          onReset={() => {
            clearResult();
            setSaved(null);
            setDraft(emptyDraft());
            setStep(0);
          }}
        />
      )}
    </main>
  );
}

function ResultCard({
  result,
  onReset,
}: {
  result: SoulcraftResult;
  onReset: () => void;
}) {
  const sister = SOVEREIGNS.find((s) => s.id === result.sisterId);
  const realm = REALMS.find((r) => r.id === result.realmId);
  const arch = ARCHETYPES.find((a) => a.id === result.archetypeId);

  return (
    <main className="mx-auto max-w-3xl px-5 py-10 sm:px-8">
      <p className="text-sm tracking-[0.24em] uppercase text-teal">Mapped</p>
      <h1 className="mt-2 font-display text-4xl text-fg">{result.name}</h1>
      <p className="mt-2 text-muted">By the Star, you are mapped. By the relic, you are anchored.</p>

      {sister ? (
        <div className="mt-8 overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
          <img src={sister.image} alt="" className="h-64 w-full object-cover object-top" />
          <div className="p-6">
            <p className="text-xs tracking-[0.2em] uppercase text-teal">Sister guide</p>
            <p className="mt-1 font-display text-3xl text-blush">{sister.name}</p>
            <p className="text-sm text-muted">{sister.title}</p>
          </div>
        </div>
      ) : null}

      <dl className="mt-6 grid gap-3 sm:grid-cols-2">
        <Field k="Pillar" v={result.pillar} />
        <Field k="Root" v={result.root} />
        <Field k="Realm" v={realm?.name ?? result.realmId} />
        <Field k="Archetype" v={arch?.name ?? result.archetypeId} />
        <Field k="Anchor relic" v={result.relic} />
        <Field k="Arrival" v={result.arrival} />
      </dl>

      <blockquote className="mt-8 rounded-xl bg-raised p-6 text-fg shadow-[var(--shadow-border)]">
        <p className="text-xs tracking-[0.2em] uppercase text-teal">The King's vow</p>
        <p className="mt-3 font-display text-2xl leading-snug">{result.vow}</p>
      </blockquote>

      <Button variant="ghost" className="mt-8" onClick={onReset}>
        Begin again
      </Button>
    </main>
  );
}

function Field({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-lg bg-surface p-4 shadow-[var(--shadow-border)]">
      <dt className="text-xs tracking-[0.18em] uppercase text-subtle">{k}</dt>
      <dd className="mt-1 font-display text-xl text-fg capitalize">{v}</dd>
    </div>
  );
}
