import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import { FlashList } from "@shopify/flash-list";

import SafeView from "@/components/SafeView";
import Progress from "@/components/Progress";
import TodoCard from "@/components/TodoCard";
import { useTodos } from "@/hooks/useTodos";

const Completed = () => {
  const { todos } = useTodos();

  const completedTodos = todos.filter((todo) => todo.completed === 1);
  return (
    <SafeView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={tw`pt-6 text-center text-3xl font-bold text-blue-900`}>
          Completed
        </Text>

        <View style={tw`w-full items-center px-4 mt-8 gap-y-8`}>
          <Progress />

          <View style={tw`w-full h-full`}>
            {completedTodos.length === 0 && (
              <Text
                style={tw`text-rose-600 font-semibold text-base text-center`}
              >
                No data to show.
              </Text>
            )}
            <FlashList
              data={completedTodos}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return <TodoCard todo={item} />;
              }}
              estimatedItemSize={50}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeView>
  );
};

export default Completed;
