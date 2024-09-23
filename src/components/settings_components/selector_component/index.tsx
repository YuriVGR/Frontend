import { View, Text } from "react-native";
import { getColors } from "../../../styles/colors";
import { useTheme } from "../../../hooks/themeprovider";

export default function SelectorComponent() {
  const { styles } = useTheme();
  return (
    <View style={styles.selectorComponent}>
      <Text>SelectorComponent</Text>
    </View>
  );
}
