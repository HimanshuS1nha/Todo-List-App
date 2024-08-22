import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";

import SafeView from "@/components/SafeView";
import Header from "@/components/Header";
import TodoCard from "@/components/TodoCard";
import { useTodos } from "@/hooks/useTodos";

const AllTodos = () => {
  const { todos } = useTodos();
  return (
    <SafeView>
      <Header title="All Tasks" />

      <ScrollView contentContainerStyle={tw`px-4 gap-y-4`}>
        {todos.map((todo) => {
          return <TodoCard key={todo.title} todo={todo} />;
        })}
      </ScrollView>
    </SafeView>
  );
};

export default AllTodos;
