import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons as Ionic } from "@expo/vector-icons";
import Feather from "react-native-vector-icons/Feather";
import SearchContent from "./SearchContent";
import { useQuery } from "react-query";
import api from "../../services/api";
import SearchBox from "./SearchBox";
import colors from "../../colorPalette/colors";
import { debounce } from "lodash";
import { useSearch } from "../../context/SearchContext";

const SearchScreenHeader = ({ navigation }) => {
  const { searchTerm, setSearchTerm } = useSearch();

  const delaySearch = debounce(() => {
    peopleRefetch();
    usersRefetch();
    postsRefetch();
  }, 5000);

  // if (searchTerm !== debouncedSearchTerm) {
  //   delaySearch();
  // }

  const {
    isLoading: usersLoading,
    isError: usersError,
    data: usersData,
    error: usersQueryError,
    refetch: usersRefetch,
  } = useQuery(
    ["searchusers", searchTerm],
    () => api.fetchSearchUsers(searchTerm),
    { enabled: false }
  );

  const {
    isLoading: postsLoading,
    isError: postsError,
    data: postsData,
    error: postsQueryError,
    refetch: postsRefetch,
  } = useQuery(
    ["searchposts", searchTerm],
    () => api.fetchSearchPosts(searchTerm),
    { enabled: false }
  );

  const {
    isLoading: peopleLoading,
    isError: peopleError,
    data: peopleData,
    error: peopleQueryError,
    refetch: peopleRefetch,
  } = useQuery(
    ["searchpeople", searchTerm],
    () => api.fetchSearchPeople(searchTerm),
    { enabled: false }
  );

  // if (usersData) console.log(usersData);
  // if (postsData) console.log(postsData);
  // if (peopleData) console.log(peopleData);

  const popleResult = peopleData?.results || [];
  const usersResult = usersData?.results || [];
  const postsResult = postsData?.results || [];

  const onInputChange = (text: string) => {
    setSearchTerm(text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionic name="md-chevron-back" style={styles.icon} />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: 15,
              color: "white",
              fontWeight: "bold",
              marginRight: 20,
            }}
          >
            Search
          </Text>
        </View>

        <Feather name="more-vertical" style={{ color: "#01200F" }} />
      </View>

      <SearchBox
        onSearch={(text) => {
          setSearchTerm(text);
          delaySearch();
        }}
      />

      <SearchContent
        usersData={usersResult}
        postsData={postsResult}
        peopleData={popleResult}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.backgroundColor,
    padding: 10,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    fontSize: 30,
    color: "white",
  },
});

export default SearchScreenHeader;
