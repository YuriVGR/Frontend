import { View, Text } from "react-native";
import { useTheme } from "../../hooks/themeprovider";

export default function Updates() {
  const { styles } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Updates Screen</Text>
    </View>
  );
}
