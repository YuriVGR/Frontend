import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabRoutes from "./tab.routes";

// Settings Screens
import GeneralSettings from "../screens/settings/settings_general";
import ThemeSettings from "../screens/settings/settings_appearance";
import BackupSettings from "../screens/settings/settings_backup";
import ReaderSettings from "../screens/settings/settings_reader";
import DownloadManager from "../screens/settings/storage_downloadmanager";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabRoutes"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GeneralSettings"
        component={GeneralSettings}
        options={{ title: "General Settings" }}
      />
      <Stack.Screen
        name="ThemeSettings"
        component={ThemeSettings}
        options={{ title: "Theme Settings" }}
      />
      <Stack.Screen
        name="BackupSettings"
        component={BackupSettings}
        options={{ title: "Backup Settings" }}
      />
      <Stack.Screen
        name="DownloadManager"
        component={DownloadManager}
        options={{ title: "Download Manager" }}
      />
      <Stack.Screen
        name="ReaderSettings"
        component={ReaderSettings}
        options={{ title: "Reader Settings" }}
      />
    </Stack.Navigator>
  );
}
