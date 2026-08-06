import { Link } from "react-router-dom";

export default function Nav() {
  const links = [
    { label: "Features", href: "#features" },
    { label: "Creators", href: "#creators" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b-4 border-ink bg-cream">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="card-pop grid h-10 w-10 place-items-center rounded-xl bg-coral text-lg font-extrabold text-cream">
            B
          </span>
          <span className="font-display text-2xl font-extrabold tracking-tight text-ink">
            Bio Hub
          </span>
        </a>

        <ul className="hidden items-center gap-7 text-sm font-bold text-ink md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a className="hover:text-coral" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <Link
          to="/login"
          className="card-pop rounded-full bg-lime px-5 py-2.5 text-sm font-extrabold text-ink transition-transform hover:-translate-y-0.5"
        >
          Claim your link
        </Link>
      </nav>
    </header>
  );
}