import { View, Text, Image } from "react-native";
import React from "react";

export const ProfileBody = ({ data }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical: 20,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Image
          source={{
            uri: data?.photo,
          }}
          style={{ width: 80, height: 80, borderRadius: 100 }}
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
      <View style={{ alignItems: "center" }}>
        <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
          300
        </Text>
        <Text style={{ color: "white" }}>Posts</Text>
      </View>
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
  );
};
