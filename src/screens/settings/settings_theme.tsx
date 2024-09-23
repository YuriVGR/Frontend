import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

// Styles
import { useTheme } from "../../hooks/themeprovider";

// Data import
import { themeSettingsData } from "../../data/settings/settings_theme_data";

// Components
import SettingsItemComponent from "../../components/settings_components/settings_items";
import Divider from "../../components/divider";

export default function ThemeSettings() {
  const { styles, toggleTheme, isDarkTheme } = useTheme();

  const handleThemeChange = () => {
    toggleTheme();
  };

  return (
    <View style={styles.container}>
      <View style={[styles.settingsContainer, { padding: 10 }]}>
        {themeSettingsData.map((section, sectionIndex) => (
          <View style={styles.settingsComponent} key={sectionIndex}>
            {section.items.map((item, itemIndex) => {
              if (item.title === "Dark Mode") {
                return (
                  <React.Fragment key={itemIndex}>
                    <SettingsItemComponent
                      key={itemIndex}
                      item={item}
                      value={isDarkTheme}
                      onToggle={handleThemeChange}
                    />
                    {itemIndex !== section.items.length - 1 && <Divider />}
                  </React.Fragment>
                );
              }
              return (
                <React.Fragment key={itemIndex}>
                  <SettingsItemComponent key={itemIndex} item={item} />
                  {itemIndex !== section.items.length - 1 && <Divider />}
                </React.Fragment>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
}
