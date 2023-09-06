import { View, Text, StyleSheet } from "react-native";
import React from "react";
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

  const delaySearch = debounce((text) => {
    setSearchTerm(text);
  }, 200);

  const {
    isLoading: usersLoading,
    isError: usersError,
    data: usersData,
    error: usersQueryError,
  } = useQuery(
    ["searchusers", searchTerm],
    () => api.fetchSearchUsers(searchTerm),
    { enabled: !!searchTerm, keepPreviousData: true }
  );

  const {
    isLoading: postsLoading,
    isError: postsError,
    data: postsData,
    error: postsQueryError,
  } = useQuery(
    ["searchposts", searchTerm],
    () => api.fetchSearchPosts(searchTerm),
    { enabled: !!searchTerm, keepPreviousData: true }
  );

  const {
    isLoading: peopleLoading,
    isError: peopleError,
    data: peopleData,
    error: peopleQueryError,
  } = useQuery(
    ["searchpeople", searchTerm],
    () => api.fetchSearchPeople(searchTerm),
    { enabled: !!searchTerm, keepPreviousData: true }
  );

  const peopleResult = peopleData?.results || [];
  const usersResult = usersData?.results || [];
  const postsResult = postsData?.results || [];

  const onInputChange = (text: string) => {
    delaySearch(text);
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
              fontSize: 21,
              color: "white",
              fontWeight: "600",
              letterSpacing: 0.7,
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
          onInputChange(text);
        }}
      />

      <SearchContent
        usersData={usersResult}
        postsData={postsResult}
        peopleData={peopleResult}
        usersLoading={usersLoading}
        usersError={usersError}
        postsLoading={postsLoading}
        postsError={postsError}
        peopleLoading={peopleLoading}
        peopleError={peopleError}
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
