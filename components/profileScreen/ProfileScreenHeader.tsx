import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons as Ionic } from "@expo/vector-icons";
import Feather from "react-native-vector-icons/Feather";
import { ProfileBody } from "./ProfileBody";
import ProfileButtons from "./ProfileButtons";

const ProfileScreenHeader = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#01200F",
        padding: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity>
          <Ionic name="arrow-back" style={{ fontSize: 30, color: "white" }} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "92%",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "white",
              marginLeft: 10,
              fontWeight: "bold",
            }}
          >
            Ervin Kacar
          </Text>
          <Feather
            name="more-vertical"
            style={{ fontSize: 20, color: "white" }}
          />
        </View>
      </View>
      <ProfileBody />
      <ProfileButtons />
    </View>
  );
};

export default ProfileScreenHeader;
