import { SafeAreaView, StyleSheet, FlatList, View, Text } from "react-native";
import React, { useContext } from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import BottomTabs, { bottomTabIcons } from "../components/home/BottomTabs";
import { useQuery } from "react-query";

import { UserContext } from "../context/UserContext";
import api from "../components/sevices/api";

const HomeScreen = ({ navigation }) => {
  const { token, setUser } = useContext(UserContext);
  // console.log({ token });

  const { isLoading, isError, data, error } = useQuery("posts", api.fetchPosts);
  // console.log(data.results[0]);

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    ); // Prikazuje se poruka "Učitavanje..." dok podaci nisu spremni.
  }

  if (isError) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    ); // Prikazuje se poruka o greški ako dođe do greške prilikom dohvata podataka.
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      {console.log(data.results)}
      <FlatList
        data={data.results}
        renderItem={({ item }) => <Post post={item} />}
      />
      {console.log(data.results[0])}

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
