import { StyleSheet } from "react-native";
import React, { useState } from "react";
import SearchBox from "../components/search/SearchBox";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SearchContent, { CustomError } from "../components/search/SearchContent";
import SearchScreenHeader from "../components/search/SearchScreenHeader";
import colors from "../colorPalette/colors";

const SearchScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SearchScreenHeader />
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
