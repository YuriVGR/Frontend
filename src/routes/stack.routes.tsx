import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabRoutes from "./tab.routes";
import GeneralSettings from "../screens/settings/general/general";
import ThemeSettings from "../screens/settings/general/theme";
import BackupSettings from "../screens/settings/general/backupsettings";
import DownloadManager from "../screens/settings/storage/downloadmanager";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabRoutes"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="GeneralSettings" component={GeneralSettings} />
      <Stack.Screen name="ThemeSettings" component={ThemeSettings} />
      <Stack.Screen name="BackupSettings" component={BackupSettings} />
      <Stack.Screen name="DownloadManager" component={DownloadManager} />
    </Stack.Navigator>
  );
}
