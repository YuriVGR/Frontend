import { SettingsSection } from "../settings_data";
import { faDownload, faUpload } from "@fortawesome/pro-solid-svg-icons";

export const backupSettingsData: SettingsSection[] = [
  {
    title: "Backup Settings",
    items: [
      {
        type: "default",
        title: "Create Backup",
        onPress: () => {},
        leftIcon: faDownload,
      },
      {
        type: "default",
        title: "Restore Backup",
        onPress: () => {},
        leftIcon: faUpload,
      },
    ]
  }
]