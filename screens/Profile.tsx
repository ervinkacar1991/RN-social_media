import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import colors from "../colorPalette/colors";
import { useQuery } from "react-query";
import api from "../services/api";
import { Feather } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native-paper";
import ProfileHeader from "../components/profile/ProfileHeader";
import UsersPostList from "../components/profile/UsersPostList";
import UserProfileButtons from "../components/profile/UserProfileButtons";
import BottomProfileTabView from "../components/profile/bottomTabs/BottomProfileTabView";

const Profile = () => {
  const fetchUserData = () => api.fetchUser();
  const fetchUserPets = (username) => api.fetchUserEntities(username);

  const {
    isLoading: isUserLoading,
    data: userData,
    isError: isUserError,
  } = useQuery("fetchUser", fetchUserData);

  const {
    isLoading: isPetsLoading,
    data: userPets,
    isError: isPetsError,
  } = useQuery(
    ["fetchUserPets", userData?.username],
    () => fetchUserPets(userData?.username),
    {
      enabled: !!userData?.username,
    }
  );

  if (isUserLoading || isPetsLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  if (isUserError || isPetsError) {
    return (
      <View style={styles.errorContainer}>
        <Feather name="alert-triangle" size={32} color="white" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ProfileHeader user={userData} />
        <UserProfileButtons />
        <UsersPostList pets={userPets} />
        <BottomProfileTabView />
        {/* <Text style={{ color: "white" }}>Profile</Text> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundColor,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundColor,
  },
});

export default Profile;
