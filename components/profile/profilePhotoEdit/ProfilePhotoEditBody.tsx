import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import ProfilePhotoEditBottomIcons from "./ProfilePhotoEditBottomIcons";

const ProfilePhotoEditBody = ({ profilePhoto }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: profilePhoto,
        }}
        style={styles.profilePhoto}
        resizeMode="cover"
      />
      <ProfilePhotoEditBottomIcons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 100,
  },
  profilePhoto: {
    height: 350,
    width: 350,
    borderRadius: 175,
    position: "relative",
  },
});

export default ProfilePhotoEditBody;
