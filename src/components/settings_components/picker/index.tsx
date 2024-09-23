import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { getColors } from "../../../styles/colors";

import { useTheme } from "../../../hooks/themeprovider";
import { Ionicons } from "@expo/vector-icons";

interface PickerProps {
  options: any[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

interface ItemProps {
  label: string;
  onPress: () => void;
}

const colors = getColors();
const { styles } = useTheme();

const DropdownPickerItem = ({ label, onPress }: ItemProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.pickerModalItem}>
      <View>
        <Text style={{ fontWeight: "400", color: colors.text }}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const DropdownPicker = ({
  options,
  selectedValue,
  onValueChange,
  modalVisible,
  setModalVisible,
}: PickerProps) => {
  const [selected, setSelected] = useState(options[0].value);

  const modalPosition = { top: 10, left: 10 };

  return (
    <View>
      <View style={styles.pickerButton}>
        <Text style={styles.pickerButtonText}>{selected}</Text>
        <View style={{ flexDirection: "column" }}>
          <Ionicons
            name="chevron-up"
            color={colors.textDark}
            size={18}
            style={{ marginBottom: -2.5 }}
          />
          <Ionicons
            name="chevron-down"
            color={colors.textDark}
            size={18}
            style={{ marginTop: -2.5 }}
          />
        </View>
      </View>

      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.pickerModalContainer}>
            <View
              style={[
                styles.pickerOptionsContainer,
                { backgroundColor: colors.background2 },
              ]}
            >
              {options.map((option, itemIndex) => (
                <React.Fragment key={itemIndex}>
                  <DropdownPickerItem
                    key={itemIndex}
                    label={option.label}
                    onPress={() => {
                      setSelected(option.value);
                      onValueChange(option.value);
                      setModalVisible(false);
                    }}
                  />
                  {itemIndex < options.length - 1 && (
                    <View
                      style={[
                        styles.pickerModalDivider,
                        { backgroundColor: colors.divider },
                      ]}
                    />
                  )}
                </React.Fragment>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};
