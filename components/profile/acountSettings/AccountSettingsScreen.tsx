import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import colors from "../../../colorPalette/colors";
import AccountSettingsHeader from "./header/AccountSettingsHeader";
import AccountSettingsBody from "./body/AccountSettingsBody";

const AccountSettingsScreen = ({ navigation, route }) => {
  const { profilePhoto } = route.params;
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <AccountSettingsHeader navigation={navigation} />
        <AccountSettingsBody
          profilePhoto={profilePhoto}
          navigation={navigation}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});

export default AccountSettingsScreen;
