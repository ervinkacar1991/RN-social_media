import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import colors from "../../colorPalette/colors";
import ProfileInfo from "./ProfileInfo";
import { Feather } from "@expo/vector-icons";
import { useQuery } from "react-query";
import api from "../../services/api";
// import Modal from "react-native-modal";
import { UserContext } from "../../context/UserContext";

const DefaultCovereUri =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRHYig3H-sA-cJkJq7SKQTf24WWhWDiK6PbA&usqp=CAU";

const ProfileHeader = ({ user }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { handleSetToken, handleLogout } = useContext(UserContext);

  // const { isLoading, data, isError } = useQuery("logout", api.logout);

  const onLogout = () => {
    handleLogout();
    setIsModalVisible(false);
  };

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
          <TouchableOpacity onPress={onLogout}>
            <Feather name="log-out" style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
        {/* <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setIsModalVisible(false)}
          style={styles.modal}
          animationIn="slideInRight"
          animationOut="slideOutRight"
          animationInTiming={500}
          animationOutTiming={500}
          backdropTransitionInTiming={500}
          backdropTransitionOutTiming={500}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
              <Feather name="log-out" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </Modal> */}
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
    justifyContent: "flex-start",
    marginTop: 85,
    marginLeft: 310,
  },
  modalContent: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: colors.storyBorderColor,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.buttonBackgroundColor,
    padding: 10,
    borderRadius: 50,
  },
});

export default ProfileHeader;
