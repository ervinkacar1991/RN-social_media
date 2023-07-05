import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ProfileBody from "../components/profileScreen/ProfileBody";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"; // Dodata linija

const ProfileScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ProfileBody />
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
