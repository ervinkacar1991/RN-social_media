import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import colors from "../colorPalette/colors";
import { useQuery } from "react-query";
import api from "../services/api";
import ProfileScreenContent from "../components/profileScreen/ProfileScreenContent";
import { Feather } from "@expo/vector-icons";

const ProfileScreen = () => {
  const { isLoading, isError, data, error } = useQuery(
    "fetchUser",
    api.fetchUser
  );

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.backgroundColor,
        }}
      >
        {/* <Text style={{ color: "white" }}>Loading...</Text> */}
        <Feather name="loader" size={32} color="white" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ProfileScreenContent data={data} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default ProfileScreen;
