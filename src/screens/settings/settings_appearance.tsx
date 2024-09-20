import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { themeSettingsData, SettingsItem } from "../../data/settingsData";

import { colors, isDarkTheme } from "../../styles/colors";
import Switch from "../../components/switch";

export default function ThemeSettings() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  settingsContainer: {
    flex: 1,
    padding: 15,
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    height: 50,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.textDark,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textDark,
  },
  text: {
    fontSize: 16,
    color: colors.textDark,
  },
});
