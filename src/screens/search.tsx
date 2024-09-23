import { View, Text } from "react-native";
import { useTheme } from "../hooks/themeprovider";

export default function Search() {
  const { styles } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Screen</Text>
    </View>
  );
}
