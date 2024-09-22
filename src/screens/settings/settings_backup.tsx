// React Native imports
import { View, Text, StyleSheet } from "react-native";

// Style imports
import { styles } from "../../styles/styles";
import { colors } from "../../styles/colors";

// Data imports
import { backupSettingsData } from "../../data/settings/settings_backup_data";
import { SettingsItem } from "../../data/settings_data";

// FontAwesome imports
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

// Component imports
import SettingsItemComponent from "../../components/settings_item";

export default function BackupSettings() {
  return (
    <View style={styles.container}>
      {backupSettingsData.map((section, index) => (
        <View key={index} style={styles.settingsContainer}>
          {section.items.map((item, index) => {
            return <SettingsItemComponent item={item} key={index} />;
          })}
        </View>
      ))}
      <View style={styles.settingsContainer}>
        <View style={styles.settingsComponent}>
          <Text>Backup List</Text>
          <View style={styles.settingsItem} />
        </View>
      </View>
    </View>
  );
}
