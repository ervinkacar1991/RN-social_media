import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Feather, Ionicons as Ionic } from "@expo/vector-icons";
import colors from "../../../colorPalette/colors";

const AddPostHeader = ({ navigation }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionic name="close" style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text
          style={{
            fontSize: 16,
            color: "white",
            fontWeight: "700",
          }}
        >
          New Post
        </Text>
      </View>
      <Text
        style={{
          color: colors.buttonBackgroundColor,
          fontSize: 18,
          fontWeight: "600",
        }}
      >
        Next
      </Text>
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

export default AddPostHeader;
