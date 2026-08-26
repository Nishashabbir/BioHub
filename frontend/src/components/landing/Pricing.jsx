const plans = [
  {
    name: "Starter",
    price: "Free",
    note: "forever",
    bg: "bg-cream",
    fg: "text-ink",
    btn: "bg-lime text-ink",
    perks: ["Unlimited links", "3 bold themes", "Basic click stats", "Bio Hub handle"],
  },
  {
    name: "Pro",
    price: "$6",
    note: "per month",
    bg: "bg-coral",
    fg: "text-cream",
    btn: "bg-sun text-ink",
    perks: ["Everything in Starter", "Custom theme builder", "Sell & take tips", "Full analytics"],
    featured: true,
  },
  {
    name: "Studio",
    price: "$18",
    note: "per month",
    bg: "bg-plum",
    fg: "text-cream",
    btn: "bg-mint text-ink",
    perks: ["Everything in Pro", "Custom domain", "5 team pages", "Priority support"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-y-4 border-ink bg-pink py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
          Pick a plan, keep the color.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`card-pop rounded-3xl p-7 ${p.bg} ${p.fg} ${p.featured ? "md:-translate-y-4" : ""}`}
            >
              <p className="text-sm font-extrabold uppercase tracking-widest">{p.name}</p>
              <p className="mt-3 font-display text-5xl font-extrabold">{p.price}</p>
              <p className="text-sm font-semibold opacity-80">{p.note}</p>
              <ul className="mt-6 space-y-2 text-base font-medium">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex gap-2">
                    <span aria-hidden="true">✦</span>
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href="#claim"
                className={`card-pop mt-7 block rounded-xl px-5 py-3 text-center font-extrabold ${p.btn}`}
              >
                Get {p.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}