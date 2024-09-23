import { TouchableOpacity, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus, faMinus } from "@fortawesome/pro-solid-svg-icons";
import { useTheme } from "../../../hooks/themeprovider";
import { useState, useEffect } from "react";
interface CounterProps {
  value: number;
}

const IncrementCounter = ({ onPress }: { onPress: () => void }) => {
  const { componentStyles } = useTheme();

  return (
    <TouchableOpacity onPress={onPress} style={componentStyles.incrementButton}>
      <FontAwesomeIcon icon={faPlus} />
    </TouchableOpacity>
  );
};

const DecrementCounter = ({ onPress }: { onPress: () => void }) => {
  const { componentStyles } = useTheme();
  return (
    <TouchableOpacity onPress={onPress} style={componentStyles.decrementButton}>
      <FontAwesomeIcon icon={faMinus} />
    </TouchableOpacity>
  );
};

export const CounterComponent = ({ value }: CounterProps) => {
  const { componentStyles } = useTheme();
  const [counterValue, setCounterValue] = useState(value);

  useEffect(() => {
    setCounterValue(value);
  }, [value]);

  const handleIncrement = () => {
    setCounterValue(counterValue + 1);
  };

  const handleDecrement = () => {
    setCounterValue(counterValue - 1);
  };

  return (
    <View style={componentStyles.counterComponent}>
      <Text style={componentStyles.counterText}>{counterValue}</Text>
      <View style={componentStyles.counterButtons}>
        <DecrementCounter onPress={handleDecrement} />
        <IncrementCounter onPress={handleIncrement} />
      </View>
    </View>
  );
};
