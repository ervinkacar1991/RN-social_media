import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProfileScreenHeader from "../components/profileScreen/ProfileScreenHeader";
import EditProfile from "../components/profileScreen/EditProfile";

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ProfileScreenHeader />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#01200F",
  },
});

export default ProfileScreen;
