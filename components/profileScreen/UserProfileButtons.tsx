import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const UserProfileButtons = () => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingVertical: 5,
        padding: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => {}}
        style={{
          width: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            height: 35,
            borderRadius: 5,
            borderColor: "#DEDEDE",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              letterSpacing: 1,
              opacity: 0.5,
            }}
          >
            Edit Profile
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfileButtons;
