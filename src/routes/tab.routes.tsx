import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Styles
import { colors } from "../styles/colors";

// Screens
import Home from "../screens/home";
import Search from "../screens/search";
import Settings from "../screens/settings";
import LogTabRoutes from "./logtab.routes";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName = focused ? "home" : "home-outline";
          if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "Logs") {
            iconName = focused ? "albums" : "albums-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return (
            <Ionicons
              name={iconName as any}
              color={focused ? colors.primary : colors.text}
              size={size}
            />
          );
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "500",
        },
        tabBarStyle: {
          backgroundColor: colors.background,
          borderColor: "red",
          padding: 5,
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
        options={{ headerStyle: { backgroundColor: colors.background2 } }}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
