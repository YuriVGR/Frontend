import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { logsData } from "../data/logs_data";
import { useTheme } from "../hooks/themeprovider";

export default function Update() {
  const { styles } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logs Screen</Text>
    </View>
  );
}