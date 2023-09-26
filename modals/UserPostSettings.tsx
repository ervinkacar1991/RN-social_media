import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Divider } from "react-native-paper";
import colors from "../colorPalette/colors";
import Icon from "react-native-vector-icons/Feather";

const UserPostSettings = ({
  isModalVisible,
  setIsModalVisible,
  onDelete,
  postId,
}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(!isModalVisible);
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => setIsModalVisible(!isModalVisible)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalInnerContent}>
                <TouchableOpacity style={styles.buttonContainer}>
                  <Icon
                    name="edit"
                    size={23}
                    color={colors.primaryTextColor}
                    solid={false}
                  />

                  <Text style={styles.editButton}>Edit</Text>
                </TouchableOpacity>
                <Divider
                  style={{
                    width: "100%",
                    // alignSelf: "center",
                    backgroundColor: colors.secondaryTextColor,
                  }}
                />
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={onDelete}
                >
                  <Icon name="trash" size={23} color={"red"} solid={false} />
                  <Text style={styles.deleteButton}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalContent: {
    backgroundColor: "#303030",
    width: "100%",
    height: 180,
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  modalInnerContent: {
    backgroundColor: "#454545",
    borderRadius: 15,
    padding: 8,
  },
  buttonContainer: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 18,
    gap: 15,
  },
  editButton: {
    color: colors.primaryTextColor,
    fontWeight: "500",
    letterSpacing: 0.7,
    fontSize: 16,
  },
  deleteButton: {
    color: "red",
    fontWeight: "500",
    letterSpacing: 0.7,
    fontSize: 16,
  },
});

export default UserPostSettings;
