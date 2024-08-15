import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

const Progress = () => {
  return (
    <View style={tw`bg-blue-600 w-full p-5 rounded-lg gap-y-4`}>
      <View style={tw`gap-y-2`}>
        <Text style={tw`text-white text-xl font-medium`}>
          Today&apos;s task progress
        </Text>
        <Text style={tw`text-white`}>10/15 completed</Text>
      </View>

      <View style={tw`flex-row gap-x-3 items-center`}>
        <Text style={tw`text-white text-base font-medium`}>Progress</Text>

        <View style={tw`w-[65%] flex-row justify-between`}>
          <View style={tw`w-[70%] bg-white h-1.5 rounded-l-xl`} />
          <View style={tw`w-[30%] bg-gray-400 h-1.5 rounded-l-xl`} />
        </View>

        <Text style={tw`text-white font-bold`}>70%</Text>
      </View>
    </View>
  );
};

export default Progress;
