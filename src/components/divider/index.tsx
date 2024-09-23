import { View } from "react-native";
import { useTheme } from "../../hooks/themeprovider";

export default function Divider() {
  const { styles } = useTheme();
  return <View style={styles.divider} />;
}
