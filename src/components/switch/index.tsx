import {
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Animated,
  LayoutChangeEvent,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import colors from "../../styles/colors";

export default function Switch() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const toggleAnim = useRef(new Animated.Value(0)).current;

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
    <TouchableWithoutFeedback onPress={toggleSwitch}>
      <View
        style={[styles.container, isEnabled && styles.containerEnabled]}
        onLayout={onLayout}
      >
        <Animated.View  
          style={[
            styles.toggle,
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

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 30,
    backgroundColor: colors.light.textLight,
    borderRadius: 15,
    justifyContent: "center",
    padding: 4,
  },
  containerEnabled: {
    backgroundColor: "#4cd964",
  },
  toggle: {
    backgroundColor: "white",
    borderRadius: 16,
  },
});
