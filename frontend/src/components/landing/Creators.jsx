import c1 from "@/assets/creator-1.jpg";
import c2 from "@/assets/creator-2.jpg";
import c3 from "@/assets/creator-3.jpg";

const creators = [
  {
    img: c1,
    name: "Rayan Malik",
    handle: "biohub.me/rayan",
    quote: "Swapped five link tools for one page. My clicks doubled in a week.",
    bg: "bg-coral",
    fg: "text-cream",
  },
  {
    img: c2,
    name: "Noor Ahmed",
    handle: "biohub.me/noor",
    quote: "Every release, every show, every playlist — all in one loud page.",
    bg: "bg-lime",
    fg: "text-ink",
  },
  {
    img: c3,
    name: "Zara Okoye",
    handle: "biohub.me/zara",
    quote: "I sell my products straight from my bio now. No store needed.",
    bg: "bg-mint",
    fg: "text-ink",
  },
];

export default function Creators() {
  return (
    <section id="creators" className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
          Built for people with a lot going on.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {creators.map((c) => (
            <figure key={c.name} className={`card-pop overflow-hidden rounded-3xl ${c.bg} ${c.fg}`}>
              <img
                src={c.img}
                alt={`Portrait of ${c.name}`}
                width={700}
                height={700}
                loading="lazy"
                className="h-60 w-full border-b-4 border-ink object-cover"
              />
              <figcaption className="p-6">
                <blockquote className="text-lg font-bold leading-snug">“{c.quote}”</blockquote>
                <p className="mt-4 text-sm font-extrabold uppercase tracking-widest">{c.name}</p>
                <p className="text-sm font-semibold opacity-80">{c.handle}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}