import { StyleSheet, FlatList, View, Text } from "react-native";
import React, { useContext, useRef } from "react";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import { useQuery } from "react-query";
import { UserContext } from "../context/UserContext";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import api from "../services/api";
import Feather from "react-native-vector-icons/Feather";
import Recommended from "../components/home/Recommended";
import colors from "../colorPalette/colors";

interface CustomError {
  message: string;
}

const HomeScreen = ({ navigation }) => {
  const { token } = useContext(UserContext);
  const flatListRef = useRef(null);

  const { isLoading, isError, data, error } = useQuery("posts", api.fetchPosts);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.backgroundColor,
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
  const scrollToFirstPost = () => {
    flatListRef.current.scrollToIndex({ index: 0, animated: true });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} onHomeButtonPress={scrollToFirstPost} />

        <FlatList
          ref={flatListRef}
          data={data.results.reverse()}
          ListHeaderComponent={<Recommended />}
          renderItem={({ item }) => <Post post={item} />}
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

export default HomeScreen;
