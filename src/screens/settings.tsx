// React Imports
import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

// Data Imports
import {
  settingsData,
  SettingsItem,
  RootStackParamList,
} from "../data/settings_data";

// Styles Imports
import { useTheme } from "../hooks/themeprovider";

// Components
import Divider from "../components/divider";
import SettingsItemComponent from "../components/settings_components/settings_items";
import SettingsHeader from "../components/settings_components/settings_header";

export default function Settings() {
  const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { styles } = useTheme();
  return (
    <View style={[styles.container]}>
      <ScrollView
        style={{ width: "100%", paddingHorizontal: 10 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header Section */}

        <SettingsHeader />
        {/* Settings Section */}
        {settingsData.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.settingsContainer}>
            <View style={styles.settingsComponent}>
              {section.items.map((item, itemIndex) => {
                return (
                  <React.Fragment key={itemIndex}>
                    <SettingsItemComponent
                      item={item}
                      value={isSwitchEnabled}
                      onToggle={setIsSwitchEnabled}
                    />
                    {itemIndex !== section.items.length - 1 && <Divider />}
                  </React.Fragment>
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
