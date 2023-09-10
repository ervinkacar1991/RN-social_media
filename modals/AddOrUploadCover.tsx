import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import colors from "../colorPalette/colors";
import { ActivityIndicator } from "react-native-paper";

const AddOrUploadCover = ({
  showAddCoverModal,
  setShowAddCoverModal,
  handleSaveCoverImage,
  handleUploadCoverImage,
  loading,
}) => {
  return (
    <Modal
      visible={showAddCoverModal}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setShowAddCoverModal(false)}
    >
      <TouchableWithoutFeedback onPress={() => setShowAddCoverModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.contentContainer}>
            <TouchableOpacity
              style={styles.optionContainer}
              onPress={handleSaveCoverImage}
            >
              <Text style={styles.optionText}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionContainer}
              onPress={handleUploadCoverImage}
            >
              <Text style={styles.optionText}>Choose from Library</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelContainer}
              onPress={() => setShowAddCoverModal(false)}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="white" />
        </View>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  contentContainer: {
    width: "80%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 10,
    justifyContent: "flex-end",
  },
  optionContainer: {
    borderBottomWidth: 0.5,
    borderColor: "#646262",
    paddingVertical: 20,
  },
  optionText: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
  },
  cancelContainer: {
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 10,
  },
  cancelText: {
    fontSize: 18,
    fontWeight: "600",
    color: "red",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.backgroundColor,
  },
});

export default AddOrUploadCover;
