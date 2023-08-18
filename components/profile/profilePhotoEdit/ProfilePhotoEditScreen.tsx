import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import colors from "../../../colorPalette/colors";
import ProfilePhotoEditHeader from "./ProfilePhotoEditHeader";
import ProfilePhotoEditBody from "./ProfilePhotoEditBody";
import ProfilePhotoEditBottomIcons from "./ProfilePhotoEditBottomIcons";

const ProfilePhotoEditScreen = ({ route }) => {
  const { profilePhoto } = route.params;
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ProfilePhotoEditHeader />
        <ProfilePhotoEditBody profilePhoto={profilePhoto} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});

export default ProfilePhotoEditScreen;
