import { View, Text, Image } from "react-native";
import React from "react";
import colors from "../../colorPalette/colors";

export const ProfileBody = ({ data }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View style={{ alignItems: "center", left: 15 }}>
        <Image
          source={{
            uri: data?.user?.photo,
          }}
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            borderWidth: 3,
            borderColor: colors.storyBorderColor,
          }}
          resizeMode="cover"
        />
        <Text
          style={{
            paddingVertical: 5,
            fontWeight: "bold",
            letterSpacing: 0.7,
            color: "white",
          }}
        >
          {data?.user?.name}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          right: 30,
          bottom: 0,
          gap: 45,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
            300
          </Text>
          <Text style={{ color: "#a9a4a4" }}>Followers</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
            300
          </Text>
          <Text style={{ color: "#a9a4a4" }}>Following</Text>
        </View>
      </View>
    </View>
  );
};
