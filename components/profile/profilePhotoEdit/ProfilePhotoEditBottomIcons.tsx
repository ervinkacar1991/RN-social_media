import { View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import colors from "../../../colorPalette/colors";

const ProfilePhotoEditBottomIcons = () => {
  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity>
        <View style={styles.editIcon}>
          <Icon
            name="edit-2"
            size={22}
            color="white"
            style={styles.highlightedIcon}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.cameraIcon}>
          <Icon
            name="camera"
            size={22}
            color="white"
            style={styles.highlightedIcon}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.deleteIcon}>
          <Icon
            name="trash-2"
            size={22}
            color="white"
            style={styles.highlightedIcon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 40,
  },

  editIcon: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: colors.buttonBackgroundColor,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.userInfoSearchBoxTextColor,
    borderWidth: 0.5,
    bottom: 38,
  },
  cameraIcon: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: colors.buttonBackgroundColor,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.userInfoSearchBoxTextColor,
    borderWidth: 0.5,
    bottom: 20,
  },
  deleteIcon: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: colors.buttonBackgroundColor,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.userInfoSearchBoxTextColor,
    borderWidth: 0.5,
    bottom: 38,
  },
  highlightedIcon: {
    textShadowColor: "rgba(255, 255, 255, 0.5)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
  },
});

export default ProfilePhotoEditBottomIcons;
