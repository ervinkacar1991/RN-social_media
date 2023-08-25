import { View, TouchableOpacity, StyleSheet, Modal, Text } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import colors from "../../../colorPalette/colors";

const ProfilePhotoEditBottomIcons = ({ bottomSheetRef }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteIconPress = () => {
    setShowModal(true);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  const handleConfirmDelete = () => {
    // Implement the actual delete logic here
    // Call an API or perform any necessary actions
    // After deletion, you can close the modal
    setShowModal(false);
  };

  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity style={styles.editIcon}>
        <Icon
          name="edit-2"
          size={22}
          color="white"
          style={styles.highlightedIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cameraIcon}
        onPress={() => bottomSheetRef.current?.expand()}
      >
        <Icon
          name="camera"
          size={22}
          color="white"
          style={styles.highlightedIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteIcon}
        onPress={handleDeleteIconPress}
      >
        <Icon
          name="trash-2"
          size={22}
          color="white"
          style={styles.highlightedIcon}
        />
      </TouchableOpacity>
      <Modal
        visible={showModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Delete photo?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonWithBorder]}
                onPress={handleCancelDelete}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleConfirmDelete}
              >
                <Text style={[styles.modalButtonText, styles.deleteButtonText]}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 270,
    height: 140,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 10,
    justifyContent: "flex-end",
  },
  modalButtons: {
    flexDirection: "row",
    width: "100%",
    height: "45%",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderTopColor: "#646262",
    borderTopWidth: 0.5,
  },
  modalButton: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  modalButtonWithBorder: {
    borderRightWidth: 0.5,
    borderColor: "#646262",
  },
  modalButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },

  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
    textAlign: "center",
    bottom: 10,
  },
  deleteButtonText: {
    // color: "white",
  },
});

export default ProfilePhotoEditBottomIcons;
