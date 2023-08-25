import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import ProfilePhotoEditBottomIcons from "./ProfilePhotoEditBottomIcons";
import colors from "../../../colorPalette/colors";

const ProfilePhotoEditBody = ({ profilePhoto, bottomSheetRef }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: profilePhoto,
        }}
        style={styles.profilePhoto}
        resizeMode="cover"
      />
      <ProfilePhotoEditBottomIcons bottomSheetRef={bottomSheetRef} />
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
    borderColor: colors.storyBorderColor,
    borderWidth: 5,
  },
});

export default ProfilePhotoEditBody;
