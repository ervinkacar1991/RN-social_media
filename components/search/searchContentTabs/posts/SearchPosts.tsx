import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../../../../colorPalette/colors";
import SearchPostsItem from "./SearchPostsItem";
import SearchPostItemExample from "./SearchPostItemExample";

const SearchPosts = ({ posts }) => {
  return (
    <View style={styles.container}>
      {/* <SearchPostsItem posts={posts} /> */}
      <SearchPostItemExample posts={posts} />
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
