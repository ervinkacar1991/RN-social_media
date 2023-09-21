import { StyleSheet, FlatList } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import colors from "../../colorPalette/colors";
import UserPostsDetailsHeader from "./UserPostsDetailsHeader";
import UserPostsDetailsBody from "./UserPostsDetailsBody";
import { useMutation } from "react-query";
import useDeleteUserPost from "../../useDeleteUserPost";

const UserPostsDetails = ({ navigation, route }) => {
  const { posts, postId } = route.params;
  const username = posts.results[0].user.username;

  const index = posts.results.findIndex((item) => item.id === postId);

  const deleteUserPostMutation = useDeleteUserPost();

  const handleDeletePost = async () => {
    try {
      await deleteUserPostMutation.mutateAsync({
        username,
        post_id: postId,
      });
      console.log("Post deleted successfully");
      navigation.goBack();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <UserPostsDetailsHeader username={username} navigation={navigation} />

        <FlatList
          data={posts.results}
          renderItem={({ item }) => (
            <UserPostsDetailsBody
              post={item}
              onDelete={handleDeletePost}
              postId={postId}
            />
          )}
          getItemLayout={(data, index) => ({
            length: 591,
            offset: 594 * index,
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
