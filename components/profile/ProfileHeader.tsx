import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import colors from "../../colorPalette/colors";
import ProfileInfo from "./ProfileInfo";

const ProfileHeader = ({ user }) => {
  return (
    <View>
      <Image
        source={{
          uri: user?.cover,
        }}
        style={styles.coverPhoto}
        resizeMode="cover"
      />
      <ProfileInfo />

      <View style={styles.profileInfoContainer}>
        <Image
          source={{
            uri: user?.photo,
          }}
          style={styles.profilePhoto}
          resizeMode="cover"
        />

        <Text
          style={{
            paddingVertical: 5,
            fontWeight: "bold",
            letterSpacing: 0.7,
            color: "white",
          }}
        >
          {user?.name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
  coverPhoto: {
    height: 200,
    width: "100%",
  },
  profileInfoContainer: {
    position: "absolute",
    top: 80,
    left: 0,
    right: 210,
    alignItems: "center",
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: colors.storyBorderColor,
  },
});

export default ProfileHeader;
