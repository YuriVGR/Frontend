import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../hooks/themeprovider";

export default function GeneralSettings() {
  const { styles } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>General Settings</Text>
    </View>
  );
}

