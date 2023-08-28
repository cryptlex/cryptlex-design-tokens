const COLOR_PALETTES = ["primary", "accent", "warn", "success"] as const;
type ColorPalette = (typeof COLOR_PALETTES)[number];

const COLOR_SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
type ColorShade = (typeof COLOR_SHADES)[number];

type Hues = Record<ColorPalette, number>;
type Lightness = Record<ColorShade, number>;
type Chroma = Record<ColorShade, number>;

// https://atmos.style/playground
// Hues for use with the OKLCH color system
const hues = {
  primary: 240,
  accent: 290,
  warn: 24,
  success: 152,
} satisfies Hues;

const lightness = {
  "50": 30.98,
  "100": 37,
  "200": 43.45,
  "300": 51.62,
  "400": 58.75,
  "500": 65.8,
  "600": 68.82,
  "700": 77.46,
  "800": 82.66,
  "900": 88.86,
} satisfies Lightness;

const chroma = {
  "50": 0.048,
  "100": 0.064,
  "200": 0.072,
  "300": 0.084,
  "400": 0.102,
  "500": 0.108,
  "600": 0.084,
  "700": 0.058,
  "800": 0.048,
  "900": 0.04,
} satisfies Chroma;

const oklch: Record<string, { value: string }> = {};

for (const palette of COLOR_PALETTES) {
  for (const shade of COLOR_SHADES) {
    const h = hues[palette];
    const c = chroma[shade];
    const l = lightness[shade];

    const key = `${palette}-${shade}` as const;
    oklch[key] = { value: `oklch(${h} ${c} ${l})` };
  }
}

module.exports = {
  ...oklch,
};
