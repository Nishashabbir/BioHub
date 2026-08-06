import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#fff8e8] text-[#40164d]">

      {/* Decorative circles */}
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#ffd957]" />
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
          className="font-bold hover:opacity-60"
        >
          Back home
        </Link>

      </header>


      {/* Login area */}
      <main className="relative flex min-h-[calc(100vh-96px)] items-center justify-center px-6 py-16">

        <div className="relative z-10 w-full max-w-[500px]">

          {/* Small label */}
          <div className="mb-8 inline-block -rotate-2 rounded-full border-4 border-[#40164d] bg-[#f77fa5] px-6 py-3 font-black tracking-wide shadow-[6px_6px_0_#40164d]">
            WELCOME BACK
          </div>


          {/* Card */}
          <div className="rounded-[32px] border-4 border-[#40164d] bg-[#fff8e8] p-8 shadow-[12px_12px_0_#40164d] md:p-12">

            <h1 className="text-5xl font-black leading-[0.95] tracking-[-3px] md:text-6xl">
              Log in
              <br />
              <span className="text-[#ff6047]">
                to your hub.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed">
              Your links are waiting. Jump back in and keep
              your world connected.
            </p>


            {/* Form */}
            <form className="mt-10 space-y-6">

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


              <div>
                <div className="mb-2 flex items-center justify-between">

                  <label className="text-sm font-black uppercase tracking-wide">
                    Password
                  </label>

                  <a
                    href="#"
                    className="text-sm font-bold text-[#ff6047] hover:underline"
                  >
                    Forgot password?
                  </a>

                </div>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-2xl border-4 border-[#40164d] bg-white px-5 py-4 text-lg font-semibold text-[#40164d] outline-none placeholder:text-[#806087] focus:bg-[#fff0f5]"
                />
              </div>


              {/* Login button */}
              <button
                type="submit"
                className="w-full rounded-2xl border-4 border-[#40164d] bg-[#b7e82b] px-6 py-5 text-xl font-black text-[#40164d] shadow-[7px_7px_0_#40164d] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[3px_3px_0_#40164d]"
              >
                Log me in →
              </button>

            </form>


            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
              <div className="h-[3px] flex-1 bg-[#40164d]" />
              <span className="font-bold">
                OR
              </span>
              <div className="h-[3px] flex-1 bg-[#40164d]" />
            </div>


            {/* Google */}
            <button
              className="w-full rounded-2xl border-4 border-[#40164d] bg-[#ff6047] px-6 py-4 text-lg font-black text-white shadow-[7px_7px_0_#40164d] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[3px_3px_0_#40164d]"
            >
              Continue with Google
            </button>


            {/* Signup */}
            <p className="mt-8 text-center font-semibold">
              Don't have a Bio Hub yet?{" "}

              <Link
                to="/signup"
                className="font-black text-[#ff6047] underline"
              >
                Create one
              </Link>
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}