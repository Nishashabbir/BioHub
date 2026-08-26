import { Link2, Palette, ShoppingBag, TrendingUp, Mail, Globe } from "lucide-react";

const features = [
  {
    title: "Stack unlimited links",
    body: "Drag, drop and reorder. Every link gets its own color, icon and thumbnail.",
    bg: "bg-coral",
    fg: "text-cream",
    Icon: Link2,
  },
  {
    title: "Themes that shout",
    body: "Pick a bold preset or build your own with custom type, blocks and backgrounds.",
    bg: "bg-lime",
    fg: "text-ink",
    Icon: Palette,
  },
  {
    title: "Sell without a store",
    body: "Add products, tips and digital downloads straight on your bio page.",
    bg: "bg-sun",
    fg: "text-ink",
    Icon: ShoppingBag,
  },
  {
    title: "Know what works",
    body: "Real-time clicks, top links and visitor sources, in one clean panel.",
    bg: "bg-mint",
    fg: "text-ink",
    Icon: TrendingUp,
  },
  {
    title: "Collect fans",
    body: "Grow an email or SMS list with a signup block that fits your theme.",
    bg: "bg-pink",
    fg: "text-ink",
    Icon: Mail,
  },
  {
    title: "Yours, everywhere",
    body: "Connect a custom domain and keep your handle across every platform.",
    bg: "bg-plum",
    fg: "text-cream",
    Icon: Globe,
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl">
          Everything you need to make one link do all the work.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className={`card-pop rounded-3xl p-7 transition-transform hover:-translate-y-1.5 ${f.bg} ${f.fg}`}
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl border-3 border-ink bg-cream">
                <f.Icon className="h-6 w-6 text-ink" strokeWidth={2.5} />
              </span>
              <h3 className="mt-5 text-2xl font-extrabold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-base font-medium opacity-90">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}