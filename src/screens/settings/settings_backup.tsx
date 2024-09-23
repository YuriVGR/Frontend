// React Native imports
import { View, Text, StyleSheet } from "react-native";

// Style imports
import { useTheme } from "../../hooks/themeprovider";

// Data imports
import { backupSettingsData } from "../../data/settings/settings_backup_data";
import { SettingsItem } from "../../data/settings_data";

// FontAwesome imports
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

// Component imports
import SettingsItemComponent from "../../components/settings_components/settings_items";

export default function BackupSettings() {
  const { styles } = useTheme();
  return (
    <View style={styles.container}>
      <View style={[styles.settingsContainer, { padding: 10 }]}>
        {backupSettingsData.map((section, index) => (
          <View key={index} style={styles.settingsComponent}>
            {section.items.map((item, index) => {
              return <SettingsItemComponent item={item} key={index} />;
            })}
          </View>
        ))}
        <View style={styles.settingsComponent}>
          <SettingsItemComponent item={backupSettingsData[0].items[0]} />
        </View>
      </View>
    </View>
  );
}
