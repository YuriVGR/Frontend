import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { StyleProp, ViewStyle } from "react-native";
import {
  faGear,
  faPalette,
  faBook,
  faCloudArrowUp,
  faDownload,
  faTrashCan,
  faImageSlash,
  faFolderOpen,
  faMoon,
} from "@fortawesome/pro-regular-svg-icons";

// Settings Screens

export type RootStackParamList = {
  GeneralSettings: undefined;
  ThemeSettings: undefined;
  BackupSettings: undefined;
  DownloadManager: undefined;
  ReaderSettings: undefined;
};

// Settings Item Types

interface BaseSettingsItem {
  type: SettingsItemType;
  title: string;
  leftIcon?: IconDefinition;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  leftIconColor?: string;
}

type SettingsItemType =
  | "default"
  | "danger"
  | "picker"
  | "boolean"
  | "selector";

// Settings Items

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

interface SelectorSettingsItem extends BaseSettingsItem {
  type: "selector";
  options: SelectorOption[];
}

interface PickerOption {
  label: string;
  value: string;
}

interface SelectorOption {
  label: string;
  value: string;
  subOptions: SubSelection[];
}

interface SubSelection {
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
  | BooleanSettingsItem
  | SelectorSettingsItem;

interface SettingsSection {
  title: string;
  items: SettingsItem[];
}

// Settings Data

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
        title: "Appearance Settings",
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
        leftIcon: faFolderOpen,
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

// Theme Settings Data

export const themeSettingsData: SettingsSection[] = [
  {
    title: "General Settings",
    items: [
      {
        type: "boolean",
        title: "Dark Mode",
        onPress: () => {},
        leftIcon: faMoon,
      },
      {
        type: "selector",
        title: "Theme Selector",
        options: [
          {
            label: "Light",
            value: "#fff",
            subOptions: [
              { label: "Minty", value: "#00ffd1" },
              { label: "Sunset", value: "#ff4d4d" },
              { label: "Purple", value: "#ff4dff" },
              { label: "Blue", value: "#4d4dff" },
            ],
          },
          {
            label: "Dark",
            value: "#1f2937",
            subOptions: [
              { label: "Minty", value: "#00ffd1" },
              { label: "Sunset", value: "#ff4d4d" },
              { label: "Purple", value: "#ff4dff" },
              { label: "Blue", value: "#4d4dff" },
            ],
          },
        ],
      },
      
    ],
  },
];
