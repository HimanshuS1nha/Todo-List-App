import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

import { useTodos } from "@/hooks/useTodos";

const Progress = () => {
  const { todos } = useTodos();

  const completedTodos = todos.filter((todo) => todo.completed === 1);
  return (
    <View style={tw`bg-blue-600 w-full p-5 rounded-lg gap-y-4`}>
      <View style={tw`gap-y-2`}>
        <Text style={tw`text-white text-xl font-medium`}>
          Today&apos;s task progress
        </Text>
        <Text style={tw`text-white`}>
          {completedTodos.length}/{todos.length} completed
        </Text>
      </View>

      <View style={tw`flex-row gap-x-3 items-center`}>
        <Text style={tw`text-white text-base font-medium`}>Progress</Text>

        <View style={tw`w-[65%] flex-row justify-between`}>
          <View
            style={[
              tw`bg-white h-1.5 rounded-l-xl`,
              {
                width: `${(completedTodos.length * 100) / todos.length}%`,
              },
            ]}
          />
          <View
            style={[
              tw`bg-gray-400 h-1.5 rounded-l-xl`,
              {
                width: `${100 - (completedTodos.length * 100) / todos.length}%`,
              },
            ]}
          />
        </View>

        <Text style={tw`text-white font-bold`}>
          {(completedTodos.length * 100) / todos.length}%
        </Text>
      </View>
    </View>
  );
};

export default Progress;
