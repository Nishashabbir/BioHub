export default function Marquee() {
  const items = [
    "CREATORS",
    "MUSICIANS",
    "PODCASTERS",
    "SHOPS",
    "COACHES",
    "ARTISTS",
    "WRITERS",
    "STUDIOS",
  ];
  const row = [...items, ...items];

  return (
    <div className="overflow-hidden border-y-4 border-ink bg-plum py-4">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-2xl font-extrabold tracking-tight text-cream "
          >
            {item}
            <span className="ml-10 text-lime">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}