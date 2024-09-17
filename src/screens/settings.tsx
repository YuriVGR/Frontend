import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { settingsData, SettingsItem } from "../api/settingsData";
import { faAngleRight } from "@fortawesome/pro-solid-svg-icons";
import { DropdownPicker } from "../components/picker";
import colors from "../styles/colors";
import Switch from "../components/switch";

export default function Settings() {
  const getItemStyle = (item: SettingsItem) => {
    if (item.type === "danger") {
      return styles.dangerText;
    }
    return;
  };

  const renderRightContent = (item: SettingsItem) => {
    if (item.type === "default") {
      return (
        <FontAwesomeIcon
          icon={faAngleRight}
          color={colors.light.textLight}
          size={16}
        />
      );
    }

    if (item.type === "picker") {
      return (
        <DropdownPicker
          options={item.options}
          selectedValue={item.options[0].value}
          onValueChange={() => {}}
        />
      );
    }
    if (item.type === "boolean") {
      return <Switch />;
    }
    return null;
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
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
              <View style={styles.logoutButton}>
                <Text style={styles.logoutButtonText}>Logout</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Settings Section */}

        {settingsData.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.settingsContainer}>
            <Text style={styles.settingsTitle}>{section.title}</Text>
            <View style={styles.settingsComponent}>
              {section.items.map((item, itemIndex) => (
                <View key={itemIndex} style={styles.settingsItem}>
                  <Text style={[styles.settingsItemText, getItemStyle(item)]}>
                    {item.title}
                  </Text>
                  {renderRightContent(item)}
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 20,
  },

  // Profile Header

  profileHeader: {
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 16,
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.light.textDark,
  },
  subTitle: {
    fontSize: 15,
    color: colors.light.textLight,
    fontWeight: "400",
  },
  picturePlacer: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutButton: {
    backgroundColor: "#00000010",
    padding: 5,
    borderRadius: 32,
    alignSelf: "flex-start",
    minWidth: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  logoutButtonText: {
    color: "red",
    fontWeight: "500",
  },

  // Settings

  settingsContainer: {
    width: "100%",
    height: "auto",
    flexGrow: 1,
    borderRadius: 16,
    gap: 10,
    paddingBottom: 20,
  },
  settingsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  settingsComponent: {
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 16,
    gap: 10,
  },
  settingsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  settingsItemText: {
    fontSize: 16,
  },
  dangerText: {
    color: "red",
  },
});
