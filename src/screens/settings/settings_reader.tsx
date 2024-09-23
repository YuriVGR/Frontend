import { View, Text } from "react-native";
import { useTheme } from "../../hooks/themeprovider";

export default function ReaderSettings() {
  const { styles } = useTheme();
  return (

    <View style={styles.container}>
      <Text style={styles.title}>Reader Settings</Text>
    </View>
  );

}

