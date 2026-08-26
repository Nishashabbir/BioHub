import { useParams, Link } from "react-router-dom";
import { getTheme, readableOn } from "../lib/themes";

export default function PublicProfile() {
  const { username } = useParams();
  const theme = getTheme();

  return (
    <div
      className="min-h-screen bg-[var(--c-bg)] px-6 py-10 text-[var(--c-text)]"
      style={{
        "--c-bg": theme.bg,
        "--c-text": theme.text,
        "--c-card": theme.card,
        "--c-accent": theme.accent,
        "--c-button": theme.button,
      }}
    >

      <div className="mx-auto flex max-w-xl items-center justify-between">

        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 rounded-full border-4 border-[var(--c-text)] bg-[var(--c-card)] px-5 py-2 font-black shadow-[4px_4px_0_var(--c-text)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_var(--c-text)]"
          style={{ color: readableOn(theme.card) }}
        >
          ← Dashboard
        </Link>

        <span
          className="hidden rounded-full border-4 border-[var(--c-text)] bg-[var(--c-accent)] px-4 py-2 text-xs font-black uppercase tracking-wide shadow-[4px_4px_0_var(--c-text)] sm:block"
          style={{ color: readableOn(theme.accent) }}
        >
          Live preview
        </span>

      </div>

      <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center">

        {/* ================= PROFILE ================= */}

        <section className="w-full text-center">

          {/* Profile Picture */}

          <div
            className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-4 border-[var(--c-text)] bg-[var(--c-accent)] text-4xl font-black shadow-[7px_7px_0_var(--c-text)]"
            style={{ color: readableOn(theme.accent) }}
          >
            NS
          </div>


          {/* Name */}

          <h1 className="mt-7 text-4xl font-black tracking-[-2px] md:text-5xl">
            Nisha Shabbir
          </h1>


          {/* Username */}

          <p className="mt-2 font-bold opacity-60">
            @{username || "nisha"}
          </p>


          {/* Bio */}

          <p className="mx-auto mt-5 max-w-md text-lg font-semibold leading-relaxed">
            Web developer, creator & curious human building things
            on the internet.
          </p>

        </section>


        {/* ================= SOCIAL LINKS ================= */}

        <section className="mt-10 w-full space-y-4">

          <a
            href="https://instagram.com"
            className="flex w-full items-center justify-between rounded-2xl border-4 border-[var(--c-text)] bg-[var(--c-card)] px-6 py-5 font-black shadow-[6px_6px_0_var(--c-text)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_var(--c-text)]"
            style={{ color: readableOn(theme.card) }}
          >

            <span className="flex items-center gap-4">

              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl border-4 border-[var(--c-text)] bg-[var(--c-bg)] text-xl"
                style={{ color: readableOn(theme.bg) }}
              >
                ◎
              </span>

              Instagram

            </span>

            <span className="text-2xl">
              ↗
            </span>

          </a>


          <a
            href="https://github.com"
            className="flex w-full items-center justify-between rounded-2xl border-4 border-[var(--c-text)] bg-[var(--c-accent)] px-6 py-5 font-black shadow-[6px_6px_0_var(--c-text)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_var(--c-text)]"
            style={{ color: readableOn(theme.accent) }}
          >

            <span className="flex items-center gap-4">

              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl border-4 border-[var(--c-text)] bg-[var(--c-bg)] text-xl"
                style={{ color: readableOn(theme.bg) }}
              >
                ◈
              </span>

              GitHub

            </span>

            <span className="text-2xl">
              ↗
            </span>

          </a>


          <a
            href="https://linkedin.com"
            className="flex w-full items-center justify-between rounded-2xl border-4 border-[var(--c-text)] bg-[var(--c-button)] px-6 py-5 font-black shadow-[6px_6px_0_var(--c-text)] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_var(--c-text)]"
            style={{ color: readableOn(theme.button) }}
          >

            <span className="flex items-center gap-4">

              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl border-4 border-[var(--c-text)] bg-[var(--c-bg)] text-sm font-black"
                style={{ color: readableOn(theme.bg) }}
              >
                in
              </span>

              LinkedIn

            </span>

            <span className="text-2xl">
              ↗
            </span>

          </a>

        </section>


        {/* ================= CONTACT ================= */}

        <section className="mt-8 grid w-full gap-4 sm:grid-cols-2">

          <a
            href="mailto:nisha@example.com"
            className="rounded-2xl border-4 border-[var(--c-text)] bg-[var(--c-text)] px-5 py-4 text-center font-black text-[var(--c-bg)] shadow-[6px_6px_0_var(--c-button)] transition hover:translate-y-1"
          >
            ✉ Email me
          </a>


          <a
            href="tel:+923001234567"
            className="rounded-2xl border-4 border-[var(--c-text)] bg-[var(--c-accent)] px-5 py-4 text-center font-black shadow-[6px_6px_0_var(--c-text)] transition hover:translate-y-1"
            style={{ color: readableOn(theme.accent) }}
          >
            ☎ Contact me
          </a>

        </section>


        {/* ================= FOOTER ================= */}

        <footer className="mt-14 pb-8 text-center">

          <div className="inline-flex items-center gap-2 rounded-full border-4 border-[var(--c-text)] bg-[var(--c-bg)] px-5 py-2 font-black shadow-[4px_4px_0_var(--c-text)]">

            <span
              className="flex h-7 w-7 items-center justify-center rounded-lg border-2 border-[var(--c-text)] bg-[var(--c-button)] text-xs font-black text-[var(--c-bg)]"
              style={{ color: readableOn(theme.button) }}
            >
              B
            </span>

            Bio Hub

          </div>

          <p className="mt-4 text-sm font-semibold opacity-50">
            One link. Everything you create.
          </p>

        </footer>

      </main>

    </div>
  );
}
