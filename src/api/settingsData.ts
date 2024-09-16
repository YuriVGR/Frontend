import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight } from "@fortawesome/pro-solid-svg-icons";
import { StyleProp, ViewStyle } from "react-native";

type SettingsItemType = "default" | "danger" | "picker" | "boolean";

interface BaseSettingsItem {
  type: SettingsItemType;
  title: string;
  icon?: IconDefinition;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

interface DefaultSettingsItem extends BaseSettingsItem {
  type: "default";
}

interface DangerSettingsItem extends BaseSettingsItem {
  type: "danger";
}

interface PickerSettingsItem extends BaseSettingsItem {
  type: "picker";
  options: string[];
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
        onPress: () => {},
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
      },
      {
        type: "default",
        title: "Theme Settings",
      },
      {
        type: "default",
        title: "Error Popups",
      },
      {
        type: "default",
        title: "Backups",
      },
    ],
  },
  {
    title: "Storage",
    items: [
      {
        type: "default",
        title: "Download Manager",
      },
      {
        type: "picker",
        title: "Image Cache Size",
        options: ["100MB", "200MB", "500MB", "1GB"],
      },
      {
        type: "danger",
        title: "Clear Image Cache",
      },
    ],
  },
];
