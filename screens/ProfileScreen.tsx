import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useRef } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native-paper";
import { useQuery } from "react-query";
import api from "../services/api";
import colors from "../colorPalette/colors";
import ProfileBottom from "../components/profile/bottomTabs/ProfileBottom";
import UsersPostList from "../components/profile/UsersPostList";
import UserProfileButtons from "../components/profile/UserProfileButtons";
import ProfileHeader from "../components/profile/ProfileHeader";
import BottomSheet from "@gorhom/bottom-sheet";

const ProfileScreen = () => {
  const tabs = ["Posts"];

  const fetchUserData = () => api.fetchUser();
  const fetchUserPets = (username) => api.fetchUserEntities(username);

  const bottomSheetRef = useRef(null);

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
  const renderBottomSheetContent = () => (
    <View style={styles.bottomSheetContent}>
      <TouchableOpacity style={styles.bottomSheetItem}>
        <Text style={styles.bottomSheetText}>Change Profile Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomSheetItem}>
        <Text style={styles.bottomSheetText}>Share</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          ListHeaderComponent={
            <>
              <ProfileHeader user={userData} bottomSheetRef={bottomSheetRef} />
              <UserProfileButtons />
              <UsersPostList pets={userPets} />
            </>
          }
          data={tabs}
          renderItem={({ index }) => (
            <ProfileBottom
              key={index}
              username={userData?.username}
              // initialTab={index}
            />
          )}
          keyExtractor={(item) => item}
          stickyHeaderIndices={[1]}
        />
        <BottomSheet
          ref={bottomSheetRef}
          style={{ marginTop: -48 }}
          enablePanDownToClose
          snapPoints={[0.5, 200]}
          containerHeight={300}
        >
          {renderBottomSheetContent()}
        </BottomSheet>
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
  bottomSheetContent: {
    width: "100%",
    padding: 20,
    backgroundColor: "#afb4f3",
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
});

export default ProfileScreen;
