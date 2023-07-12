import { View, Text, Image } from "react-native";
import React from "react";

export const ProfileBody = () => {
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
            uri: "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg",
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
          Ervin Kacar
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
