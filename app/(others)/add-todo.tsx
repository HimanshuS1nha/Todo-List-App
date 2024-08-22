import { View, Text, TextInput, Pressable, Alert } from "react-native";
import React, { useState, useCallback } from "react";
import tw from "twrnc";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { FontAwesome5 } from "@expo/vector-icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSQLiteContext } from "expo-sqlite";
import { ZodError } from "zod";
import UUID from "react-native-uuid";

import SafeView from "@/components/SafeView";
import Header from "@/components/Header";
import { addTodoValidator } from "@/validators/add-todo-validator";

const AddTodo = () => {
  const db = useSQLiteContext();
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [type, setType] = useState<"start" | "end" | null>(null);

  const handleChange = useCallback(
    (type: "title" | "description", value: string) => {
      if (type === "title") {
        setTitle(value);
      } else if (type === "description") {
        setDescription(value);
      }
    },
    []
  );

  const handleChangeDate = useCallback(
    (event: DateTimePickerEvent, date?: Date) => {
      if (event.type === "set") {
        if (type === "start" && date) {
          setStartDate(date.toDateString());
        } else if (type === "end" && date) {
          setEndDate(date.toDateString());
        }
      }

      setType(null);
      setShowDatePicker(false);
    },
    [type]
  );

  const { mutate: handleAddTodo, isPending } = useMutation({
    mutationKey: ["add-todo"],
    mutationFn: async () => {
      const parsedData = await addTodoValidator.parseAsync({
        title,
        description,
        startDate,
        endDate,
      });

      if (new Date(startDate) > new Date(endDate)) {
        throw new Error("Start Date cannot be greater than end date");
      }

      const newNote = {
        id: UUID.v4().toString(),
        ...parsedData,
        completed: 0,
      };

      await db.runAsync(
        "INSERT INTO todos values (?,?,?,?,?,?)",
        newNote.id,
        title,
        newNote.description!,
        newNote.startDate,
        newNote.endDate,
        0
      );

      return newNote;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["get-todos"],
        exact: true,
        refetchType: "active",
      });
      Alert.alert("Success", "Task added successfully");
      setTitle("");
      setDescription("");
      setStartDate("");
      setEndDate("");
    },
    onError: (error) => {
      console.log(error);
      if (error instanceof ZodError) {
        Alert.alert("Error", error.errors[0].message);
      } else {
        Alert.alert("Error", "Some error occured. Please try again later!");
      }
    },
  });
  return (
    <SafeView>
      <Header title="Add Task" />
      {showDatePicker && type && (
        <DateTimePicker
          mode="date"
          value={new Date()}
          onChange={handleChangeDate}
        />
      )}
      <View style={tw`mt-8 gap-y-6 items-center`}>
        <View style={tw`gap-y-3 w-[85%]`}>
          <Text style={tw`text-base font-medium ml-1.5`}>Title</Text>
          <TextInput
            placeholder="Enter title"
            style={tw`bg-white py-3 px-4 rounded-xl border`}
            value={title}
            onChangeText={(text) => handleChange("title", text)}
          />
        </View>
        <View style={tw`gap-y-3 w-[85%]`}>
          <Text style={tw`text-base font-medium ml-1.5`}>Description</Text>
          <TextInput
            placeholder="Enter description"
            style={tw`bg-white py-3 px-4 rounded-xl border`}
            value={description}
            onChangeText={(text) => handleChange("description", text)}
            multiline
            numberOfLines={4}
          />
        </View>
        <View style={tw`gap-y-3 w-[85%]`}>
          <Text style={tw`text-base font-medium ml-1.5`}>Start Date</Text>
          <Pressable
            onPress={() => {
              setType("start");
              setShowDatePicker(true);
            }}
          >
            <TextInput
              placeholder="Select start date"
              style={tw`bg-white py-3 px-4 rounded-xl border text-black`}
              value={startDate}
              readOnly
            />
            <View style={tw`absolute right-3 top-[30%]`}>
              <FontAwesome5 name="calendar-alt" size={20} color="gray" />
            </View>
          </Pressable>
        </View>
        <View style={tw`gap-y-3 w-[85%]`}>
          <Text style={tw`text-base font-medium ml-1.5`}>End Date</Text>
          <Pressable
            onPress={() => {
              setType("end");
              setShowDatePicker(true);
            }}
          >
            <TextInput
              placeholder="Enter end date"
              style={tw`bg-white py-3 px-4 rounded-xl border text-black`}
              value={endDate}
              readOnly
            />
            <View style={tw`absolute right-3 top-[30%]`}>
              <FontAwesome5 name="calendar-alt" size={20} color="gray" />
            </View>
          </Pressable>
        </View>

        <Pressable
          style={tw`w-[85%] ${
            isPending ? "bg-blue-300" : "bg-blue-600"
          } items-center justify-center py-3.5 rounded-xl`}
          onPress={() => handleAddTodo()}
          disabled={isPending}
        >
          <Text style={tw`text-lg font-semibold text-white`}>
            {isPending ? "Please wait..." : "Add"}
          </Text>
        </Pressable>
      </View>
    </SafeView>
  );
};

export default AddTodo;
