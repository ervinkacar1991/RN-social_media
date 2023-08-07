import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import colors from "../../colorPalette/colors";
import UserPostsDetailsHeader from "./UserPostsDetailsHeader";
import UserPostsDetailsBody from "./UserPostsDetailsBody";

const UserPostsDetails = ({ navigation, route }) => {
  const { posts, postId } = route.params;
  const username = posts.results[0].user.username;

  const index = posts.results.findIndex((item) => item.id === postId);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <UserPostsDetailsHeader username={username} navigation={navigation} />
        <FlatList
          // ref={flatlistRef}
          data={posts.results}
          renderItem={({ item }) => <UserPostsDetailsBody post={item} />}
          getItemLayout={(data, index) => ({
            length: 620,
            offset: 620 * index,
            index,
          })}
          initialScrollIndex={index}
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

export default UserPostsDetails;
