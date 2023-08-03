import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import colors from "../../colorPalette/colors";
import ProfileInfo from "./ProfileInfo";
import { Feather } from "@expo/vector-icons";
import { useQuery } from "react-query";
import api from "../../services/api";
import Modal from "react-native-modal";

const DefaultCovereUri =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRHYig3H-sA-cJkJq7SKQTf24WWhWDiK6PbA&usqp=CAU";

const ProfileHeader = ({ user }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLogout = () => {};

  return (
    <View>
      <Image
        source={{
          uri: user?.cover ? user?.cover : DefaultCovereUri,
        }}
        style={styles.coverPhoto}
        resizeMode="cover"
      />
      <View style={styles.topIcons}>
        <View style={styles.usernameContainer}>
          <Text style={styles.username}>{user?.username}</Text>
          <Feather name="chevron-down" style={styles.chevronIcon} />
        </View>
        <View style={styles.menuContainer}>
          <Feather name="plus-square" style={styles.plusIcon} />
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <Feather name="menu" style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setIsModalVisible(false)}
          style={styles.modal}
          animationIn="slideInUp" // Customize the animation here
          animationOut="slideOutDown" // Customize the animation here
        >
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={() => handleLogout()}
            >
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
      <ProfileInfo user={user?.username} />

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
  topIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
  },
  usernameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontSize: 18,
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
  },
  chevronIcon: {
    fontSize: 20,
    color: "white",
    paddingHorizontal: 5,
    opacity: 0.5,
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  plusIcon: {
    fontSize: 25,
    color: "white",
    paddingHorizontal: 13,
  },
  menuIcon: {
    fontSize: 25,
    color: "white",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: colors.storyBorderColor,
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  logoutButton: {
    backgroundColor: colors.buttonBackgroundColor,
    padding: 15,
    borderRadius: 30,
  },
  logoutButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});

export default ProfileHeader;
