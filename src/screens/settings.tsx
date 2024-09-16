import React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { settingsData, SettingsItem } from "../api/settingsData";
import { faAngleRight } from "@fortawesome/pro-solid-svg-icons";

export default function SettingsScreen() {
  const getItemStyle = (item: SettingsItem) => {
    if (item.type === "danger") {
      return styles.dangerText;
    }
    return {};
  };

  const renderRightContent = (item: SettingsItem) => {
    if (item.type === "default") {
      return <FontAwesomeIcon icon={faAngleRight} color="#888" size={16} />;
    }
    if (item.type === "picker") {
      return <Text style={styles.pickerText}>[PICKER]</Text>;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <View style={styles.picturePlacer}>
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
          >
            Picture Placeholder
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexGrow: 1,
          }}
        >
          <View>
            <Text style={styles.subTitle}>Logged in as</Text>
            <Text style={styles.title}>example@example.com</Text>
          </View>
          <View style={{ justifyContent: "flex-end" }}>
            <View style={styles.logoutButton}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Settings */}
      <ScrollView
        style={styles.settingsContainer}
        showsVerticalScrollIndicator={false}
      >
        {settingsData.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.settingsComponent}>
            <Text style={styles.settingsTitle}>{section.title}</Text>
            {section.items.map((item, itemIndex) => (
              <View key={itemIndex} style={styles.settingsItem}>
                <Text style={[styles.settingsItemText, getItemStyle(item)]}>
                  {item.title}
                </Text>
                {renderRightContent(item)}
              </View>
            ))}
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
    paddingTop: 10,
    gap: 20,
  },

  // Profile Header

  profileHeader: {
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
    gap: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 15,
    color: "gray",
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
    fontWeight: "600",
  },

  // Settings

  settingsContainer: {
    width: "100%",
    flexGrow: 1,
    borderRadius: 16,
    gap: 10,
  },
  settingsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
  },
  settingsComponent: {
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 16,
    gap: 10,
    marginBottom: 10,
  },
  settingsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  settingsItemText: {
    fontSize: 16,
  },
  dangerText: {
    color: "red",
  },
  pickerText: {
    color: "#888",
    fontSize: 14,
  },
});
