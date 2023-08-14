import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../../../colorPalette/colors";

const SearchPosts = ({ posts }) => {
  console.log({ posts });
  return (
    <View style={styles.container}>
      {/* <Text style={{ color: "white" }}>{posts.user.id}</Text> */}
      {posts.map((post) => (
        <Text key={post.id} style={{ color: "white" }}>
          User ID: {post.user.id}
        </Text>
      ))}
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
