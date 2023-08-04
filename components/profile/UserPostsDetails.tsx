import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import colors from "../../colorPalette/colors";
import UserPostsDetailsHeader from "./UserPostsDetailsHeader";
import { Divider } from "react-native-paper";
import UserPostsDetailsBody from "./UserPostsDetailsBody";

const UserPostsDetails = ({ navigation, route }) => {
  const { posts } = route.params;
  // console.log(posts.results);
  const username = posts.results[0].user.username;
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <UserPostsDetailsHeader username={username} navigation={navigation} />
        <Divider style={styles.divider} />
        <FlatList
          data={posts.results}
          renderItem={({ item }) => <UserPostsDetailsBody post={item} />}
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
  divider: {
    marginTop: 10,
    width: "90%",
    alignSelf: "center",
    backgroundColor: colors.dividerBackgroundColor,
  },
});

export default UserPostsDetails;
