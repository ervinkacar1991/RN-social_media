import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useRef } from "react";
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
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const tabs = ["Posts"];

  const fetchUserData = () => api.fetchUser();
  const fetchUserPets = (username) => api.fetchUserEntities(username);

  const bottomSheetRef = useRef(null);
  const navigation = useNavigation() as any;

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      bottomSheetRef.current?.close();
    });

    return unsubscribe;
  }, [navigation]);

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
      <TouchableOpacity
        style={styles.bottomSheetItem}
        onPress={() =>
          navigation.navigate("ProfilePhotoEditScreen", {
            profilePhoto: userData?.photo,
          })
        }
      >
        <Icon name="camera" size={20} color="#ddd7d7" style={styles.icon} />
        <Text style={styles.bottomSheetText}>View or edit profile photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomSheetItem}>
        <Icon name="share-2" size={20} color="#ddd7d7" style={styles.icon} />
        <Text style={styles.bottomSheetText}>Share</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => bottomSheetRef.current?.close()}
        >
          <View style={styles.contentContainer}>
            <FlatList
              ListHeaderComponent={
                <>
                  <ProfileHeader
                    user={userData}
                    bottomSheetRef={bottomSheetRef}
                  />
                  <UserProfileButtons />
                  <UsersPostList pets={userPets} />
                </>
              }
              data={tabs}
              renderItem={({ index }) => (
                <ProfileBottom key={index} username={userData?.username} />
              )}
              keyExtractor={(item) => item}
              stickyHeaderIndices={[1]}
            />
          </View>
        </TouchableWithoutFeedback>
        <BottomSheet
          ref={bottomSheetRef}
          style={{ marginTop: -35 }}
          enablePanDownToClose
          snapPoints={[0.5, 200]}
          containerHeight={300}
          backgroundComponent={({ style }) => (
            <View
              style={[
                style,
                {
                  backgroundColor: "#393737",
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  borderColor: "#676666",
                  borderWidth: 0.5,
                },
              ]}
            />
          )}
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
  contentContainer: {
    flex: 1,
  },
  bottomSheetContent: {
    width: "100%",
    padding: 20,
    backgroundColor: "#393737",
  },
  bottomSheetItem: {
    flexDirection: "row",
    paddingVertical: 15,
  },
  bottomSheetText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ece9e9",
  },
  icon: {
    marginRight: 10,
  },
});

export default ProfileScreen;
