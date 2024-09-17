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

interface PickerProps {
  options: any[];
  selectedValue: string;
  onValueChange: (value: string) => void;
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
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const DropdownPicker = ({
  options,
  selectedValue,
  onValueChange,
}: PickerProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(options[0].value);

  const modalPosition = {top: 10, left: 10};

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{selected}</Text>
        <FontAwesomeIcon icon={modalVisible ? faAngleUp : faAngleDown} />
      </TouchableOpacity>
      <Modal visible={modalVisible} transparent={true}>
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.optionsContainer}>
            {options.map((option, index) => (
              <DropdownPickerItem
                key={index}
                label={option.label}
                value={option.value}
                onPress={() => {
                  setSelected(option.value);
                  onValueChange(option.value);
                  setModalVisible(false);
                }}
              />
            ))}
          </View>
        </TouchableOpacity>
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
  },
  optionsContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    flexDirection: "column",
    width: "40%",
  },
  // Object

  item: {
    padding: 10,
  },

  // Button
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    gap: 5
  },
  buttonText: {
    fontSize: 16,
  },
});
