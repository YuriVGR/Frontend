import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
// Styles
import { getColors } from "../styles/colors";
import { useTheme } from "../hooks/themeprovider";

// FontAwesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faMagnifyingGlass,
  faBook,
  faCog,
} from "@fortawesome/pro-solid-svg-icons";

// Screens
import Home from "../screens/home";
import Search from "../screens/search";
import Settings from "../screens/settings";
import LogTabRoutes from "./logtab.routes";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const { styles } = useTheme();
  const [colors, setColors] = useState(getColors());

  useEffect(() => {
    setColors(getColors());
  }, [styles]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: IconDefinition = faHome;
          if (route.name === "Search") {
            iconName = faMagnifyingGlass;
          } else if (route.name === "Logs") {
            iconName = faBook;
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
          backgroundColor: colors.background,
          padding: 8,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
        headerStyle: {
          backgroundColor: colors.background,

          shadowColor: colors.textLight,
          height: 100,
        },
        headerTintColor: colors.textDark,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen
        name="Logs"
        component={LogTabRoutes}
        options={{
          headerStyle: {
            backgroundColor: colors.background2,
            shadowColor: "transparent",
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarStyle: {
            padding: 8,
            borderTopColor: "transparent",
            backgroundColor: colors.background,
          },
        }}
      />
    </Tab.Navigator>
  );
}
