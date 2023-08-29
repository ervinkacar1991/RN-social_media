import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import Ionic from "react-native-vector-icons/Ionicons";
import colors from "../colorPalette/colors";

const ProfileCoverPhotoModal = ({
  isModalVisible,
  toggleModal,
  coverPhoto,
}) => {
  const navigation = useNavigation();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <Modal
      visible={isModalVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={toggleModal}
    >
      {/* Add your modal content here */}
      <View style={styles.modalContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={toggleModal}>
            <Ionic name="close" style={styles.icon} />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                fontSize: 21,
                color: "white",
                fontWeight: "600",
                letterSpacing: 0.7,
                marginRight: 20,
              }}
            >
              Cover Photo
            </Text>
          </View>

          <Feather name="more-vertical" style={{ color: "#01200F" }} />
        </View>
        <View style={styles.coverPhotoContainer}>
          <Image
            source={{
              uri: coverPhoto,
            }}
            style={styles.coverPhoto}
            resizeMode="cover"
          />
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="edit" style={styles.icon} />
            <Text style={styles.textColor}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="plus-circle" style={styles.icon} />
            <Text style={styles.textColor}>Add Cover</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => setShowDeleteModal(true)}
          >
            <Feather name="trash-2" style={styles.icon} />
            <Text style={styles.textColor}>Delete</Text>
          </TouchableOpacity>
          {showDeleteModal && (
            <Modal
              visible={showDeleteModal}
              transparent={true}
              animationType="slide"
              onRequestClose={() => setShowDeleteModal(false)}
            >
              <View style={styles.deleteModalContainer}>
                <View style={styles.deleteModalContent}>
                  <Text style={styles.deleteModalText}>
                    Delete cover photo?
                  </Text>
                  <View style={styles.deleteModalButtons}>
                    <TouchableOpacity
                      style={[
                        styles.deleteModalButton,
                        styles.deleteModalButtonWithBorder,
                      ]}
                      onPress={() => setShowDeleteModal(false)}
                    >
                      <Text style={styles.deleteModalButtonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.deleteModalButton}
                      onPress={() => {
                        setShowDeleteModal(false);
                        // Pozovite funkciju za brisanje ovde
                        // handleConfirmDelete();
                      }}
                    >
                      <Text
                        style={[
                          styles.deleteModalButtonText,
                          styles.deleteButtonText,
                        ]}
                      >
                        Delete
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 50,
  },
  icon: {
    fontSize: 25,
    color: "white",
  },
  coverPhotoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  coverPhoto: {
    height: 200,
    width: "100%",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderTopColor: colors.dividerBackgroundColor,
    borderTopWidth: 0.5,
  },
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  textColor: {
    color: "white",
    marginTop: 10,
    textAlign: "center",
    fontWeight: "500",
    letterSpacing: 0.5,
  },
  deleteModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  deleteModalContent: {
    width: 270,
    height: 140,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 10,
    justifyContent: "flex-end",
  },
  deleteModalText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
    color: "white",
    textAlign: "center",
    bottom: 10,
  },
  deleteModalButtons: {
    flexDirection: "row",
    width: "100%",
    height: "45%",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderTopColor: "#646262",
    borderTopWidth: 0.5,
  },
  deleteModalButton: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  deleteModalButtonWithBorder: {
    borderRightWidth: 0.5,
    borderColor: "#646262",
  },
  deleteModalButtonText: {
    fontSize: 19,
    color: "white",
    fontWeight: "600",
  },
  deleteButtonText: {
    // color: "white",
  },
});

export default ProfileCoverPhotoModal;
