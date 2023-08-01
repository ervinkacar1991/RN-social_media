import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProfileInfo = ({ user }) => {
  const navigation = useNavigation() as any;
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
        <TouchableOpacity
          onPress={() => navigation.navigate("UserProfileInfo", { user })}
        >
          <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
            300
          </Text>
        </TouchableOpacity>
        <Text style={{ color: "#a9a4a4" }}>Followers</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("UserProfileInfo")}
        >
          <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
            300
          </Text>
        </TouchableOpacity>
        <Text style={{ color: "#a9a4a4" }}>Following</Text>
      </View>
    </View>
  );
};

export default ProfileInfo;
