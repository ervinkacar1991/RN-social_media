import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Feather, Ionicons as Ionic } from "@expo/vector-icons";
import { color } from "react-native-reanimated";
import colors from "../../colorPalette/colors";

const UserPostsDetailsHeader = ({ username, navigation }) => {
  const capitalizeUsername = username.toUpperCase();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionic name="md-chevron-back" style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.username}>{capitalizeUsername}</Text>
        <Text
          style={{
            fontSize: 16,
            color: "white",
            fontWeight: "700",
          }}
        >
          Posts
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
    marginTop: 10,
  },
  infoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 30,
    color: "white",
  },
  username: {
    color: colors.secondaryTextColor,
  },
});

export default UserPostsDetailsHeader;
