const lightColors = {
  primary: "#4ade80",
  secondary: "#0891b2",
  background: "#ffffff",
  background2: "#f9f9f9",
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


export const isDarkTheme = false;

export const colors: typeof lightColors = {
  primary: isDarkTheme ? lightColors.primary : darkColors.primary,
  secondary: isDarkTheme ? lightColors.secondary : darkColors.secondary,
  background: isDarkTheme ? lightColors.background : darkColors.background,
  background2: isDarkTheme ? lightColors.background2 : darkColors.background2,
  text: isDarkTheme ? lightColors.text : darkColors.text,
  textLight: isDarkTheme ? lightColors.textLight : darkColors.textLight,
  textDark: isDarkTheme ? lightColors.textDark : darkColors.textDark,
  divider: isDarkTheme ? lightColors.divider : darkColors.divider,
};
