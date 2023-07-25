import { View, Text, Image } from "react-native";
import React from "react";
import ProfileScreenHeader from "./ProfileScreenHeader";

export const ProfileBody = ({ data }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "space-around",
        // paddingVertical: 20,
        position: "relative",
      }}
    >
      <View style={{ alignItems: "center", left: 15 }}>
        <Image
          source={{
            uri: data?.photo,
          }}
          style={{ width: 150, height: 150, borderRadius: 100 }}
          resizeMode="cover"
        />
        <Text
          style={{
            paddingVertical: 5,
            fontWeight: "bold",
            color: "white",
          }}
        >
          {data?.name}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          right: 40,
          bottom: 0,
          gap: 45,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
            300
          </Text>
          <Text style={{ color: "white" }}>Followers</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
            300
          </Text>
          <Text style={{ color: "white" }}>Following</Text>
        </View>
      </View>
    </View>
  );
};
