import { View, Text } from "react-native";
import React from "react";

const ProfileInfo = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 45,
        justifyContent: "flex-end",
        marginTop: 14,
        marginHorizontal: 30,
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
  );
};

export default ProfileInfo;
