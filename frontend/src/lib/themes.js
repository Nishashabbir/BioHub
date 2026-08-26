export const themes = [
  {
    id: "sunset",
    name: "Sunset Pop",
    description: "Bold, playful and full of personality.",
    bg: "#fff8e8",
    card: "#f77fa5",
    accent: "#b7e82b",
    text: "#40164d",
    button: "#ff6047",
    style: "rounded",
  },
  {
    id: "midnight",
    name: "Midnight",
    description: "Dark, cinematic and confident.",
    bg: "#111111",
    card: "#252525",
    accent: "#c8ff00",
    text: "#ffffff",
    button: "#ff4d8d",
    style: "dark",
  },
  {
    id: "editorial",
    name: "Editorial",
    description: "Elegant typography with a magazine feel.",
    bg: "#f4f0e8",
    card: "#ffffff",
    accent: "#111111",
    text: "#111111",
    button: "#d95f39",
    style: "editorial",
  },
  {
    id: "bloom",
    name: "Soft Bloom",
    description: "Soft, warm and beautifully minimal.",
    bg: "#fff4f7",
    card: "#f8dce7",
    accent: "#d8a7ba",
    text: "#49333d",
    button: "#c47b99",
    style: "soft",
  },
  {
    id: "neo",
    name: "Neo Green",
    description: "Fresh, energetic and modern.",
    bg: "#eaffd0",
    card: "#8ee34f",
    accent: "#173b25",
    text: "#173b25",
    button: "#173b25",
    style: "neo",
  },
  {
    id: "mono",
    name: "Minimal Mono",
    description: "Simple, sharp and distraction-free.",
    bg: "#f5f5f5",
    card: "#ffffff",
    accent: "#111111",
    text: "#111111",
    button: "#111111",
    style: "mono",
  },
];

export function getSavedThemeId() {
  return localStorage.getItem("biohub-theme") || "sunset";
}

export function getTheme(id = getSavedThemeId()) {
  return themes.find((theme) => theme.id === id) || themes[0];
}

export function readableOn(hex) {
  const c = hex.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16) / 255;
  const g = parseInt(c.slice(2, 4), 16) / 255;
  const b = parseInt(c.slice(4, 6), 16) / 255;
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return lum > 0.55 ? "#1b1623" : "#ffffff";
}
