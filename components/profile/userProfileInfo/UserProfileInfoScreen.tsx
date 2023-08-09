import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import colors from "../../../colorPalette/colors";
import UserProfileInfoTabView from "../../../components/profile/userProfileInfo/UserProfileInfoTabView";
import UserProfileInfoHeader from "./UserProfileInfoHeader";

const UserProfileInfoScreen = ({ navigation, route }) => {
  const { user } = route.params;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <UserProfileInfoHeader navigation={navigation} user={user} />

        <UserProfileInfoTabView user={user} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },

  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    fontSize: 30,
    color: "white",
  },
});

export default UserProfileInfoScreen;
