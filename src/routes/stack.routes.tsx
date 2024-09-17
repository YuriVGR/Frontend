import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabRoutes from "./tab.routes";
import LogTabRoutes from "./logtab.routes";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabRoutes"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="LogTabs" component={TabRoutes}/>
    </Stack.Navigator>
  );
}
