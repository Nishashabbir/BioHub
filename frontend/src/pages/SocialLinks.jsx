import { useState } from "react";
import { Link } from "react-router-dom";

export default function SocialLinks() {
  const [links, setLinks] = useState([
    {
      id: 1,
      title: "Instagram",
      url: "https://instagram.com/nisha",
      icon: "◎",
    },
    {
      id: 2,
      title: "GitHub",
      url: "https://github.com/nisha",
      icon: "◈",
    },
    {
      id: 3,
      title: "LinkedIn",
      url: "https://linkedin.com/in/nisha",
      icon: "in",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  // -------------------------
  // ADD / EDIT
  // -------------------------

  const openAddForm = () => {
    setEditingId(null);
    setTitle("");
    setUrl("");
    setShowForm(true);
  };

  const openEditForm = (link) => {
    setEditingId(link.id);
    setTitle(link.title);
    setUrl(link.url);
    setShowForm(true);
  };

  const saveLink = (e) => {
    e.preventDefault();

    if (!title.trim() || !url.trim()) return;

    if (editingId) {
      setLinks(
        links.map((link) =>
          link.id === editingId
            ? {
                ...link,
                title,
                url,
              }
            : link
        )
      );
    } else {
      setLinks([
        ...links,
        {
          id: Date.now(),
          title,
          url,
          icon: "↗",
        },
      ]);
    }

    setTitle("");
    setUrl("");
    setEditingId(null);
    setShowForm(false);
  };

  // -------------------------
  // DELETE
  // -------------------------

  const deleteLink = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  // -------------------------
  // REORDER
  // -------------------------

  const moveUp = (index) => {
    if (index === 0) return;

    const updatedLinks = [...links];

    [updatedLinks[index - 1], updatedLinks[index]] = [
      updatedLinks[index],
      updatedLinks[index - 1],
    ];

    setLinks(updatedLinks);
  };

  const moveDown = (index) => {
    if (index === links.length - 1) return;

    const updatedLinks = [...links];

    [updatedLinks[index], updatedLinks[index + 1]] = [
      updatedLinks[index + 1],
      updatedLinks[index],
    ];

    setLinks(updatedLinks);
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

        <div className="mx-auto max-w-6xl">

          {/* Heading */}

          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <div className="mb-5 inline-block -rotate-1 rounded-full border-4 border-[#40164d] bg-[#b7e82b] px-5 py-2 font-black shadow-[5px_5px_0_#40164d]">
                YOUR LINKS
              </div>

              <h1 className="text-5xl font-black tracking-[-3px] md:text-7xl">
                Make your links
                <br />
                <span className="text-[#ff6047]">
                  do the talking.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed">
                Add everything you want people to find.
                Reorder them, update them, or remove them whenever you want.
              </p>

            </div>


            {/* Add button */}

            <button
              onClick={openAddForm}
              className="shrink-0 rounded-2xl border-4 border-[#40164d] bg-[#ff6047] px-7 py-4 text-lg font-black text-white shadow-[7px_7px_0_#40164d] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[3px_3px_0_#40164d]"
            >
              + Add Link
            </button>

          </div>


          {/* ================= ADD / EDIT FORM ================= */}

          {showForm && (
            <div className="mb-8 rounded-[28px] border-4 border-[#40164d] bg-[#ffd01a] p-7 shadow-[9px_9px_0_#40164d] md:p-9">

              <div className="mb-6 flex items-center justify-between">

                <h2 className="text-3xl font-black">
                  {editingId ? "Edit link" : "Add a new link"}
                </h2>

                <button
                  onClick={() => setShowForm(false)}
                  className="text-2xl font-black"
                >
                  ×
                </button>

              </div>


              <form
                onSubmit={saveLink}
                className="grid gap-5 md:grid-cols-[1fr_1.5fr_auto]"
              >

                <div>

                  <label className="mb-2 block text-sm font-black uppercase tracking-wide">
                    Link title
                  </label>

                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Instagram"
                    className="w-full rounded-2xl border-4 border-[#40164d] bg-[#fff8e8] px-5 py-4 font-bold outline-none focus:bg-white"
                  />

                </div>


                <div>

                  <label className="mb-2 block text-sm font-black uppercase tracking-wide">
                    URL
                  </label>

                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://instagram.com/yourname"
                    className="w-full rounded-2xl border-4 border-[#40164d] bg-[#fff8e8] px-5 py-4 font-bold outline-none focus:bg-white"
                  />

                </div>


                <button
                  type="submit"
                  className="self-end rounded-2xl border-4 border-[#40164d] bg-[#b7e82b] px-7 py-4 font-black shadow-[6px_6px_0_#40164d] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_#40164d]"
                >
                  {editingId ? "Save changes" : "Add link"}
                </button>

              </form>

            </div>
          )}


          {/* ================= LINKS ================= */}

          <section className="rounded-[28px] border-4 border-[#40164d] bg-white p-6 shadow-[9px_9px_0_#40164d] md:p-8">

            <div className="mb-7 flex items-center justify-between">

              <div>

                <h2 className="text-3xl font-black">
                  Your links
                </h2>

                <p className="mt-1 font-semibold opacity-60">
                  {links.length} {links.length === 1 ? "link" : "links"} published
                </p>

              </div>

              <span className="hidden rounded-full border-4 border-[#40164d] bg-[#f77fa5] px-4 py-2 text-sm font-black md:block">
                DRAG ORDER
              </span>

            </div>


            {links.length === 0 ? (

              <div className="rounded-2xl border-4 border-dashed border-[#40164d] p-12 text-center">

                <div className="text-5xl">
                  ＋
                </div>

                <h3 className="mt-4 text-2xl font-black">
                  No links yet.
                </h3>

                <p className="mt-2 font-semibold">
                  Add your first link and start building your page.
                </p>

                <button
                  onClick={openAddForm}
                  className="mt-6 rounded-xl border-4 border-[#40164d] bg-[#b7e82b] px-6 py-3 font-black shadow-[5px_5px_0_#40164d]"
                >
                  Add your first link
                </button>

              </div>

            ) : (

              <div className="space-y-4">

                {links.map((link, index) => (

                  <div
                    key={link.id}
                    className="flex flex-col gap-5 rounded-2xl border-4 border-[#40164d] bg-[#fff8e8] p-5 shadow-[5px_5px_0_#40164d] md:flex-row md:items-center"
                  >

                    {/* Order number */}

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-4 border-[#40164d] bg-[#f77fa5] font-black">
                      {index + 1}
                    </div>


                    {/* Icon */}

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-4 border-[#40164d] bg-[#b7e82b] text-xl font-black">
                      {link.icon}
                    </div>


                    {/* Link information */}

                    <div className="min-w-0 flex-1">

                      <h3 className="text-xl font-black">
                        {link.title}
                      </h3>

                      <p className="mt-1 truncate text-sm font-semibold opacity-60">
                        {link.url}
                      </p>

                    </div>


                    {/* Reorder */}

                    <div className="flex gap-2">

                      <button
                        onClick={() => moveUp(index)}
                        disabled={index === 0}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border-4 border-[#40164d] bg-white font-black disabled:cursor-not-allowed disabled:opacity-30"
                        title="Move up"
                      >
                        ↑
                      </button>

                      <button
                        onClick={() => moveDown(index)}
                        disabled={index === links.length - 1}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border-4 border-[#40164d] bg-white font-black disabled:cursor-not-allowed disabled:opacity-30"
                        title="Move down"
                      >
                        ↓
                      </button>

                    </div>


                    {/* Edit */}

                    <button
                      onClick={() => openEditForm(link)}
                      className="rounded-lg border-4 border-[#40164d] bg-[#62dcb4] px-5 py-2 font-black"
                    >
                      Edit
                    </button>


                    {/* Delete */}

                    <button
                      onClick={() => deleteLink(link.id)}
                      className="rounded-lg border-4 border-[#40164d] bg-[#ff6047] px-5 py-2 font-black text-white"
                    >
                      Delete
                    </button>

                  </div>

                ))}

              </div>

            )}

          </section>


          {/* ================= TIP ================= */}

          <div className="mt-9 flex gap-4 rounded-[24px] border-4 border-[#40164d] bg-[#62dcb4] p-6 shadow-[7px_7px_0_#40164d]">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-4 border-[#40164d] bg-[#fff8e8] text-2xl font-black">
              ✦
            </div>

            <div>

              <h3 className="font-black">
                Put your best link first.
              </h3>

              <p className="mt-1 font-semibold">
                Visitors usually click the first few links they see.
                Use the arrows to put your most important links at the top.
              </p>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}