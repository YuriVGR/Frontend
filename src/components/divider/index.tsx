import { View } from "react-native";
import { useTheme } from "../../hooks/themeprovider";

export default function Divider() {
  const { componentStyles } = useTheme();
  return <View style={componentStyles.divider} />;
}
