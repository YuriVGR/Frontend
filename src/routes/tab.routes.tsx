import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { colors } from "../styles/colors";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faSearch,
  faCircleExclamation,
  faCog,
} from "@fortawesome/pro-regular-svg-icons";

import Home from "../screens/home";
import Search from "../screens/search";
import Logs from "../screens/logs";
import Settings from "../screens/settings";
import LogTabRoutes from "./logtab.routes";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: IconDefinition = faHome;
          if (route.name === "Search") {
            iconName = faSearch;
          } else if (route.name === "Logs") {
            iconName = faCircleExclamation;
          } else if (route.name === "Settings") {
            iconName = faCog;
          }
          return <FontAwesomeIcon icon={iconName} color={color} size={size} />;
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "500",
        },
        tabBarStyle: {
          backgroundColor: colors.background2,
          borderColor: "red",
          padding: 5,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textLight,
        headerStyle: {
          backgroundColor: colors.background2,
          shadowColor: colors.textLight,
        },
        headerTintColor: colors.textDark,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen
        name="Logs"
        component={LogTabRoutes}
        options={{ headerStyle: { backgroundColor: colors.background2,  } }}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
