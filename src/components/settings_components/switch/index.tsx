import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Animated,
  LayoutChangeEvent,
} from "react-native";
import { useEffect, useRef } from "react";
import { useTheme } from "../../../hooks/themeprovider";


interface SwitchProps {
  onValueChange?: (value: boolean) => void;
  value: boolean;
  customPress?: () => void;
  disabledPress?: () => void;
}

export default function Switch({
  onValueChange,
  value,
  customPress,
  disabledPress,
}: SwitchProps) {
  const { styles } = useTheme();

  const containerWidth = 50;
  const toggleAnim = useRef(new Animated.Value(value ? 1 : 0)).current;

  const toggleSwitch = () => {
    if (onValueChange) {
      onValueChange(!value);
    }
  };

  const handlePress = () => {
    if (!value) {
      if (customPress) {
        customPress();
      }
    } else {
      if (disabledPress) {
        disabledPress();
        return;
      }
    }
    toggleSwitch();
  };

  useEffect(() => {
    Animated.spring(toggleAnim, {
      toValue: value ? 1 : 0,
      useNativeDriver: false,
    }).start();
  }, [value]);

  const toggleSize = containerWidth * 0.5;
  const moveDistance = containerWidth - toggleSize - 8;

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View
        style={[
          styles.switchContainer,
          value && styles.switchContainerEnabled,
        ]}
      >
        <Animated.View
          style={[
            styles.switchToggle,
            { 
              width: toggleSize,
              height: toggleSize,
              transform: [
                {
                  translateX: toggleAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, moveDistance],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
