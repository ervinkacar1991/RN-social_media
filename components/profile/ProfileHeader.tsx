import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useContext, useState } from "react";
import colors from "../../colorPalette/colors";
import ProfileInfo from "./ProfileInfo";
import { Feather } from "@expo/vector-icons";
import { UserContext } from "../../context/UserContext";

const DefaultCovereUri =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRHYig3H-sA-cJkJq7SKQTf24WWhWDiK6PbA&usqp=CAU";

const DefaultProfilePhotoUri = "https://i.stack.imgur.com/l60Hf.png";

const ProfileHeader = ({ user, bottomSheetRef }) => {
  const { handleLogout } = useContext(UserContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const onLogout = () => {
    handleLogout();
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const onMenuItemPress = (menuItem) => {
    // Logika za menu iteme

    // Zatvaranje dropdowna
    toggleDropdown();
  };
  const onBackgroundPress = () => {
    toggleDropdown();
  };

  return (
    <View>
      <TouchableOpacity>
        <Image
          source={{
            uri: user?.cover ? user?.cover : DefaultCovereUri,
          }}
          style={styles.coverPhoto}
          resizeMode="cover"
        />
      </TouchableOpacity>
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
          <TouchableOpacity onPress={toggleDropdown}>
            <Feather name="more-vertical" style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
        <Modal
          visible={isDropdownVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={toggleDropdown}
        >
          <TouchableWithoutFeedback onPress={onBackgroundPress}>
            <View style={styles.modalBackground}>
              <View style={styles.dropdownContainer}>
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => onMenuItemPress("Change Cover")}
                >
                  <Text style={styles.dropdownText}>Change Cover</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => onMenuItemPress("Share")}
                >
                  <Text style={styles.dropdownText}>Share</Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => onMenuItemPress("Settings")}
                >
                  <Text style={styles.dropdownText}>Settings</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>

      <ProfileInfo user={user?.username} />

      <View style={styles.profileInfoContainer}>
        <TouchableOpacity onPress={() => bottomSheetRef.current?.expand()}>
          <Image
            source={{
              uri: user?.photo || DefaultProfilePhotoUri,
            }}
            style={styles.profilePhoto}
            resizeMode="cover"
          />
        </TouchableOpacity>

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
        <TouchableOpacity style={styles.plusIconContainer}>
          <Feather
            name="plus"
            size={22}
            color="white"
            onPress={toggleModal}
            style={styles.highlightedIcon}
          />
        </TouchableOpacity>
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },

  modalImage: {
    width: 350,
    height: 350,
    borderRadius: 175,
    marginBottom: 200,
    borderColor: colors.storyBorderColor,
    borderWidth: 2,
    aspectRatio: 1,
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
    borderWidth: 4,
    borderColor: "black",
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
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    // justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 15,
    paddingVertical: 50,
  },

  dropdownContainer: {
    marginTop: 30,
    marginRight: 10,
    alignSelf: "flex-end",
    backgroundColor: "rgba(209, 203, 208, 0.7)",
    borderRadius: 10,
    elevation: 5,
    paddingHorizontal: 16,
  },
  dropdownItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#817f7f",
  },
  dropdownText: {
    fontSize: 18,
  },
  bottomSheetContent: {
    width: "100%",
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomSheetItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  bottomSheetText: {
    fontSize: 18,
    color: "#333",
  },
  plusIconContainer: {
    position: "absolute",
    width: 35,
    height: 35,
    borderRadius: 17.5,
    justifyContent: "center",
    alignItems: "center",
    bottom: 30,
    right: 30,
    backgroundColor: colors.buttonBackgroundColor,
    borderColor: colors.backgroundColor,
    borderWidth: 4,
  },
  highlightedIcon: {
    textShadowColor: "rgba(255, 255, 255, 0.5)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 3,
  },
});

export default ProfileHeader;
