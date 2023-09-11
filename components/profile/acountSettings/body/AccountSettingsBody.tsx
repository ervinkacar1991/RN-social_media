import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import colors from "../../../../colorPalette/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import { UserContext } from "../../../../context/UserContext";

const DefaultProfilePhotoUri = "https://i.stack.imgur.com/l60Hf.png";

const AccountSettingsBody = ({ profilePhoto, navigation }) => {
  const { handleLogout } = useContext(UserContext);

  const onLogout = () => {
    handleLogout();
  };
  return (
    <View style={styles.container}>
      {/* Gornji red sa profilnom slikom, imenom i edit poljem */}
      <View style={styles.rowContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{
              uri: profilePhoto ? profilePhoto : DefaultProfilePhotoUri,
            }}
            style={styles.profileImage}
          />
          <Text style={styles.nameStyle}>name</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
          <Text style={styles.editStyle}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optionsContainer}>
        <OptionItem
          label="Change Password"
          iconName="key"
          index={0}
          onPress={() => {}}
        />
        <OptionItem
          label="Privacy Policy"
          iconName="shield"
          index={1}
          onPress={() => {}}
        />
        <OptionItem
          label="Contact Us"
          iconName="envelope"
          index={2}
          onPress={() => {}}
        />
        <OptionItem
          label="Blocked Accounts"
          iconName="ban"
          index={3}
          onPress={() => {}}
        />
        <OptionItem
          label="Logout"
          iconName="sign-out"
          index={4}
          onPress={onLogout}
        />
      </View>
    </View>
  );
};

const OptionItem = ({ label, iconName, index, onPress }) => {
  const isLast = index === 4;
  return (
    <TouchableOpacity
      style={[styles.optionItem, isLast && { borderBottomWidth: 0 }]}
      onPress={onPress}
    >
      <View style={styles.singleItem}>
        <Icon name={iconName} size={20} color={colors.secondaryTextColor} />
        <Text style={styles.optionsText}>{label}</Text>
      </View>
      <Icon name="chevron-right" size={15} color={colors.secondaryTextColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    padding: 13,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.dividerBackgroundColor,
    padding: 20,
    borderRadius: 15,
    marginTop: 30,
  },
  nameStyle: {
    color: "white",
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 15,
  },
  editStyle: {
    color: colors.secondaryTextColor,
    fontSize: 15,
    fontWeight: "400",
  },

  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  optionsContainer: {
    marginTop: 30,
    backgroundColor: colors.dividerBackgroundColor,
    // padding: 20,
    borderRadius: 15,
  },
  optionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#736f6f",
  },
  singleItem: {
    flexDirection: "row",
  },
  optionsText: {
    fontSize: 16,
    marginLeft: 20,
    color: colors.primaryTextColor,
  },
});

export default AccountSettingsBody;
