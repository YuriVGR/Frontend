import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const baseStyles = {
  simple: {
    container: {
      flex: 1,
      backgroundColor: colors.primary,
      color: colors.text,
    },

    subContainer: {
      backgroundColor: colors.text,
      color: colors.primary,
    },

    // Text styles
    title: {
      color: colors.text,
      fontSize: 20,
      fontWeight: "700",
    },
    subtitle: {
      color: colors.text,
      fontSize: 16,
      fontWeight: "600",
    },
    text: {
      color: colors.text,
      fontSize: 14,
      fontWeight: "400",
    },
  },
};
