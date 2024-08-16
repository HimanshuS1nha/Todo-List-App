import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";
import tw from "twrnc";

import SafeView from "@/components/SafeView";
import Progress from "@/components/Progress";
import TodoCard from "@/components/TodoCard";

const Completed = () => {
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
          Completed
        </Text>

        <View style={tw`w-full items-center px-4 mt-8 gap-y-8`}>
          <Progress />

          <View style={tw`w-full gap-y-4`}>
            {dummyTodos.map((todo) => {
              return <TodoCard key={todo.title} todo={todo} />;
            })}
          </View>
        </View>
      </ScrollView>
    </SafeView>
  );
};

export default Completed;
