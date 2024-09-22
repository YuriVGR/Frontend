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
  leftIcon?: string;
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
        leftIcon: "cog-outline",
      },

      {
        type: "default",
        title: "Appearance Settings",
        screen: "ThemeSettings",
        leftIcon: "color-palette-outline",
      },
      {
        type: "default",
        title: "Reader Settings",
        screen: "ReaderSettings",
        leftIcon: "book-outline",
      },
      {
        type: "default",
        title: "Backup Settings",
        screen: "BackupSettings",
        leftIcon: "cloud-upload-outline",
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
        leftIcon: "download-outline",
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
        leftIcon: "folder-open-outline",
      },
      {
        type: "danger",
        title: "Clear Image Cache",
        onPress: () => {},
        leftIcon: "trash-bin-outline",
        leftIconColor: "red",
      },

      {
        type: "danger",
        title: "Clear Read History",
        onPress: () => {},
        leftIcon: "trash-outline",
        leftIconColor: "red",
      },
    ],
  },
  {
    title: "Information",
    items: [
      {
        type: "default",
        title: "About",
        screen: "About",
        leftIcon: "information-circle-outline",
      },
      {
        type: "default",
        title: "Contact",
        screen: "Contact",
        leftIcon: "mail-outline",
      },
      {
        type: "default",
        title: "Developer",
        screen: "Developer",
        leftIcon: "bug-outline",
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
        leftIcon: "moon-outline",
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
