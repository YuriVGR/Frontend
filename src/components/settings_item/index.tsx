// React and React Native imports
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// Data imports
import { SettingsItem } from "../../data/settings_data";

// Style imports
import { styles } from "../../styles/styles";
import { colors } from "../../styles/colors";

// FontAwesome imports
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function SettingsItemComponent({ item }: { item: SettingsItem }) {
  const renderLeftContent = (item: SettingsItem) => {
    if (item.leftIcon) {
      return (
        <FontAwesomeIcon
          icon={item.leftIcon}
          size={18}
          color={item.type === "danger" ? "red" : colors.textDark}
        />
      );
    }
  };

  const renderRightContent = (item: SettingsItem) => {
    if (item.type === "default" && item.rightIcon) {
      return (
        <FontAwesomeIcon
          icon={item.rightIcon}
          size={18}
          color={colors.textDark}
        />
      );
    }
  };

  const ItemWrapper: React.ElementType =
    item.type === "danger" ? View : TouchableOpacity;

  const itemWrapperProps =
    item.type !== "boolean" ? { onPress: item.onPress } : {};

  return (
    <React.Fragment>
      <ItemWrapper style={styles.settingsItem} {...itemWrapperProps}>
        <View style={styles.settingsItemLeft}>
          {renderLeftContent(item)}
          <Text style={styles.text}>{item.title}</Text>
        </View>
        {renderRightContent(item)}
      </ItemWrapper>
    </React.Fragment>
  );
}
