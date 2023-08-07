import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useRef } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import colors from "../../colorPalette/colors";
import UserPostsDetailsHeader from "./UserPostsDetailsHeader";
import UserPostsDetailsBody from "./UserPostsDetailsBody";

const UserPostsDetails = ({ navigation, route }) => {
  const { posts, postId } = route.params;
  // console.log(postId);
  const username = posts.results[0].user.username;

  const flatlistRef = useRef(null);

  // useEffect(() => {
  const index = posts.results.findIndex((item) => item.id === postId);

  //   setTimeout(() => {
  //     flatlistRef?.current?.scrollToIndex({ animated: true, index: index });
  //   });
  // }, [1000]);

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
