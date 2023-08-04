// ProfileScreen.js

import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native-paper";
import { useQuery } from "react-query";
import api from "../services/api";
import colors from "../colorPalette/colors";
import ProfileBottom from "../components/profile/bottomTabs/ProfileBottom";
import UsersPostList from "../components/profile/UsersPostList";
import UserProfileButtons from "../components/profile/UserProfileButtons";
import ProfileHeader from "../components/profile/ProfileHeader";
import BottomProfileTabView from "../components/profile/bottomTabs/BottomProfileTabView";

const ProfileScreen = () => {
  const tabs = ["Posts"];

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

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          ListHeaderComponent={
            <>
              <ProfileHeader user={userData} />
              <UserProfileButtons />
              <UsersPostList pets={userPets} />
            </>
          }
          data={tabs}
          // StickyHeaderComponent={() => ()}
          renderItem={({ index }) => (
            <ProfileBottom
              key={index}
              username={userData?.username}
              initialTab={index}
            />
          )}
          keyExtractor={(item) => item}
        />
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
});

export default ProfileScreen;
