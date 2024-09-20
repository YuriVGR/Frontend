import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export default function GeneralSettings() {
  return (
    <View style={styles.container}>
      <Text>General Settings</Text>
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
