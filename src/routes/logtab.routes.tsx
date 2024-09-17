import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Updates from "../screens/updates/updates";
import History from "../screens/updates/history";
import Logs from "../screens/logs";

const Tab = createMaterialTopTabNavigator();

export default function LogTabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Updates" component={Updates} />
      <Tab.Screen name="Logs" component={Logs} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
}

