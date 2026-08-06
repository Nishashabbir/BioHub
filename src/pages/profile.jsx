import { Link } from "react-router-dom";

export default function CreateProfile() {
  return (
    <div className="min-h-screen bg-[#fff8e8] text-[#40164d]">

      {/* ================= NAVBAR ================= */}

      <header className="flex h-24 items-center justify-between border-b-4 border-[#40164d] px-6 md:px-12">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border-4 border-[#40164d] bg-[#ff6047] text-3xl font-black shadow-[6px_6px_0_#40164d]">
            B
          </div>

          <span className="text-2xl font-black">
            Bio Hub
          </span>

        </div>

        <Link
          to="/dashboard"
          className="font-black transition-opacity hover:opacity-60"
        >
          ← Dashboard
        </Link>

      </header>


      {/* ================= MAIN ================= */}

      <main className="px-6 py-12 md:px-12">

        <div className="mx-auto max-w-6xl">

          {/* ================= HEADING ================= */}

          <div className="mb-12">

            <div className="mb-6 inline-block -rotate-2 rounded-full border-4 border-[#40164d] bg-[#f77fa5] px-5 py-2 font-black shadow-[5px_5px_0_#40164d]">
              STEP 01 · YOUR PROFILE
            </div>

            <h1 className="text-5xl font-black tracking-[-3px] md:text-7xl">
              Tell the internet
              <br />
              <span className="text-[#ff6047]">
                who you are.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed">
              This is the face of your Bio Hub. Add the details
              people should know when they land on your page.
            </p>

          </div>


          {/* ================= PROFILE FORM ================= */}

          <form className="grid gap-8 lg:grid-cols-[320px_1fr]">


            {/* ================= LEFT PROFILE CARD ================= */}

            <div className="h-fit rounded-[28px] border-4 border-[#40164d] bg-[#b7e82b] p-7 shadow-[9px_9px_0_#40164d]">

              <p className="mb-6 text-sm font-black uppercase tracking-wider">
                Profile picture
              </p>


              {/* Image */}
              <div className="mx-auto flex h-52 w-52 items-center justify-center rounded-full border-4 border-[#40164d] bg-[#fff8e8] shadow-[7px_7px_0_#40164d]">

                <div className="text-center">

                  <div className="text-5xl">
                    +
                  </div>

                  <p className="mt-2 text-sm font-black">
                    Add photo
                  </p>

                </div>

              </div>


              <input
                type="file"
                accept="image/*"
                className="mt-8 w-full cursor-pointer rounded-xl border-4 border-[#40164d] bg-[#fff8e8] p-3 text-sm font-bold"
              />


              <p className="mt-4 text-sm font-semibold leading-relaxed">
                Use a clear photo that represents you.
                JPG, PNG or WEBP. Max 5MB.
              </p>

            </div>


            {/* ================= RIGHT FORM ================= */}

            <div className="rounded-[28px] border-4 border-[#40164d] bg-white p-7 shadow-[9px_9px_0_#40164d] md:p-10">

              <div className="grid gap-7 md:grid-cols-2">


                {/* Display Name */}

                <div>

                  <label className="mb-2 block text-sm font-black uppercase tracking-wide">
                    Display Name
                  </label>

                  <input
                    type="text"
                    placeholder="Nisha Shabbir"
                    className="w-full rounded-2xl border-4 border-[#40164d] bg-[#fff8e8] px-5 py-4 text-lg font-bold outline-none transition focus:bg-[#fff0f5]"
                  />

                  <p className="mt-2 text-sm font-semibold opacity-70">
                    The name people will see on your page.
                  </p>

                </div>


                {/* Username */}

                <div>

                  <label className="mb-2 block text-sm font-black uppercase tracking-wide">
                    Username
                  </label>

                  <div className="flex">

                    <span className="flex items-center rounded-l-2xl border-4 border-r-0 border-[#40164d] bg-[#f77fa5] px-4 font-black">
                      @
                    </span>

                    <input
                      type="text"
                      placeholder="nisha"
                      className="min-w-0 flex-1 rounded-r-2xl border-4 border-[#40164d] bg-[#fff8e8] px-4 py-4 text-lg font-bold outline-none focus:bg-[#fff0f5]"
                    />

                  </div>

                  <p className="mt-2 text-sm font-semibold opacity-70">
                    Your unique Bio Hub username.
                  </p>

                </div>


                {/* Bio */}

                <div className="md:col-span-2">

                  <div className="mb-2 flex items-center justify-between">

                    <label className="text-sm font-black uppercase tracking-wide">
                      Bio
                    </label>

                    <span className="text-sm font-bold opacity-60">
                      0 / 160
                    </span>

                  </div>

                  <textarea
                    rows="5"
                    maxLength="160"
                    placeholder="Developer, creator & curious human building things on the internet."
                    className="w-full resize-none rounded-2xl border-4 border-[#40164d] bg-[#fff8e8] px-5 py-4 text-lg font-semibold leading-relaxed outline-none focus:bg-[#fff0f5]"
                  />

                </div>


                {/* Profession */}

                <div>

                  <label className="mb-2 block text-sm font-black uppercase tracking-wide">
                    Profession
                  </label>

                  <input
                    type="text"
                    placeholder="Web Developer"
                    className="w-full rounded-2xl border-4 border-[#40164d] bg-[#fff8e8] px-5 py-4 text-lg font-bold outline-none focus:bg-[#fff0f5]"
                  />

                </div>


                {/* Contact Details */}

                <div>

                  <label className="mb-2 block text-sm font-black uppercase tracking-wide">
                    Contact Email
                  </label>

                  <input
                    type="email"
                    placeholder="hello@example.com"
                    className="w-full rounded-2xl border-4 border-[#40164d] bg-[#fff8e8] px-5 py-4 text-lg font-bold outline-none focus:bg-[#fff0f5]"
                  />

                </div>


              </div>


              {/* ================= CONTACT PHONE ================= */}

              <div className="mt-7">

                <label className="mb-2 block text-sm font-black uppercase tracking-wide">
                  Phone <span className="opacity-50">(optional)</span>
                </label>

                <input
                  type="tel"
                  placeholder="+92 300 1234567"
                  className="w-full rounded-2xl border-4 border-[#40164d] bg-[#fff8e8] px-5 py-4 text-lg font-bold outline-none focus:bg-[#fff0f5]"
                />

              </div>


              {/* ================= SAVE ================= */}

              <div className="mt-10 flex flex-col-reverse justify-between gap-5 border-t-4 border-[#40164d] pt-8 sm:flex-row sm:items-center">

                <Link
                  to="/dashboard"
                  className="text-center font-black underline underline-offset-4"
                >
                  Cancel
                </Link>

                <button
                  type="submit"
                  className="rounded-2xl border-4 border-[#40164d] bg-[#ff6047] px-8 py-4 text-lg font-black text-white shadow-[7px_7px_0_#40164d] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[3px_3px_0_#40164d]"
                >
                  Save Profile →
                </button>

              </div>

            </div>

          </form>


          {/* ================= PREVIEW TIP ================= */}

          <div className="mt-10 flex flex-col gap-4 rounded-[24px] border-4 border-[#40164d] bg-[#ffd01a] p-6 shadow-[7px_7px_0_#40164d] md:flex-row md:items-center">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-4 border-[#40164d] bg-[#fff8e8] text-2xl font-black">
              ✦
            </div>

            <div>
              <h3 className="font-black">
                Make it yours.
              </h3>

              <p className="font-semibold">
                You can change your profile information anytime from your dashboard.
              </p>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}