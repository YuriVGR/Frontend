import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabRoutes from "./tab.routes";
import GeneralSettings from "../screens/settings/settings_general";
import ThemeSettings from "../screens/settings/settings_appearance";
import BackupSettings from "../screens/settings/settings_backup";
import ReaderSettings from "../screens/settings/settings_reader";
import DownloadManager from "../screens/settings/storage_downloadmanager";
import { colors } from "../styles/colors";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: colors.textDark,
      }}
    >
      <Stack.Screen
        name="Return"
        component={TabRoutes}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GeneralSettings"
        component={GeneralSettings}
        options={{ title: "General Settings" }}
      />
      <Stack.Screen
        name="ThemeSettings"
        component={ThemeSettings}
        options={{ title: "Appearance Settings" }}
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
