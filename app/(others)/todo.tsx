import { View, Text, Pressable, Alert } from "react-native";
import React, { useCallback } from "react";
import tw from "twrnc";
import {
  AntDesign,
  MaterialIcons,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";
import { router } from "expo-router";

import SafeView from "@/components/SafeView";
import { useTodo } from "@/hooks/useTodo";

const Todo = () => {
  const { todo, setTodo } = useTodo();

  const handleBack = useCallback(() => {
    setTodo(null);
    router.back();
  }, []);

  const parseDate = useCallback((date: string) => {
    const parsedDate = date.split(" ");

    return `${parsedDate[1]} ${parsedDate[2]}, ${parsedDate[3]}`;
  }, []);
  return (
    <SafeView>
      <View style={tw`pt-4 px-5 flex-row justify-between items-center`}>
        <Pressable onPress={handleBack}>
          <AntDesign name="left" size={24} color="black" />
        </Pressable>

        <View style={tw`flex-row gap-x-4 items-center`}>
          <MaterialIcons name="edit" size={26} color="black" />
          <Pressable
            onPress={() => {
              Alert.alert("Warning", "Do you want to delete this todo?", [
                {
                  text: "No",
                },
                {
                  text: "Yes",
                },
              ]);
            }}
          >
            <MaterialIcons name="delete" size={26} color="black" />
          </Pressable>
        </View>
      </View>

      <View style={tw`gap-y-6 px-5 mt-8`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-4xl font-bold`}>{todo?.title}</Text>
          <Pressable>
            <Ionicons name="checkmark-done-circle" size={26} color={"blue"} />
          </Pressable>
        </View>

        <Text style={tw`text-base leading-7 text-justify`}>
          {todo?.description}
        </Text>

        <View style={tw`flex-row gap-x-3 items-center`}>
          <FontAwesome5 name="calendar-alt" size={17} color="gray" />
          <Text style={tw`text-gray-700`}>
            {parseDate(todo!.startDate)} - {parseDate(todo!.endDate)}
          </Text>
        </View>
      </View>
    </SafeView>
  );
};

export default Todo;
