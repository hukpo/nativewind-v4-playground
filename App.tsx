import "./global.css";

import { ScrollView, View } from "react-native";

export default function App() {
  return (
    <ScrollView contentContainerClassName="flex-grow items-center justify-center gap-5">
      <View className="w-full h-10 bg-pink-300" />
      <View className="w-full h-10 bg-green-300" />
    </ScrollView>
  );
}
