import React, { useState } from "react";
import { View, Text } from "react-native";

// Styles
import { isDarkTheme } from "../../styles/colors";
import { styles } from "../../styles/styles";

// Components
import Switch from "../../components/switch";

export default function ThemeSettings() {
  const [theme, setTheme] = useState(isDarkTheme);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Dark Mode ?</Text>
        <Switch
          value={theme}
        />
      </View>
    </View>
  );
}
