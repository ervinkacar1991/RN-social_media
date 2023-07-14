import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const ProfileButtons = () => {
  const [follow, setFollow] = useState(true);

  const handleButtonPress = () => {
    setFollow(!follow);
  };

  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={handleButtonPress} style={{ width: "42%" }}>
        <View
          style={{
            width: "100%",
            height: 35,
            borderRadius: 5,
            backgroundColor: follow ? "#137547" : null,
            borderWidth: follow ? null : 1,
            borderColor: "#DEDEDE",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: follow ? "white" : "white" }}>
            {follow ? "Follow" : "Following"}
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          width: "42%",
          height: 35,
          borderWidth: 1,
          borderColor: "#DEDEDE",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white" }}>Message</Text>
      </View>
    </View>
  );
};

export default ProfileButtons;
