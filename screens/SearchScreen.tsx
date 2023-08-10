import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SearchScreenHeader from "../components/search/SearchScreenHeader";
import colors from "../colorPalette/colors";

const SearchScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SearchScreenHeader navigation={navigation} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    // position: "relative",
  },
});

export default SearchScreen;
