// React Imports
import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

// Data Imports
import {
  settingsData,
  SettingsItem,
  RootStackParamList,
} from "../data/settings_data";

// Navigation Imports
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

//FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

// Styles Imports
import { styles } from "../styles/styles";
import { colors } from "../styles/colors";

// Components
import { DropdownPicker } from "../components/picker";
import Switch from "../components/switch";
import Divider from "../components/divider";
import SettingsItemComponent from "../components/settings_item";

export default function Settings() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);

  const getItemStyle = (item: SettingsItem) => {
    if (item.type === "danger") {
      return { color: colors.primary };
    }
    return;
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
    if (item.type === "picker") {
      return (
        <DropdownPicker
          options={item.options}
          selectedValue={item.options[0].value}
          onValueChange={() => {}}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      );
    }
    if (item.type === "boolean") {
      return (
        <Switch
          value={false} // Replace with actual state value
          onValueChange={(val) => {}}
          onAdditionalPress={() => {
            console.log("Switch enabled");
          }}
          disabled={() => {
            console.log("Switch disabled");
          }}
        />
      );
    }
    return null;
  };

  return (
    <View style={[styles.container]}>
      <ScrollView style={[{ paddingHorizontal: 20 }]}>
        {/* Profile Header Section */}

        <View style={styles.profileHeader}>
          {/* Profile Picture Placeholder */}

          <View style={styles.picturePlacer}>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Picture Placeholder
            </Text>
          </View>
          {/* User Info and Logout Button */}

          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              flexGrow: 1,
            }}
          >
            <View>
              <Text style={styles.subTitle}>Logged in as</Text>
              <Text style={styles.title}>example@example.com</Text>
            </View>
            {/* Logout Button */}

            <View
              style={{
                justifyContent: "flex-end",
                flexDirection: "row",
                paddingRight: 10,
              }}
            >
              <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutButtonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Settings Section */}
        {settingsData.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.settingsContainer}>
            <View style={styles.settingsComponent}>
              {section.items.map((item, itemIndex) => {
                return <SettingsItemComponent item={item} key={itemIndex} />;
              })}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
