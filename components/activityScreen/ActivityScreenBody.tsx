import { View, Text } from "react-native";
import React from "react";

const ActivityScreenBody = ({ data }) => {
  console.log(data);
  return (
    <View>
      <Text style={{ color: "white" }}>ActivityScreenBody</Text>
    </View>
  );
};

export default ActivityScreenBody;
