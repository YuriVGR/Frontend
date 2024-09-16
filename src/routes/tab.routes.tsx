import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faSearch,
  faCircleExclamation,
  faCog,
} from "@fortawesome/pro-regular-svg-icons";

import Home from "../screens/home";
import Search from "../screens/search";
import Update from "../screens/updates";
import Settings from "../screens/settings";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: IconDefinition = faHome;
          if (route.name === "Search") {
            iconName = faSearch;
          } else if (route.name === "Update") {
            iconName = faCircleExclamation;
          } else if (route.name === "Settings") {
            iconName = faCog;
          }
          return <FontAwesomeIcon icon={iconName} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Update" component={Update} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
