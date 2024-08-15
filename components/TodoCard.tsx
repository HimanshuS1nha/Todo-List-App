import { View, Text, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { Entypo } from "@expo/vector-icons";

const TodoCard = ({
  todo,
}: {
  todo: { title: string; startDate: string; endDate: string };
}) => {
  return (
    <View
      style={tw`p-4 bg-white border border-gray-300 rounded-xl flex-row justify-between items-center shadow-lg shadow-gray-300`}
    >
      <View style={tw`gap-y-1.5`}>
        <Text style={tw`text-lg font-semibold`}>{todo.title}</Text>
        <Text style={tw`text-gray-700`}>
          {todo.startDate} - {todo.endDate}
        </Text>
      </View>

      <View style={tw`flex-row gap-x-1.5 items-center`}>
        <Pressable>
          <Entypo name="chevron-right" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default TodoCard;
