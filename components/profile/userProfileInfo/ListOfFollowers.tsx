import { View, Text } from "react-native";
import React from "react";
import { useQuery } from "react-query";
import api from "../../../services/api";

const ListOfFollowers = ({ user }) => {
  // console.log(user);
  const {
    isLoading,
    data: userInfo,
    isError,
  } = useQuery("fetchUserFollowers", () => api.fetchUserFollowers(user), {
    enabled: !!user,
  });
  console.log(userInfo);
  if (!userInfo) {
    return (
      <View>
        <Text>Evo sad ce</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>ListOfFollowers</Text>
    </View>
  );
};

export default ListOfFollowers;
