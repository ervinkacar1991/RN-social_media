import { StyleSheet, FlatList, View, Text } from "react-native";
import React, { useContext } from "react";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import { useQuery } from "react-query";
import { UserContext } from "../context/UserContext";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"; // Dodata linija
import api from "../services/api";
import Feather from "react-native-vector-icons/Feather";

interface CustomError {
  message: string;
}

const HomeScreen = ({ navigation }) => {
  const { token } = useContext(UserContext);

  const { isLoading, isError, data, error } = useQuery("posts", api.fetchPosts);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#01200F",
        }}
      >
        {/* <Text style={{ color: "white" }}>Loading...</Text> */}
        <Feather name="loader" size={32} color="white" />
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>Error: {(error as CustomError).message}</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} />
        <Stories />
        {/* {console.log(data.results)} */}
        <FlatList
          data={data.results.reverse()}
          renderItem={({ item }) => <Post post={item} />}
        />

        {/* <BottomTabs icons={bottomTabIcons} /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#01200F",
    flex: 1,
  },
});

export default HomeScreen;
