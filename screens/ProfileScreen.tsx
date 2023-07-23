import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ProfileScreenHeader from "../components/profileScreen/ProfileScreenHeader";
import colors from "../colorPalette/colors";
import { useQuery } from "react-query";
import api from "../services/api";

const ProfileScreen = () => {
  const { isLoading, isError, data, error } = useQuery(
    "fetchUser",
    api.fetchUser
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ProfileScreenHeader data={data} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.backgroundColor,
  },
});

export default ProfileScreen;
