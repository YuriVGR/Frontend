import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

// Styles
import { isDarkTheme } from "../../styles/colors";
import { styles } from "../../styles/styles";
import { colors } from "../../styles/colors";

// FontAwesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// Data import
import { SettingsItem } from "../../data/settings_data";
import { themeSettingsData } from "../../data/settings/settings_theme_data";

// Components
import Switch from "../../components/switch";

export default function ThemeSettings() {
  const [theme, setTheme] = useState(isDarkTheme);
  const renderRightContent = (item: SettingsItem) => {
    if (item.type === "boolean") {
      return <Switch value={theme} onValueChange={setTheme} />;
    }
    if (item.type === "default" && item.rightIcon) {
      return <FontAwesomeIcon icon={item.rightIcon} />;
    }
  };

  const renderLeftContent = (item: SettingsItem) => {
    if (item.leftIcon) {
      return (
        <FontAwesomeIcon
          icon={item.leftIcon}
          size={18}
          color={item.type === "danger" ? item.leftIconColor : colors.textDark}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      {themeSettingsData.map((section, sectionIndex) => (
        <View style={styles.settingsContainer} key={sectionIndex}>
          <View style={styles.settingsComponent}>
            {section.items.map((item, itemIndex) => {
              const ItemWrapper: React.ElementType =
                item.type === "boolean" ? View : TouchableOpacity;

              const itemWrapperProps =
                item.type !== "boolean"
                  ? {
                      onPress: () => {
                        console.log(item.title);
                      },
                    }
                  : {};

              return (
                <React.Fragment key={itemIndex}>
                  <ItemWrapper
                    {...itemWrapperProps}
                    style={styles.settingsItem}
                  >
                    <View style={styles.settingsItemLeft}>
                      {renderLeftContent(item)}
                      <Text
                        style={
                          item.type === "danger"
                            ? styles.dangerText
                            : styles.text
                        }
                      >
                        {item.title}
                      </Text>
                    </View>
                    {renderRightContent(item)}
                  </ItemWrapper>
                </React.Fragment>
              );
            })}
          </View>
        </View>
      ))}
    </View>
  );
}
