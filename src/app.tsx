import "../global.css";

import { useState } from "react";
import { vars } from "nativewind";
import { Text, View } from "react-native";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View className="bg-green-300 flex-1 items-center justify-center">
      <View style={vars({ "--brand-color": "red" })}>
        <Text className="text-brand-color">Text</Text>
      </View>
    </View>
  );
};
