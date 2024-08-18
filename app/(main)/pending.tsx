import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

import SafeView from "@/components/SafeView";
import Progress from "@/components/Progress";
import TodoCard from "@/components/TodoCard";

const Pending = () => {
  const dummyTodos = [
    {
      title: "Random Task",
      startDate: "16 August 2024",
      endDate: "20 August 2024",
    },
    {
      title: "Random Task 2",
      startDate: "16 August 2024",
      endDate: "18 August 2024",
    },
  ];
  return (
    <SafeView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={tw`pt-6 text-center text-3xl font-bold text-blue-900`}>
          Pending
        </Text>

        <View style={tw`items-center px-4 mt-8 gap-y-8`}>
          <Progress />

          <View style={tw`w-full gap-y-4`}>
            <View style={tw`flex-row justify-between items-center`}>
              <Text style={tw`text-blue-900 font-semibold text-2xl`}>
                Today&apos;s Task
              </Text>

              <Pressable
                style={tw`flex-row gap-x-1.5 items-center`}
                onPress={() => router.push("/all-todos")}
              >
                <Text style={tw`text-gray-700`}>See All</Text>
                <Entypo name="chevron-right" size={22} color="gray" />
              </Pressable>
            </View>

            {dummyTodos.map((todo) => {
              return <TodoCard key={todo.title} todo={todo} />;
            })}
          </View>
        </View>
      </ScrollView>

      <Pressable
        style={tw`absolute bg-blue-600 bottom-4 right-4 p-2 rounded-full`}
        onPress={() => router.push("/add-todo")}
      >
        <AntDesign name="plus" size={28} color="white" />
      </Pressable>
    </SafeView>
  );
};

export default Pending;
