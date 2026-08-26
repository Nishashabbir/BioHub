import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen bg-[#fff8e8] text-[#40164d]">

      {/* Decorative shapes */}
      <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-[#ffd957]" />

      <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#62dcb4]" />

      {/* Navbar */}
      <header className="relative z-10 flex h-24 items-center justify-between border-b-4 border-[#40164d] px-6 md:px-16">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-[20px] border-4 border-[#40164d] bg-[#ff6047] text-3xl font-black shadow-[7px_7px_0_#40164d]">
            B
          </div>

          <span className="text-2xl font-black md:text-3xl">
            Bio Hub
          </span>

        </div>

        <Link
          to="/"
          className="font-bold transition-opacity hover:opacity-60"
        >
          Back home
        </Link>

      </header>


      {/* Register */}
      <main className="relative flex min-h-[calc(100vh-96px)] items-center justify-center px-6 py-16">

        <div className="relative z-10 w-full max-w-[520px]">

          {/* Label */}
          <div className="mb-8 inline-block rotate-2 rounded-full border-4 border-[#40164d] bg-[#b7e82b] px-6 py-3 font-black tracking-wide shadow-[6px_6px_0_#40164d]">
            LET'S MAKE IT OFFICIAL
          </div>


          {/* Card */}
          <div className="rounded-[32px] border-4 border-[#40164d] bg-[#fff8e8] p-8 shadow-[12px_12px_0_#40164d] md:p-12">

            <h1 className="text-5xl font-black leading-[0.95] tracking-[-3px] md:text-6xl">
              Create your
              <br />
              <span className="text-[#ff6047]">
                Bio Hub.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed">
              One link. Everything you make.
              <br />
              Let's get your corner of the internet started.
            </p>


            {/* Form */}
            <form className="mt-10 space-y-5">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-black uppercase tracking-wide">
                  Your name
                </label>

                <input
                  type="text"
                  placeholder="Nisha Shabbir"
                  className="w-full rounded-2xl border-4 border-[#40164d] bg-white px-5 py-4 text-lg font-semibold text-[#40164d] outline-none placeholder:text-[#806087] focus:bg-[#fff0f5]"
                />
              </div>


              {/* Username */}
              <div>
                <label className="mb-2 block text-sm font-black uppercase tracking-wide">
                  Pick your handle
                </label>

                <div className="flex">

                  <span className="flex items-center rounded-l-2xl border-4 border-r-0 border-[#40164d] bg-[#f77fa5] px-4 font-black">
                    biohub.me/
                  </span>

                  <input
                    type="text"
                    placeholder="yourname"
                    className="min-w-0 flex-1 rounded-r-2xl border-4 border-[#40164d] bg-white px-4 py-4 text-lg font-semibold text-[#40164d] outline-none placeholder:text-[#806087] focus:bg-[#fff0f5]"
                  />

                </div>
              </div>


              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-black uppercase tracking-wide">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border-4 border-[#40164d] bg-white px-5 py-4 text-lg font-semibold text-[#40164d] outline-none placeholder:text-[#806087] focus:bg-[#fff0f5]"
                />
              </div>


              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-black uppercase tracking-wide">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create a strong password"
                  className="w-full rounded-2xl border-4 border-[#40164d] bg-white px-5 py-4 text-lg font-semibold text-[#40164d] outline-none placeholder:text-[#806087] focus:bg-[#fff0f5]"
                />
              </div>


              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-3 pt-2 text-sm font-semibold leading-relaxed">

                <input
                  type="checkbox"
                  className="mt-1 h-5 w-5 accent-[#b7e82b]"
                />

                <span>
                  I agree to the{" "}
                  <a
                    href="#"
                    className="font-black text-[#ff6047] underline"
                  >
                    Terms
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="font-black text-[#ff6047] underline"
                  >
                    Privacy Policy
                  </a>.
                </span>

              </label>


              {/* Register button */}
              <button
                type="submit"
                className="mt-3 w-full rounded-2xl border-4 border-[#40164d] bg-[#ff6047] px-6 py-5 text-xl font-black text-white shadow-[7px_7px_0_#40164d] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[3px_3px_0_#40164d]"
              >
                Create my Bio Hub →
              </button>

            </form>


            {/* Login */}
            <p className="mt-8 text-center font-semibold">
              Already have a Bio Hub?{" "}

              <Link
                to="/login"
                className="font-black text-[#ff6047] underline"
              >
                Log in
              </Link>
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}