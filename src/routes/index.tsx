import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./stack.routes";


export default function Routes() {
  return (
    <NavigationContainer >
      <StackNavigator/>
    </NavigationContainer>
  );
}