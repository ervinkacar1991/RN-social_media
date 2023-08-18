import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons as Ionic } from "@expo/vector-icons";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const ProfilePhotoEditHeader = () => {
  const navigation = useNavigation() as any;
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionic name="close" style={styles.icon} />
      </TouchableOpacity>
      <View>
        <Text
          style={{
            fontSize: 21,
            color: "white",
            fontWeight: "600",
            letterSpacing: 0.7,
            marginRight: 20,
          }}
        >
          Profile Photo
        </Text>
      </View>

      <Feather name="more-vertical" style={{ color: "#01200F" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  icon: {
    fontSize: 30,
    color: "white",
  },
});

export default ProfilePhotoEditHeader;
