// React Imports
import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

// Data Imports
import {
  settingsData,
  SettingsItem,
  RootStackParamList,
} from "../data/settingsData";

// Navigation Imports
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Ionicons } from "@expo/vector-icons";

// Styles Imports
import { styles } from "../styles/styles";
import { colors } from "../styles/colors";

// Components
import { DropdownPicker } from "../components/picker";
import Switch from "../components/switch";
import Divider from "../components/divider";

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
        <Ionicons
          name={item.leftIcon as any}
          color={item.type === "danger" ? colors.primary : colors.textDark}
          size={18}
        />
      );
    }
  };

  const renderRightContent = (item: SettingsItem) => {
    if (item.type === "default") {
      return (
        <Ionicons
          name="chevron-forward"
          color={colors.textDark}
          size={18}
          style={{ fontWeight: "bold" }}
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
      return;
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
        <View style={styles.settingsComponent}>
          <View style={styles.settingsItem}>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
              }}
            >
              <Ionicons
                name="eye-off-outline"
                color={colors.textDark}
                size={18}
              />
              <Text style={styles.text}>Hide Read History</Text>
            </View>

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
          </View>
        </View>
        {settingsData.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.settingsContainer}>
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
                        <Text
                          style={[
                            item.type === "danger"
                              ? styles.dangerText
                              : styles.text,
                          ]}
                        >
                          {item.title}
                        </Text>
                      </View>
                      {renderRightContent(item)}
                    </ItemWrapper>

                    {itemIndex < section.items.length - 1 && <Divider />}
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
