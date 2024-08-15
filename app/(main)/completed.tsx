import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";

import SafeView from "@/components/SafeView";
import Progress from "@/components/Progress";

const Completed = () => {
  return (
    <SafeView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={tw`pt-6 text-center text-3xl font-bold text-blue-900`}>
          Completed
        </Text>

        <View style={tw`items-center px-4 mt-8 gap-y-8`}>
          <Progress />
        </View>
      </ScrollView>
    </SafeView>
  );
};

export default Completed;
