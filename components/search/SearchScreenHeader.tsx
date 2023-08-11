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

const SearchScreenHeader = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    const delaySearch = debounce((text) => {
      setDebouncedSearchTerm(text);
      console.log("Debounced search term:", text);
    }, 5000);

    // if (searchTerm !== debouncedSearchTerm) {
    //   delaySearch();
    // }
    delaySearch(searchTerm);

    return delaySearch.cancel;
  }, [searchTerm]);

  const {
    isLoading: usersLoading,
    isError: usersError,
    data: usersData,
    error: usersQueryError,
  } = useQuery(
    ["searchusers", debouncedSearchTerm],
    () => api.fetchSearchUsers(debouncedSearchTerm),
    { enabled: !!debouncedSearchTerm }
  );

  const {
    isLoading: postsLoading,
    isError: postsError,
    data: postsData,
    error: postsQueryError,
  } = useQuery(
    ["searchposts", debouncedSearchTerm],
    () => api.fetchSearchPosts(debouncedSearchTerm),
    { enabled: !!debouncedSearchTerm }
  );

  const {
    isLoading: peopleLoading,
    isError: peopleError,
    data: peopleData,
    error: peopleQueryError,
  } = useQuery(
    ["searchpeople", debouncedSearchTerm],
    () => api.fetchSearchPeople(debouncedSearchTerm),
    { enabled: !!debouncedSearchTerm }
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

      <SearchBox onSearch={setSearchTerm} />

      <SearchContent
        usersData={usersData}
        postsData={postsData}
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
