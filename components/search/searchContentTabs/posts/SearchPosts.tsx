import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../../../../colorPalette/colors";
import SearchPostItem from "./SearchPostItem";
import { ActivityIndicator } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const SearchPosts = ({ posts, postsLoading, postsError }) => {
  if (postsLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primaryTextColor} />
      </View>
    );
  }

  if (postsError) {
    return (
      <View style={styles.errorContainer}>
        <Ionicons
          name="alert-circle-outline"
          size={40}
          color={colors.errorColor}
        />
        <Text style={styles.errorText}>Error loading data.</Text>
      </View>
    );
  }
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundColor,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundColor,
  },
  errorText: {
    color: colors.errorColor,
    fontSize: 18,
    marginTop: 10,
  },
});

export default SearchPosts;
