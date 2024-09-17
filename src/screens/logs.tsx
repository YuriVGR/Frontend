import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../styles/colors";

export default function Update() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Logs Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  header: {
    padding: 10,
    backgroundColor: colors.light.background,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
