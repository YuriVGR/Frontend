export const themedColors = {
  mint: "#6FD86F", // Mint Green
  sunset: "#FD5E53", // Sunset Orange
  emerald: "#50C878", // Emerald Green
  picton: "#45B1E8",
};

let color: keyof typeof themedColors = "mint";

export let isDarkThemeGlobal: boolean = true;

export const setTheme = (isDark: boolean) => {
  isDarkThemeGlobal = isDark;
};

export const getColors = () => {
  const currentTheme = themedColors[color];

  const lightColors = {
    primary: currentTheme,
    secondary: "#0891b2",
    background: "#f8f8f8",
    background2: "#ffffff",
    text: "#626262",
    textLight: "#828282",
    textDark: "#000000",
    divider: "#00000020",
  };

  const darkColors: typeof lightColors = {
    primary: currentTheme,
    secondary: "#06b6d4",
    background: "#111111",
    background2: "#222222",
    text: "#d1d5db",
    textLight: "#828282",
    textDark: "#ffffff",
    divider: "#ffffff20",
  };

  return isDarkThemeGlobal ? darkColors : lightColors;
};
