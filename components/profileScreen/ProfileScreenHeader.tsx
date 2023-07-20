import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons as Ionic } from "@expo/vector-icons";
import Feather from "react-native-vector-icons/Feather";
import { ProfileBody } from "./ProfileBody";
import ProfileButtons from "./ProfileButtons";
import UserProfileButtons from "./UserProfileButtons";

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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* <TouchableOpacity>
          <Ionic name="arrow-back" style={{ fontSize: 30, color: "white" }} />
        </TouchableOpacity> */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // width: "92%",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "white",
              marginLeft: 10,
              fontWeight: "bold",
            }}
          >
            ervin_kacar
          </Text>
          <Feather
            name="chevron-down"
            style={{
              fontSize: 20,
              color: "white",
              paddingHorizontal: 5,
              opacity: 0.5,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Feather
            name="plus-square"
            style={{
              fontSize: 25,
              color: "white",
              paddingHorizontal: 13,
            }}
          />
          <Feather
            name="menu"
            style={{
              fontSize: 25,
              color: "white",
            }}
          />
        </View>
      </View>
      <ProfileBody />
      {/* <ProfileButtons /> */}
      <UserProfileButtons />
    </View>
  );
};

export default ProfileScreenHeader;
