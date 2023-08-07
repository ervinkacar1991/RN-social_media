import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Feather, Ionicons as Ionic } from "@expo/vector-icons";

const UserProfileInfoHeader = ({ navigation, user }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionic name="md-chevron-back" style={styles.icon} />
      </TouchableOpacity>
      <View>
        <Text
          style={{
            fontSize: 16,
            color: "white",
            fontWeight: "bold",
            marginRight: 20,
          }}
        >
          {user}
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
  },
  icon: {
    fontSize: 30,
    color: "white",
  },
});

export default UserProfileInfoHeader;
