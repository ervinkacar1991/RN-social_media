import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBox from "../components/search/SearchBox";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"; // Dodata linija
import SearchContent from "../components/search/SearchContent";
import { useQuery } from "react-query";
import api from "../services/api";

const SearchScreen = () => {
  const { isLoading, isError, data, error } = useQuery("posts", api.fetchPosts);

  if (data) console.log(data.results);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SearchBox />
        <SearchContent
          data={data}
          isLoading={isLoading}
          isError={isError}
          error={error}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#01200F",
    flex: 1,
    position: "relative",
  },
});

export default SearchScreen;
