import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState, useCallback } from "react";
import tw from "twrnc";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { FontAwesome5 } from "@expo/vector-icons";

import SafeView from "@/components/SafeView";
import Header from "@/components/Header";

const AddTodo = () => {
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

      setShowDatePicker(false);
    },
    [type]
  );
  return (
    <SafeView>
      <Header title="Add Task" />
      {showDatePicker && (
        <DateTimePicker value={new Date()} onChange={handleChangeDate} />
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
          style={tw`w-[85%] bg-blue-600 items-center justify-center py-3.5 rounded-xl`}
        >
          <Text style={tw`text-lg font-semibold text-white`}>Add</Text>
        </Pressable>
      </View>
    </SafeView>
  );
};

export default AddTodo;
