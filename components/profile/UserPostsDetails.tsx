import { View, Text } from "react-native";
import React from "react";

const UserPostsDetails = ({ route }) => {
  const { posts } = route.params;
  return (
    <View>
      <Text>UserPostsDetails</Text>
    </View>
  );
};

export default UserPostsDetails;
