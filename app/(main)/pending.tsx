import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { Entypo } from "@expo/vector-icons";

import SafeView from "@/components/SafeView";
import Progress from "@/components/Progress";

const Pending = () => {
  return (
    <SafeView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={tw`pt-6 text-center text-3xl font-bold text-blue-900`}>
          Pending
        </Text>

        <View style={tw`items-center px-4 mt-8 gap-y-8`}>
          <Progress />

          <View style={tw`w-full`}>
            <View style={tw`flex-row justify-between items-center`}>
              <Text style={tw`text-blue-900 font-semibold text-2xl`}>
                Today&apos;s Task
              </Text>

              <Pressable style={tw`flex-row gap-x-1.5 items-center`}>
                <Text style={tw`text-gray-700`}>See All</Text>
                <Entypo name="chevron-right" size={22} color="gray" />
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeView>
  );
};

export default Pending;
