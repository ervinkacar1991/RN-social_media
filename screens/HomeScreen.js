import { SafeAreaView, StyleSheet, ScrollView, FlatList } from "react-native";
import React from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { POSTS } from "../data/posts";
import BottomTabs, { bottomTabIcons } from "../components/home/BottomTabs";
import { useQuery } from "react-query";
import axios from "axios";

const HomeScreen = ({ navigation }) => {
  const { isLoading, isError, data, error } = useQuery("posts", () => {
    return axios
      .get("https://api-staging.petigo.app/api/v1/feed/posts/", {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Token 6fba314474400a80e51c9e8595d60cda0fd6bd8a07b6f68a528731b7f3b38d5d",
        },
      })
      .then((res) => res.data);
  });

  // console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />

      <FlatList data={POSTS} renderItem={({ item }) => <Post post={item} />} />
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default HomeScreen;
