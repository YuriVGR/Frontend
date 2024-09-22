import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Animated,
  LayoutChangeEvent,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import { colors } from "../../styles/colors";
import { componentStyles } from "../../styles/styles";

interface SwitchProps {
  onValueChange?: (value: boolean) => void;
  value: boolean;
  onAdditionalPress?: () => void;
  disabled?: () => void;
}

export default function Switch({
  onValueChange,
  value,
  onAdditionalPress,
  disabled,
}: SwitchProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const toggleAnim = useRef(new Animated.Value(0)).current;

  const toggleSwitch = () => {
    setIsEnabled((previousState) => {
      const newState = !previousState;
      if (onValueChange) {
        onValueChange(newState);
      }
      return newState;
    });
  };

  const handlePress = () => {
    toggleSwitch();
    if (onAdditionalPress && !isEnabled) {
      onAdditionalPress();
    } else if (disabled && isEnabled) {
      disabled();
    }
  };

  const onLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
  };

  useEffect(() => {
    Animated.spring(toggleAnim, {
      toValue: isEnabled ? 1 : 0,
      useNativeDriver: false,
    }).start();
  }, [isEnabled]);

  const toggleSize = containerWidth * 0.5;
  const moveDistance = containerWidth - toggleSize - 8;

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View
        style={[
          componentStyles.switchContainer,
          isEnabled && componentStyles.switchContainerEnabled,
        ]}
        onLayout={onLayout}
      >
        <Animated.View
          style={[
            componentStyles.switchToggle,
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