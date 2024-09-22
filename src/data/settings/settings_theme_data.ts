import { SettingsSection } from "../settings_data";
import { faMoon, faDownload, faUpload } from "@fortawesome/pro-solid-svg-icons";

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
  {
    title: "Custom Theme Options",
    items: [
      {
        type: "default",
        title: "Import Custom Theme",
        onPress: () => {},
        leftIcon: faDownload,
      },
      {
        type: "default",
        title: "Export Custom Theme",
        onPress: () => {},
        leftIcon: faUpload,
      },
    ],
  },
];
