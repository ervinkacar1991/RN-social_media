import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import ProfilePhotoEditBottomIcons from "./ProfilePhotoEditBottomIcons";
import colors from "../../../colorPalette/colors";

const DefaultProfilePhotoUri = "https://i.stack.imgur.com/l60Hf.png";

const ProfilePhotoEditBody = ({ profilePhoto, bottomSheetRef }) => {
  return (
    <TouchableWithoutFeedback onPress={() => bottomSheetRef.current?.close()}>
      <View style={styles.container}>
        <Image
          source={{
            uri: profilePhoto || DefaultProfilePhotoUri,
          }}
          style={styles.profilePhoto}
          resizeMode="cover"
        />
        <ProfilePhotoEditBottomIcons bottomSheetRef={bottomSheetRef} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
