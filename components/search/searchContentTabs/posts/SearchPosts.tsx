import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../../../../colorPalette/colors";
import SearchPostItem from "./SearchPostItem";

const SearchPosts = ({ posts }) => {
  return (
    <View style={styles.container}>
      <SearchPostItem posts={posts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});

export default SearchPosts;
