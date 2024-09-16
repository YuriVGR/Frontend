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
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

export function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
    </SearchStack.Navigator>
  );
}

export function UpdateStackScreen() {
  return (
    <UpdateStack.Navigator>
      <UpdateStack.Screen name="UpdateScreen" component={UpdateScreen} />
    </UpdateStack.Navigator>
  );
}

export function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}