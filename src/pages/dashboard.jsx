import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const copyLink = () => {
    navigator.clipboard.writeText("biohub.me/nisha");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#fff8e8] text-[#40164d]">

      {/* Top Bar */}
      <header className="border-b-4 border-[#40164d] bg-[#fff8e8]">

        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border-4 border-[#40164d] bg-[#ff6047] text-3xl font-black shadow-[6px_6px_0_#40164d]">
              B
            </div>

            <span className="text-2xl font-black">
              Bio Hub
            </span>

          </div>


          <div className="flex items-center gap-5">

            <button className="hidden font-bold md:block">
              View profile
            </button>

            <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-[#40164d] bg-[#b7e82b] font-black">
              NS
            </div>

          </div>

        </div>

      </header>


      {/* Dashboard */}
      <main className="mx-auto max-w-7xl px-6 py-10">

        {/* Welcome */}
        <section className="mb-10">

          <div className="mb-4 inline-block -rotate-1 rounded-full border-4 border-[#40164d] bg-[#f77fa5] px-5 py-2 font-black shadow-[5px_5px_0_#40164d]">
            YOUR CREATOR HQ
          </div>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <h1 className="text-5xl font-black tracking-[-3px] md:text-6xl">
                Hey, Nisha!
              </h1>

              <p className="mt-3 text-lg font-semibold">
                Your little corner of the internet is taking shape.
              </p>

            </div>


            <div className="flex gap-3">

              <button
                onClick={() => navigate("/u/nisha")}
                className="rounded-xl border-4 border-[#40164d] bg-white px-5 py-3 font-black shadow-[5px_5px_0_#40164d] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#40164d]"
              >
                Preview
              </button>

              <button className="rounded-xl border-4 border-[#40164d] bg-[#b7e82b] px-5 py-3 font-black shadow-[5px_5px_0_#40164d] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#40164d]">
                Publish
              </button>

            </div>

          </div>

        </section>


        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-3">


          {/* Profile Completion */}
          <section className="rounded-[28px] border-4 border-[#40164d] bg-[#ff6047] p-7 shadow-[8px_8px_0_#40164d]">

            <div className="flex items-start justify-between">

              <div>

                <p className="font-black uppercase tracking-wide text-white">
                  Profile completion
                </p>

                <h2 className="mt-3 text-5xl font-black text-white">
                  75%
                </h2>

              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border-4 border-[#40164d] bg-[#fff8e8] text-xl">
                ✦
              </div>

            </div>


            <div className="mt-7 h-5 overflow-hidden rounded-full border-4 border-[#40164d] bg-[#fff8e8]">

              <div className="h-full w-[75%] bg-[#b7e82b]" />

            </div>


            <p className="mt-5 font-semibold text-white">
              Add your profile image and one more link to reach 100%.
            </p>

          </section>


          {/* Public Link */}
          <section className="rounded-[28px] border-4 border-[#40164d] bg-[#b7e82b] p-7 shadow-[8px_8px_0_#40164d]">

            <p className="font-black uppercase tracking-wide">
              Your public link
            </p>

            <h2 className="mt-5 break-all text-2xl font-black">
              biohub.me/nisha
            </h2>

            <button
              onClick={copyLink}
              className="mt-7 rounded-xl border-4 border-[#40164d] bg-[#fff8e8] px-5 py-3 font-black shadow-[5px_5px_0_#40164d] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#40164d]"
            >
              {copied ? "Copied!" : "Copy public link"}
            </button>

          </section>


          {/* Stats */}
          <section className="rounded-[28px] border-4 border-[#40164d] bg-[#ffd01a] p-7 shadow-[8px_8px_0_#40164d]">

            <p className="font-black uppercase tracking-wide">
              This week
            </p>

            <div className="mt-6 flex items-end justify-between">

              <div>

                <p className="text-5xl font-black">
                  1,204
                </p>

                <p className="mt-2 font-bold">
                  Profile visits
                </p>

              </div>

              <div className="text-5xl">
                ↗
              </div>

            </div>

          </section>


          {/* Quick Actions */}
          <section className="rounded-[28px] border-4 border-[#40164d] bg-white p-7 shadow-[8px_8px_0_#40164d] lg:col-span-2">

            <h2 className="text-3xl font-black">
              Quick actions.
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-4">


              {/* Add Link */}
              <button
                onClick={() => navigate("/links")}
                className="rounded-2xl border-4 border-[#40164d] bg-[#f77fa5] p-5 text-left font-black transition hover:-translate-y-1"
              >

                <span className="text-3xl">
                  ＋
                </span>

                <span className="mt-3 block">
                  Add a link
                </span>

              </button>


              {/* Edit Profile */}
              <button
                onClick={() => navigate("/profile")}
                className="rounded-2xl border-4 border-[#40164d] bg-[#62dcb4] p-5 text-left font-black transition hover:-translate-y-1"
              >

                <span className="text-3xl">
                  ◉
                </span>

                <span className="mt-3 block">
                  Edit profile
                </span>

              </button>


              {/* Change Theme */}
              <button
                onClick={() => navigate("/themes")}
                className="rounded-2xl border-4 border-[#40164d] bg-[#ffd01a] p-5 text-left font-black transition hover:-translate-y-1"
              >

                <span className="text-3xl">
                  ✦
                </span>

                <span className="mt-3 block">
                  Change theme
                </span>

              </button>


              {/* Settings */}
              <button
                onClick={() => navigate("/settings")}
                className="rounded-2xl border-4 border-[#40164d] bg-[#b7e82b] p-5 text-left font-black transition hover:-translate-y-1"
              >

                <span className="text-3xl">
                  ⚙
                </span>

                <span className="mt-3 block">
                  Settings
                </span>

              </button>

            </div>

          </section>


          {/* Recent Activity */}
          <section className="rounded-[28px] border-4 border-[#40164d] bg-[#40164d] p-7 text-[#fff8e8] shadow-[8px_8px_0_#f77fa5]">

            <h2 className="text-3xl font-black">
              Recent activity.
            </h2>

            <div className="mt-6 space-y-5">


              <div className="flex gap-3">

                <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#b7e82b]" />

                <div>

                  <p className="font-bold">
                    Added Instagram link
                  </p>

                  <p className="text-sm opacity-70">
                    2 hours ago
                  </p>

                </div>

              </div>


              <div className="flex gap-3">

                <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#ff6047]" />

                <div>

                  <p className="font-bold">
                    Updated profile
                  </p>

                  <p className="text-sm opacity-70">
                    Yesterday
                  </p>

                </div>

              </div>


              <div className="flex gap-3">

                <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#ffd01a]" />

                <div>

                  <p className="font-bold">
                    Published your page
                  </p>

                  <p className="text-sm opacity-70">
                    2 days ago
                  </p>

                </div>

              </div>

            </div>

          </section>


        </div>


        {/* Bottom Publish Banner */}
        <section className="mt-10 flex flex-col justify-between gap-6 rounded-[28px] border-4 border-[#40164d] bg-[#f77fa5] p-8 shadow-[8px_8px_0_#40164d] md:flex-row md:items-center">

          <div>

            <h2 className="text-3xl font-black">
              Almost ready to go live?
            </h2>

            <p className="mt-2 font-semibold">
              Your page is looking good. Put it out there.
            </p>

          </div>


          <button className="rounded-2xl border-4 border-[#40164d] bg-[#b7e82b] px-8 py-4 text-lg font-black shadow-[6px_6px_0_#40164d] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#40164d]">
            Publish my page →
          </button>

        </section>

      </main>

    </div>
  );
}