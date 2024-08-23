import { View, Text, ScrollView, TextInput } from "react-native";
import React, { useCallback, useState } from "react";
import tw from "twrnc";

import SafeView from "@/components/SafeView";
import Header from "@/components/Header";
import TodoCard from "@/components/TodoCard";
import { useTodos } from "@/hooks/useTodos";

const AllTodos = () => {
  const { todos } = useTodos();

  const [filteredTodos, setFilteredTodos] = useState(todos);

  const filterTodos = useCallback(
    (searchQuery: string) => {
      if (searchQuery === "") {
        if (filteredTodos === todos) {
          return;
        } else {
          return setFilteredTodos(todos);
        }
      }

      const newTodos = todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setFilteredTodos(newTodos);
    },
    [todos, filteredTodos]
  );
  return (
    <SafeView>
      <Header title="All Tasks" />

      <View style={tw`items-center mb-6`}>
        <TextInput
          style={tw`bg-white shadow shadow-black border border-gray-300 w-[90%] py-2.5 px-3 rounded-xl`}
          placeholder="Search..."
          onChangeText={filterTodos}
        />
      </View>

      <ScrollView contentContainerStyle={tw`px-4 gap-y-4`}>
        {filteredTodos.length === 0 && (
          <Text style={tw`text-rose-600 font-semibold text-base text-center`}>
            No Data to show.
          </Text>
        )}
        {filteredTodos.map((todo) => {
          return <TodoCard key={todo.title} todo={todo} />;
        })}
      </ScrollView>
    </SafeView>
  );
};

export default AllTodos;
