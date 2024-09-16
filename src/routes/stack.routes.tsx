import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home";
import SearchScreen from "../screens/search";
import UpdateScreen from "../screens/updates";
import SettingsScreen from "../screens/settings";

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const UpdateStack = createStackNavigator();
const SettingsStack = createStackNavigator();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

export function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} />
    </SearchStack.Navigator>
  );
}

export function UpdateStackScreen() {
  return (
    <UpdateStack.Navigator>
      <UpdateStack.Screen name="Update" component={UpdateScreen} />
    </UpdateStack.Navigator>
  );
}

export function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}