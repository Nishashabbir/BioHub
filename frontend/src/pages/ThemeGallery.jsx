import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { themes, getSavedThemeId, readableOn } from "../lib/themes";
  export default function ThemeGallery() {
  const [selectedTheme, setSelectedTheme] = useState(getSavedThemeId());
  const navigate = useNavigate();

  const handleSelect = (themeId) => {
    setSelectedTheme(themeId);
  };

  const saveTheme = () => {
    localStorage.setItem("biohub-theme", selectedTheme);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#fff8e8] text-[#40164d]">

      {/* ================= HEADER ================= */}

      <header className="border-b-4 border-[#40164d]">

        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border-4 border-[#40164d] bg-[#ff6047] text-3xl font-black shadow-[6px_6px_0_#40164d]">
              B
            </div>

            <span className="text-2xl font-black">
              Bio Hub
            </span>

          </div>


          <button
            onClick={() => navigate("/dashboard")}
            className="font-black transition hover:opacity-60"
          >
            ← Dashboard
          </button>

        </div>

      </header>


      {/* ================= MAIN ================= */}

      <main className="mx-auto max-w-7xl px-6 py-12">

        {/* Heading */}

        <section className="mb-12">

          <div className="mb-5 inline-block -rotate-1 rounded-full border-4 border-[#40164d] bg-[#ffd01a] px-5 py-2 font-black shadow-[5px_5px_0_#40164d]">
            MAKE IT YOURS
          </div>

          <h1 className="text-5xl font-black tracking-[-3px] md:text-7xl">
            Pick your vibe.
          </h1>

          <p className="mt-4 max-w-2xl text-lg font-semibold">
            Choose a theme for your public profile. You can change it
            whenever you want.
          </p>

        </section>


        {/* ================= THEME GRID ================= */}

        <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {themes.map((theme) => {

            const isSelected = selectedTheme === theme.id;

            return (
              <article
                key={theme.id}
                className={`overflow-hidden rounded-[28px] border-4 border-[#40164d] bg-white shadow-[8px_8px_0_#40164d] transition ${
                  isSelected
                    ? "ring-4 ring-[#ff6047] ring-offset-4"
                    : "hover:-translate-y-1"
                }`}
              >

                {/* Theme Preview */}

                <div
                  className="relative h-[370px] p-6"
                  style={{
                    backgroundColor: theme.bg,
                    color: theme.text,
                  }}
                >

                  {/* Theme label */}

                  <div
                    className="absolute left-5 top-5 rounded-full border-2 px-3 py-1 text-xs font-black"
                    style={{
                      borderColor: theme.text,
                    }}
                  >
                    PREVIEW
                  </div>


                  {/* Mini Public Profile */}

                  <div className="flex h-full flex-col items-center justify-center">

                    {/* Avatar */}

                    <div
                      className={`flex h-20 w-20 items-center justify-center border-4 text-2xl font-black ${
                        theme.style === "soft"
                          ? "rounded-full"
                          : theme.style === "editorial"
                            ? "rounded-none"
                            : "rounded-full"
                      }`}
                      style={{
                        backgroundColor: theme.accent,
                        borderColor: theme.text,
                        color: readableOn(theme.accent),
                      }}
                    >
                      NS
                    </div>


                    <h3
                      className={`mt-4 text-2xl font-black ${
                        theme.style === "editorial"
                          ? "font-serif"
                          : ""
                      }`}
                    >
                      Nisha Shabbir
                    </h3>


                    <p
                      className="mt-1 text-sm font-semibold opacity-60"
                    >
                      @nisha
                    </p>


                    <p className="mt-3 max-w-[230px] text-center text-sm font-semibold opacity-80">
                      Developer, creator & curious human.
                    </p>


                    {/* Fake links */}

                    <div className="mt-5 w-full max-w-[250px] space-y-2">

                      <div
                        className={`flex h-11 items-center justify-center border-2 text-sm font-black ${
                          theme.style === "soft"
                            ? "rounded-full"
                            : theme.style === "editorial"
                              ? "rounded-none"
                              : "rounded-xl"
                        }`}
                        style={{
                          backgroundColor: theme.card,
                          borderColor: theme.text,
                          color: readableOn(theme.card),
                        }}
                      >
                        Instagram
                      </div>


                      <div
                        className={`flex h-11 items-center justify-center border-2 text-sm font-black ${
                          theme.style === "soft"
                            ? "rounded-full"
                            : theme.style === "editorial"
                              ? "rounded-none"
                              : "rounded-xl"
                        }`}
                        style={{
                          backgroundColor: theme.card,
                          borderColor: theme.text,
                          color: readableOn(theme.card),
                        }}
                      >
                        Portfolio
                      </div>


                      <div
                        className={`flex h-11 items-center justify-center border-2 text-sm font-black ${
                          theme.style === "soft"
                            ? "rounded-full"
                            : theme.style === "editorial"
                              ? "rounded-none"
                              : "rounded-xl"
                        }`}
                        style={{
                          backgroundColor: theme.button,
                          borderColor: theme.text,
                          color: readableOn(theme.button),
                        }}
                      >
                        Contact Me
                      </div>

                    </div>

                  </div>

                </div>


                {/* Theme Information */}

                <div className="p-6">

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <h2 className="text-2xl font-black">
                        {theme.name}
                      </h2>

                      <p className="mt-1 text-sm font-semibold opacity-60">
                        {theme.description}
                      </p>

                    </div>


                    {isSelected && (
                      <div className="shrink-0 rounded-full border-4 border-[#40164d] bg-[#b7e82b] px-3 py-1 text-xs font-black">
                        SELECTED
                      </div>
                    )}

                  </div>


                  {/* Color preview */}

                  <div className="mt-5 flex gap-2">

                    <div
                      className="h-7 w-7 rounded-full border-2 border-[#40164d]"
                      style={{ backgroundColor: theme.bg }}
                    />

                    <div
                      className="h-7 w-7 rounded-full border-2 border-[#40164d]"
                      style={{ backgroundColor: theme.card }}
                    />

                    <div
                      className="h-7 w-7 rounded-full border-2 border-[#40164d]"
                      style={{ backgroundColor: theme.accent }}
                    />

                    <div
                      className="h-7 w-7 rounded-full border-2 border-[#40164d]"
                      style={{ backgroundColor: theme.button }}
                    />

                  </div>


                  <button
                    onClick={() => handleSelect(theme.id)}
                    className={`mt-6 w-full rounded-xl border-4 border-[#40164d] px-5 py-3 font-black shadow-[5px_5px_0_#40164d] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#40164d] ${
                      isSelected
                        ? "bg-[#b7e82b]"
                        : "bg-[#fff8e8]"
                    }`}
                  >
                    {isSelected ? "Selected ✓" : "Use this theme"}
                  </button>

                </div>

              </article>
            );
          })}

        </section>


        {/* ================= BOTTOM ACTION ================= */}

        <section className="mt-12 flex flex-col justify-between gap-6 rounded-[28px] border-4 border-[#40164d] bg-[#f77fa5] p-7 shadow-[8px_8px_0_#40164d] md:flex-row md:items-center">

          <div>

            <h2 className="text-3xl font-black">
              {themes.find((theme) => theme.id === selectedTheme)?.name}
            </h2>

            <p className="mt-1 font-semibold">
              This theme will be used on your public profile.
            </p>

          </div>


          <button
            onClick={saveTheme}
            className="rounded-2xl border-4 border-[#40164d] bg-[#b7e82b] px-8 py-4 text-lg font-black shadow-[6px_6px_0_#40164d] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#40164d]"
          >
            Save Theme →
          </button>

        </section>

      </main>

    </div>
  );
}