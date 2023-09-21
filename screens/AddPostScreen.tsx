import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import colors from "../colorPalette/colors";
import AddPostHeader from "../components/addPost/header/AddPostHeader";
import AddPostBody from "../components/addPost/body/AddPostBody";

const AddPostScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <AddPostHeader navigation={navigation} />
        <AddPostBody navigation={navigation} />
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

export default AddPostScreen;
