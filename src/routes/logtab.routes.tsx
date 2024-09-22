import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Updates from "../screens/logs/updates";
import History from "../screens/logs/history";
import Logs from "../screens/logs";
import { colors } from "../styles/colors";

const Tab = createMaterialTopTabNavigator();


export default function LogTabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "500",
        },
        tabBarStyle: {
          backgroundColor: colors.background2,
          padding: 5,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textLight,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
      }}
    >
      <Tab.Screen name="Updates" component={Updates} />
      <Tab.Screen name="My Logs" component={Logs} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
}
