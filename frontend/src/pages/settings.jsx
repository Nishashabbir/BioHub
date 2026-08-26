import { useState } from "react";
import { Link } from "react-router-dom";

export default function Settings() {
  const [email, setEmail] = useState("nisha@example.com");
  const [notifications, setNotifications] = useState(true);
  const [publicProfile, setPublicProfile] = useState(true);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [saved, setSaved] = useState(false);

  const saveChanges = (e) => {
    e.preventDefault();

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

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

        <div className="mx-auto max-w-5xl">

          {/* ================= HEADING ================= */}

          <div className="mb-10">

            <div className="mb-5 inline-block -rotate-1 rounded-full border-4 border-[#40164d] bg-[#b7e82b] px-5 py-2 font-black shadow-[5px_5px_0_#40164d]">
              YOUR ACCOUNT
            </div>

            <h1 className="text-5xl font-black tracking-[-3px] md:text-7xl">
              Settings.
            </h1>

            <p className="mt-4 max-w-2xl text-lg font-semibold">
              Manage your account, security, notifications and privacy
              from one place.
            </p>

          </div>


          <form onSubmit={saveChanges} className="space-y-8">


            {/* ================= ACCOUNT INFORMATION ================= */}

            <section className="rounded-[28px] border-4 border-[#40164d] bg-white p-7 shadow-[8px_8px_0_#40164d] md:p-9">

              <div className="mb-7">

                <h2 className="text-3xl font-black">
                  Account Information
                </h2>

                <p className="mt-1 font-semibold opacity-60">
                  Your basic account details.
                </p>

              </div>


              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-2 block text-sm font-black uppercase tracking-wide">
                    Display Name
                  </label>

                  <input
                    type="text"
                    defaultValue="Nisha Shabbir"
                    className="w-full rounded-2xl border-4 border-[#40164d] bg-[#fff8e8] px-5 py-4 text-lg font-bold outline-none focus:bg-[#fff0f5]"
                  />

                </div>


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
                      defaultValue="nisha"
                      className="min-w-0 flex-1 rounded-r-2xl border-4 border-[#40164d] bg-[#fff8e8] px-4 py-4 text-lg font-bold outline-none focus:bg-[#fff0f5]"
                    />

                  </div>

                </div>

              </div>

            </section>


            {/* ================= EMAIL ================= */}

            <section className="rounded-[28px] border-4 border-[#40164d] bg-[#62dcb4] p-7 shadow-[8px_8px_0_#40164d] md:p-9">

              <div className="mb-7">

                <h2 className="text-3xl font-black">
                  Email
                </h2>

                <p className="mt-1 font-semibold">
                  Your email is used for login and important account
                  notifications.
                </p>

              </div>


              <div className="max-w-2xl">

                <label className="mb-2 block text-sm font-black uppercase tracking-wide">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border-4 border-[#40164d] bg-[#fff8e8] px-5 py-4 text-lg font-bold outline-none focus:bg-white"
                />

              </div>

            </section>


            {/* ================= CHANGE PASSWORD ================= */}

            <section className="rounded-[28px] border-4 border-[#40164d] bg-[#ffd01a] p-7 shadow-[8px_8px_0_#40164d] md:p-9">

              <div className="mb-7">

                <h2 className="text-3xl font-black">
                  Change Password
                </h2>

                <p className="mt-1 font-semibold">
                  Keep your account protected with a strong password.
                </p>

              </div>


              <div className="grid gap-6 md:grid-cols-3">

                <div>

                  <label className="mb-2 block text-sm font-black uppercase tracking-wide">
                    Current Password
                  </label>

                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full rounded-2xl border-4 border-[#40164d] bg-[#fff8e8] px-4 py-4 font-bold outline-none focus:bg-white"
                  />

                </div>


                <div>

                  <label className="mb-2 block text-sm font-black uppercase tracking-wide">
                    New Password
                  </label>

                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full rounded-2xl border-4 border-[#40164d] bg-[#fff8e8] px-4 py-4 font-bold outline-none focus:bg-white"
                  />

                </div>


                <div>

                  <label className="mb-2 block text-sm font-black uppercase tracking-wide">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full rounded-2xl border-4 border-[#40164d] bg-[#fff8e8] px-4 py-4 font-bold outline-none focus:bg-white"
                  />

                </div>

              </div>


              <button
                type="button"
                className="mt-7 rounded-xl border-4 border-[#40164d] bg-[#40164d] px-6 py-3 font-black text-white shadow-[5px_5px_0_#ff6047]"
              >
                Update Password
              </button>

            </section>


            {/* ================= NOTIFICATIONS ================= */}

            <section className="rounded-[28px] border-4 border-[#40164d] bg-white p-7 shadow-[8px_8px_0_#40164d] md:p-9">

              <div className="mb-7">

                <h2 className="text-3xl font-black">
                  Notifications
                </h2>

                <p className="mt-1 font-semibold opacity-60">
                  Decide what kind of updates you want to receive.
                </p>

              </div>


              <div className="flex items-center justify-between gap-6 rounded-2xl border-4 border-[#40164d] bg-[#fff8e8] p-5">

                <div>

                  <h3 className="font-black">
                    Email notifications
                  </h3>

                  <p className="mt-1 text-sm font-semibold opacity-60">
                    Receive updates, tips and important account alerts.
                  </p>

                </div>


                <button
                  type="button"
                  onClick={() => setNotifications(!notifications)}
                  className={`relative h-10 w-20 shrink-0 rounded-full border-4 border-[#40164d] ${
                    notifications
                      ? "bg-[#b7e82b]"
                      : "bg-[#f77fa5]"
                  }`}
                >

                  <span
                    className={`absolute top-1 h-6 w-6 rounded-full border-2 border-[#40164d] bg-white transition-all ${
                      notifications
                        ? "left-10"
                        : "left-1"
                    }`}
                  />

                </button>

              </div>

            </section>


            {/* ================= PRIVACY ================= */}

            <section className="rounded-[28px] border-4 border-[#40164d] bg-[#f77fa5] p-7 shadow-[8px_8px_0_#40164d] md:p-9">

              <div className="mb-7">

                <h2 className="text-3xl font-black">
                  Privacy
                </h2>

                <p className="mt-1 font-semibold">
                  Control how people can access your Bio Hub.
                </p>

              </div>


              <div className="flex items-center justify-between gap-6 rounded-2xl border-4 border-[#40164d] bg-[#fff8e8] p-5">

                <div>

                  <h3 className="font-black">
                    Public profile
                  </h3>

                  <p className="mt-1 text-sm font-semibold opacity-60">
                    Allow anyone with your link to view your Bio Hub.
                  </p>

                </div>


                <button
                  type="button"
                  onClick={() => setPublicProfile(!publicProfile)}
                  className={`relative h-10 w-20 shrink-0 rounded-full border-4 border-[#40164d] ${
                    publicProfile
                      ? "bg-[#b7e82b]"
                      : "bg-[#f77fa5]"
                  }`}
                >

                  <span
                    className={`absolute top-1 h-6 w-6 rounded-full border-2 border-[#40164d] bg-white transition-all ${
                      publicProfile
                        ? "left-10"
                        : "left-1"
                    }`}
                  />

                </button>

              </div>

            </section>


            {/* ================= SAVE ================= */}

            <div className="flex flex-col items-center justify-between gap-5 rounded-[28px] border-4 border-[#40164d] bg-[#b7e82b] p-7 shadow-[8px_8px_0_#40164d] sm:flex-row">

              <div>

                <h3 className="text-2xl font-black">
                  Save your changes
                </h3>

                <p className="font-semibold">
                  Your settings will be applied to your account.
                </p>

              </div>


              <button
                type="submit"
                className="rounded-2xl border-4 border-[#40164d] bg-[#ff6047] px-8 py-4 text-lg font-black text-white shadow-[6px_6px_0_#40164d] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#40164d]"
              >
                {saved ? "Saved ✓" : "Save Changes →"}
              </button>

            </div>


            {/* ================= DELETE ACCOUNT ================= */}

            <section className="rounded-[28px] border-4 border-[#40164d] bg-[#40164d] p-7 text-[#fff8e8] shadow-[8px_8px_0_#ff6047] md:p-9">

              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

                <div>

                  <div className="mb-2 inline-block rounded-full border-2 border-[#ff6047] px-3 py-1 text-xs font-black tracking-wider text-[#ff6047]">
                    DANGER ZONE
                  </div>

                  <h2 className="text-3xl font-black">
                    Delete Account
                  </h2>

                  <p className="mt-2 max-w-xl font-semibold opacity-70">
                    Permanently delete your account, profile, links and
                    associated data. This action cannot be undone.
                  </p>

                </div>


                <button
                  type="button"
                  className="shrink-0 rounded-xl border-4 border-[#ff6047] bg-transparent px-6 py-3 font-black text-[#ff6047] transition hover:bg-[#ff6047] hover:text-white"
                >
                  Delete Account
                </button>

              </div>

            </section>

          </form>

        </div>

      </main>

    </div>
  );
}