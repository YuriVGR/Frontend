import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { themeSettingsData } from "../../data/settingsData";
import colors from "../../styles/colors";

export default function ThemeSettings() {
  return (
    <View style={styles.container}>
      <View style={styles.settingsContainer}>
        {themeSettingsData.map((section, index) => (
          <View key={index}>
            <Text style={styles.title}>{section.title}</Text>
            {section.items.map((item, index) => (
              <View key={index}>
                <Text style={styles.text}>{item.title}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light.background,
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
    color: colors.light.textDark,
  },
  text: {
    fontSize: 16,
    color: colors.light.textDark,
  },
});
