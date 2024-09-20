import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export default function ReaderSettings() {
  return (
    <View style={styles.container}>
      <Text>Reader Settings</Text>
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
});
