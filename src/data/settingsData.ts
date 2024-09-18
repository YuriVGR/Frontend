import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { StyleProp, ViewStyle } from "react-native";

type SettingsItemType = "default" | "danger" | "picker" | "boolean";

export type RootStackParamList = {
  GeneralSettings: undefined;
  ThemeSettings: undefined;
  BackupSettings: undefined;
  DownloadManager: undefined;
  ReaderSettings: undefined;
};

interface BaseSettingsItem {
  type: SettingsItemType;
  title: string;
  icon?: IconDefinition;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

interface DefaultSettingsItem extends BaseSettingsItem {
  type: "default";
  screen: string;
}

interface DangerSettingsItem extends BaseSettingsItem {
  type: "danger";
}

interface PickerSettingsItem extends BaseSettingsItem {
  type: "picker";
  options: PickerOption[];
}

interface PickerOption {
  label: string;
  value: string;
}

interface BooleanSettingsItem extends BaseSettingsItem {
  type: "boolean";
}

export type SettingsItem =
  | DefaultSettingsItem
  | DangerSettingsItem
  | PickerSettingsItem
  | BooleanSettingsItem;

interface SettingsSection {
  title: string;
  items: SettingsItem[];
}

export const settingsData: SettingsSection[] = [
  {
    title: "History",
    items: [
      {
        type: "boolean",
        title: "Hide Read History",
      },
      {
        type: "danger",
        title: "Clear Search History",
        onPress: () => {},
      },
      {
        type: "danger",
        title: "Clear Read History",
        onPress: () => {},
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        type: "default",
        title: "General Settings",
        screen: "GeneralSettings",
      },
      {
        type: "default",
        title: "Theme Settings",
        screen: "ThemeSettings",
      },
      {
        type: "default",
        title: "Reader Settings",
        screen: "ReaderSettings",
      },
      {
        type: "default",
        title: "Backup",
        screen: "BackupSettings",
      },
    ],
  },
  {
    title: "Storage",
    items: [
      {
        type: "default",
        title: "Download Manager",
        screen: "DownloadManager",
      },
      {
        type: "picker",
        title: "Image Cache Size",
        options: [
          { label: "300MB", value: "300MB" },
          { label: "500MB", value: "500MB" },
          { label: "1GB", value: "1GB" },
          { label: "3GB", value: "3GB" },
          { label: "5GB", value: "5GB" },
          { label: "10GB", value: "10GB" },
        ],
      },
      {
        type: "danger",
        title: "Clear Image Cache",
      },
    ],
  },
];
