import { View, Text, StyleSheet } from "react-native";
import { colors } from "../styles/colors";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
});
