import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../hooks/themeprovider";

export default function Home() {
  const { styles } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
}
