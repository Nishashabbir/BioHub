import heroPhone from "@/assets/hero-phone.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-sun opacity-70" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-mint opacity-60" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="card-pop inline-block rotate-[-2deg] rounded-full bg-pink px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-ink">
            Your whole world, one link
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[0.95] tracking-tight text-ink md:text-7xl">
            One link that
            <span className="card-pop mx-2 inline-block rotate-1 rounded-2xl bg-coral px-3 py-1 text-cream">
              holds
            </span>
            everything you make.
          </h1>

          

          <form
            id="claim"
            onSubmit={(e) => e.preventDefault()}
            className="card-pop-lg mt-8 flex max-w-md flex-col gap-2 rounded-2xl bg-cream p-2 sm:flex-row sm:items-center"
          >
            <span className="pl-3 font-bold text-purple-950">biohub.me/</span>
            <input
              aria-label="Choose your Bio Hub handle"
              placeholder="yourname"
              className="min-w-0 flex-1 bg-transparent px-1 py-2 font-bold text-ink outline-none placeholder:text-plum/40"
            />
            <button
              type="submit"
              className="card-pop rounded-xl bg-lime px-5 py-2.5 font-extrabold text-ink transition-transform hover:-translate-y-0.5"
            >
              Grab it
            </button>
          </form>

          <p className="mt-4 text-sm font-semibold text-pink-700">
            Free forever · No card · Live in 2 minutes
          </p>
        </div>

        <div className="relative">
          <div className="card-pop-lg animate-floaty overflow-hidden rounded-[2rem] bg-cream">
            <img
              src={heroPhone}
              alt="Bio Hub page on a phone showing an avatar and colorful stacked links"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="card-pop absolute -left-4 top-8 rotate-[-8deg] rounded-xl bg-sun px-4 py-2 text-sm font-extrabold text-ink">
            +1,204 clicks today
          </div>
          <div className="card-pop absolute -bottom-4 right-4 rotate-6 rounded-xl bg-plum px-4 py-2 text-sm font-extrabold text-cream">
            Shop · Music · Booking
          </div>
        </div>
      </div>
    </section>
  );
}