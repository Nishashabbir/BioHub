const steps = [
  { n: "01", t: "Claim your handle", d: "Pick biohub.me/yourname before someone else does." },
  { n: "02", t: "Drop in your links", d: "Paste URLs, add covers, pick colors, reorder freely." },
  { n: "03", t: "Share it everywhere", d: "One link in every bio. Watch the clicks roll in." },
];

export default function Steps() {
  return (
    <section className="border-y-4 border-ink bg-sun py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
          Live in three moves.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="card-pop rounded-3xl bg-cream p-7">
              <span className="font-display text-5xl font-extrabold text-coral">{s.n}</span>
              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-ink">{s.t}</h3>
              <p className="mt-2 font-medium text-black-100">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}