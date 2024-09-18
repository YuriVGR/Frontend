import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { StyleProp, ViewStyle } from "react-native";
import {
  faGear,
  faPalette,
  faBook,
  faCloudArrowUp,
  faDownload,
  faTrashCan,
  faImageSlash
} from "@fortawesome/pro-regular-svg-icons";

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
  leftIcon?: IconDefinition;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  leftIconColor?: string;
}

interface DefaultSettingsItem extends BaseSettingsItem {
  type: "default";
  screen: string;
  rightIcon?: IconDefinition;
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
    title: "Settings",
    items: [
      {
        type: "default",
        title: "General Settings",
        screen: "GeneralSettings",
        leftIcon: faGear,
      },
      {
        type: "default",
        title: "Theme Settings",
        screen: "ThemeSettings",
        leftIcon: faPalette,
      },
      {
        type: "default",
        title: "Reader Settings",
        screen: "ReaderSettings",
        leftIcon: faBook,
      },
      {
        type: "default",
        title: "Backup Settings",
        screen: "BackupSettings",
        leftIcon: faCloudArrowUp,
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
        leftIcon: faDownload,
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
        onPress: () => {},
        leftIcon: faDownload,
      },
      {
        type: "danger",
        title: "Clear Image Cache",
        onPress: () => {},
        leftIcon: faImageSlash,
        leftIconColor: "red",
      },
      {
        type: "danger",
        title: "Clear Read History",
        onPress: () => {},
        leftIcon: faTrashCan,
        leftIconColor: "red",
      },
    ],
  },
];
