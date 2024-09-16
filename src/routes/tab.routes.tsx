import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faSearch,
  faCircleExclamation,
  faCog,
} from "@fortawesome/pro-regular-svg-icons";
import {
  HomeStackScreen,
  SearchStackScreen,
  UpdateStackScreen,
  SettingsStackScreen,
} from "./stack.routes";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faHome} size={24} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faSearch} size={24} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      />
      <Tab.Screen
        name="Updates"
        component={UpdateStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon
              icon={faCircleExclamation}
              size={24}
              color={color}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faCog} size={24} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
      />
    </Tab.Navigator>
  );
}
