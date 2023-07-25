import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "react-native-vector-icons";
import { ProfileBody } from "./ProfileBody";
import UserProfileButtons from "./UserProfileButtons";

const ProfileScreenHeader = ({ data }) => {
  return (
    <View>
      <Image
        source={{
          uri: data?.cover,
        }}
        style={styles.coverPhoto}
        resizeMode="cover"
      />

      {/* Top Icons */}
      <View style={styles.topIcons}>
        <View style={styles.usernameContainer}>
          <Text style={styles.username}>{data?.username}</Text>
          <Feather name="chevron-down" style={styles.chevronIcon} />
        </View>
        <View style={styles.menuContainer}>
          <Feather name="plus-square" style={styles.plusIcon} />
          <Feather name="menu" style={styles.menuIcon} />
        </View>
      </View>

      {/* Profile Body */}
      <View style={styles.profileBodyContainer}>
        <ProfileBody data={data} />
        <UserProfileButtons />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coverPhoto: {
    width: "100%",
    height: 200,
  },
  topIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    position: "absolute", // Postavljamo ikonice na vrh cover photo-a
    top: 10,
    left: 0,
    right: 0,
  },
  usernameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontSize: 18,
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
  },
  chevronIcon: {
    fontSize: 20,
    color: "white",
    paddingHorizontal: 5,
    opacity: 0.5,
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  plusIcon: {
    fontSize: 25,
    color: "white",
    paddingHorizontal: 13,
  },
  menuIcon: {
    fontSize: 25,
    color: "white",
  },
  profileBodyContainer: {
    position: "absolute",
    top: "40%",
    gap: 20,
  },
});

export default ProfileScreenHeader;
