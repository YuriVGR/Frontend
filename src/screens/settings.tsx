// React Imports
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// Data Imports
import {
  settingsData,
  SettingsItem,
  RootStackParamList,
} from "../data/settingsData";

// Navigation Imports
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { DropdownPicker } from "../components/picker";

// FontAwesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngleRight,
  faEyeSlash,
  IconDefinition,
} from "@fortawesome/pro-regular-svg-icons";

// Local Imports
import colors from "../styles/colors";
import Switch from "../components/switch";

export default function Settings() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const getItemStyle = (item: SettingsItem) => {
    if (item.type === "danger") {
      return { color: "red" };
    }
    return;
  };

  const renderLeftContent = (item: SettingsItem) => {
    if (item.leftIcon) {
      return (
        <FontAwesomeIcon
          icon={item.leftIcon as IconDefinition}
          color={item.leftIconColor || colors.light.textDark}
          size={18}
        />
      );
    }
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
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
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
              <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutButtonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Settings Section */}
        <View style={styles.settingsItem}>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faEyeSlash}
              color={colors.light.textDark}
              size={18}
            />
            <Text style={styles.text}>Hide Read History</Text>
          </View>
          <Switch />
        </View>
        {settingsData.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.settingsContainer}>
            <Text
              style={[styles.title, { marginLeft: 10, marginVertical: 10 }]}
            >
              {section.title}
            </Text>
            <View style={styles.settingsComponent}>
              {section.items.map((item, itemIndex) => {
                const ItemWrapper: React.ElementType =
                  item.type === "boolean" ? View : TouchableOpacity;

                const itemWrapperProps =
                  item.type !== "boolean"
                    ? {
                        onPress: () => {
                          if (item.type === "danger") {
                            console.log(item.title);
                          } else if (item.type === "picker") {
                            setModalVisible(true);
                            console.log(item.title);
                          } else if (item.type === "default" && item.screen) {
                            navigation.navigate(
                              item.screen as keyof RootStackParamList
                            );
                            console.log(item.title);
                          }
                        },
                      }
                    : {};

                return (
                  <React.Fragment key={itemIndex}>
                    <ItemWrapper
                      style={styles.settingsItem}
                      {...itemWrapperProps}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 10,
                          alignItems: "center",
                        }}
                      >
                        {renderLeftContent(item)}
                        <Text style={[styles.text, getItemStyle(item)]}>
                          {item.title}
                        </Text>
                      </View>
                      {renderRightContent(item)}
                    </ItemWrapper>

                    {itemIndex < section.items.length - 1 && (
                      <View style={styles.divider} />
                    )}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: colors.light.background,
  },

  // Profile Header

  profileHeader: {
    width: "100%",
    padding: 10,
    paddingVertical: 20,
    borderRadius: 16,
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#00000010",
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
  },
  settingsComponent: {
    width: "100%",
    borderRadius: 16,
  },
  settingsItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    height: 50,
  },

  // General

  title: {
    fontSize: 18,
    fontWeight: "bold",

    color: colors.light.textDark,
  },
  subTitle: {
    fontSize: 15,
    color: colors.light.textLight,
    fontWeight: "400",
  },
  text: {
    fontSize: 16,
    color: colors.light.textDark,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#00000010",
    marginLeft: 15,
  },
});
