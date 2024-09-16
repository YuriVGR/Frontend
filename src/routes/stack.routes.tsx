import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabRoutes from "./tab.routes";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="roue"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
