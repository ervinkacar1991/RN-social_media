import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const ProfilePhotoEditScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>ProfilePhotoEditScreen</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ProfilePhotoEditScreen;
