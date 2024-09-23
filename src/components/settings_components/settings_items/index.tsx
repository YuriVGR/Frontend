// React and React Native imports
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

// Navigation imports
import { useNavigation, NavigationProp } from "@react-navigation/native";

// Data imports
import { SettingsItem, RootStackParamList } from "../../../data/settings_data";

// Style imports
import { useTheme } from "../../../hooks/themeprovider";
import { getColors } from "../../../styles/colors";

// FontAwesome imports
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

// Component imports
import { Switch } from "react-native";
import { CounterComponent } from "../counter";

interface SettingsItemProps {
  item: SettingsItem;
  value?: boolean;
  onToggle?: (value: boolean) => void;
}

export default function SettingsItemComponent({
  item,
  value,
  onToggle,
}: SettingsItemProps) {
  const { styles } = useTheme();
  const colors = getColors();
  const renderLeftContent = (item: SettingsItem) => {
    if (item.leftIcon) {
      return (
        <FontAwesomeIcon
          icon={item.leftIcon}
          size={18}
          color={item.type === "danger" ? colors.primary : colors.textDark}
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
    if (item.type === "boolean") {
      return <Switch value={value} onValueChange={onToggle} />;
    }
    if (item.type === "counter") {
      return <CounterComponent value={item.value} />;
    }
  };

  const navigation = useNavigation<NavigationProp<never>>();

  const ItemWrapper: React.ElementType =
    item.type === "boolean" ||
    item.type === "counter" ||
    item.type === "selector"
      ? View
      : TouchableOpacity;

  const itemWrapperProps = () => {
    if (item.type === "boolean") {
      return {};
    }
    if (item.type === "default" && item.screen) {
      return {
        onPress: () => navigation.navigate(item.screen as never),
      };
    }
    return {};
  };

  return (
    <React.Fragment>
      <ItemWrapper style={styles.settingsItem} {...itemWrapperProps()}>
        <View style={styles.settingsItemLeft}>
          {renderLeftContent(item)}
          <Text
            style={item.type === "danger" ? styles.dangerText : styles.text}
          >
            {item.title}
          </Text>
        </View>
        {renderRightContent(item)}
      </ItemWrapper>
    </React.Fragment>
  );
}
