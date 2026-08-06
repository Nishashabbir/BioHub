import { Link } from "react-router-dom";

export default function CtaFooter() {
  return (
    <footer className="border-t-4 border-ink bg-plum">
      <div className="mx-auto max-w-6xl px-5 py-20 text-center">
        <h2 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-cream md:text-6xl">
          Your link is still available. Probably.
        </h2>
        <a
          href="#claim"
          className="card-pop-lg mt-8 inline-block rounded-full bg-lime px-8 py-4 text-lg font-extrabold text-ink transition-transform hover:-translate-y-1"
        >
          Build my Bio Hub
        </a>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t-2 border-cream/20 pt-8 text-sm font-semibold text-cream/70 sm:flex-row">
          <span className="font-display text-xl font-extrabold text-cream">Bio Hub</span>
          <nav className="flex gap-6">
            <Link className="hover:text-lime" to="/dashboard">
              Dashboard
            </Link>
            <a className="hover:text-lime" href="#features">
              Features
            </a>
            <a className="hover:text-lime" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-lime" href="#faq">
              FAQ
            </a>
          </nav>
          <span>© {new Date().getFullYear()} Bio Hub</span>
        </div>
      </div>
    </footer>
  );
}