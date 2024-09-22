const lightColors = {
  primary: "#4ade80",
  secondary: "#0891b2",
  background: "#f8f8f8",
  background2: "#ffffff",
  text: "#626262",
  textLight: "#828282",
  textDark: "#000000",
  divider: "#00000010",
};

const darkColors: typeof lightColors = {
  primary: "#22c55e",
  secondary: "#06b6d4",
  background: "#111111",
  background2: "#111111",
  text: "#d1d5db",
  textLight: "#626262",
  textDark: "#ffffff",
  divider: "#ffffff10",
};

export let isDarkTheme = false;

export const colors = isDarkTheme ? darkColors : lightColors;
