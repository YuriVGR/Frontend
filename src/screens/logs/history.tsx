import { View, Text } from "react-native";
import { useTheme } from "../../hooks/themeprovider";

export default function History() {
  const { styles } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>History Screen</Text>
    </View>
  );
}