import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const UserProfileButtons = () => {
  const navigation = useNavigation() as any;
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
        onPress={() => {
          navigation.navigate("EditProfile");
        }}
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
              fontWeight: "600",
              letterSpacing: 0.5,
              opacity: 0.7,
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
