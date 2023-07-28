import { View, Text } from "react-native";
import React from "react";
import { useQuery } from "react-query";
import api from "../../../services/api";

const Posts = ({ username }) => {
  const {
    isLoading: isPostsLoading,
    data: postsData,
    isError: isPostsError,
  } = useQuery(["fetchUserPosts", username], () =>
    api.fetchUserPosts(username)
  );
  console.log(postsData);

  return (
    <View>
      <Text>Posts</Text>
    </View>
  );
};

export default Posts;
