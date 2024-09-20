import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/pro-solid-svg-icons";
import { colors } from "../../styles/colors";

interface PickerProps {
  options: any[];
  selectedValue: string;
  onValueChange: (value: string) => void;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

interface ItemProps {
  label: string[];
  value: string[];
  onPress: () => void;
}

const DropdownPickerItem = ({ label, onPress }: ItemProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
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
      <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
        <Text style={styles.buttonText}>{selected}</Text>
        <View style={{ flexDirection: "column" }}>
          <FontAwesomeIcon
            icon={faAngleUp}
            style={{ marginBottom: -2.5 }}
            color={colors.text}
          />
          <FontAwesomeIcon
            icon={faAngleDown}
            style={{ marginTop: -2.5 }}
            color={colors.text}
          />
        </View>
      </View>
      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.optionsContainer}>
              {options.map((option, itemIndex) => (
                <React.Fragment key={itemIndex}>
                  <DropdownPickerItem
                    key={itemIndex}
                    label={option.label}
                    value={option.value}
                    onPress={() => {
                      setSelected(option.value);
                      onValueChange(option.value);
                      setModalVisible(false);
                    }}
                  />

                  {itemIndex < options.length - 1 && (
                    <View style={styles.divider} />
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

const styles = StyleSheet.create({
  // Modal

  modalContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
  },
  optionsContainer: {
    backgroundColor: colors.background2,
    borderRadius: 10,
    flexDirection: "column",

    width: "50%",
  },
  // Object

  item: {
    padding: 15,
    paddingHorizontal: 15,
    justifyContent: "center",
  },
  divider: {
    height: 1,
    width: "90%",
    backgroundColor: colors.divider,
    alignSelf: "center",
  },

  // Button
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    gap: 5,
  },
  buttonText: {
    fontSize: 16,
    color: colors.text,
  },
});
