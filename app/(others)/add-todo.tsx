import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";

import SafeView from "@/components/SafeView";
import Header from "@/components/Header";

const AddTodo = () => {
  return (
    <SafeView>
      <Header title="Add Task" />

      <View style={tw`mt-8 gap-y-6 items-center`}>
        <View style={tw`gap-y-3 w-[85%]`}>
          <Text style={tw`text-base font-medium ml-1.5`}>Title</Text>
          <TextInput
            placeholder="Enter title"
            style={tw`bg-white py-3 px-4 rounded-xl border`}
          />
        </View>
        <View style={tw`gap-y-3 w-[85%]`}>
          <Text style={tw`text-base font-medium ml-1.5`}>Description</Text>
          <TextInput
            placeholder="Enter description"
            style={tw`bg-white py-3 px-4 rounded-xl border`}
          />
        </View>
        <View style={tw`gap-y-3 w-[85%]`}>
          <Text style={tw`text-base font-medium ml-1.5`}>Start Date</Text>
          <TextInput
            placeholder="Enter start date"
            style={tw`bg-white py-3 px-4 rounded-xl border`}
          />
        </View>
        <View style={tw`gap-y-3 w-[85%]`}>
          <Text style={tw`text-base font-medium ml-1.5`}>End Date</Text>
          <TextInput
            placeholder="Enter end date"
            style={tw`bg-white py-3 px-4 rounded-xl border`}
          />
        </View>

        <Pressable
          style={tw`w-[85%] bg-blue-600 items-center justify-center py-3.5 rounded-xl`}
        >
          <Text style={tw`text-lg font-semibold text-white`}>Add</Text>
        </Pressable>
      </View>
    </SafeView>
  );
};

export default AddTodo;
