const faqs = [
  {
    q: "Is Bio Hub really free?",
    a: "Yes. The Starter plan stays free forever with unlimited links and your own handle.",
  },
  {
    q: "Can I use my own domain?",
    a: "Studio plans connect any domain you own, so your page lives fully on your brand.",
  },
  {
    q: "Can I change my images and colors?",
    a: "Every block, photo and color is editable. Swap them any time without rebuilding the page.",
  },
  {
    q: "Do you take a cut of sales?",
    a: "No platform fee on Pro and Studio — only the standard payment processing charge.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-cream py-20">
      <div className="mx-auto max-w-4xl px-5">
        <h2 className="text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
          Questions, answered.
        </h2>
        <div className="mt-10 space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="card-pop group rounded-2xl bg-cream p-6">
              <summary className="cursor-pointer list-none text-xl font-extrabold text-ink">
                {f.q}
                <span className="float-right text-coral group-open:rotate-45 inline-block transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 font-medium text-amber-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}