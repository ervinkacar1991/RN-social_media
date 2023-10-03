import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import colors from "../../colorPalette/colors";

const UserProfileButtons = ({ profilePhoto, username, name, bio }) => {
  const navigation = useNavigation() as any;
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 20,
        // paddingVertical: 5,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("EditProfile", {
            profilePhoto: profilePhoto,
            username: username,
            name: name,
            bio: bio,
          });
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
            backgroundColor: colors.buttonBackgroundColor,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "600",
              letterSpacing: 0.7,
              // opacity: 0.7,
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
