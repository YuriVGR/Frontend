import { View, Text } from "react-native";
import { useTheme } from "../../hooks/themeprovider";

export default function DownloadManager() {
  const { styles } = useTheme();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Download Manager</Text>
    </View>
  );
}
