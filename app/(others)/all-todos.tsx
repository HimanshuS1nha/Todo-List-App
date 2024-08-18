import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";

import SafeView from "@/components/SafeView";
import Header from "@/components/Header";
import TodoCard from "@/components/TodoCard";

const AllTodos = () => {
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
      <Header title="All Tasks" />

      <ScrollView contentContainerStyle={tw`px-4 gap-y-4`}>
        {dummyTodos.map((todo) => {
          return <TodoCard key={todo.title} todo={todo} />;
        })}
      </ScrollView>
    </SafeView>
  );
};

export default AllTodos;
