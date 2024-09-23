// React Imports
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

// Styles Imports
import { useTheme } from "../../../hooks/themeprovider";

export default function SettingsItemHeader() {
  const { styles } = useTheme();
  return (
    <View style={styles.profileHeader}>
      <View style={styles.picturePlacer}>
        <Text
          style={[
            styles.text,
            { textAlign: "center", fontWeight: "400", fontSize: 12 },
          ]}
        >
          Profile Placerholder
        </Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          gap: 10,
          flexGrow: 1,
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={styles.subTitle}>Logged in as</Text>
          <Text style={styles.title}>example@email.com</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-between",
            paddingRight: 10,
          }}
        >
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
