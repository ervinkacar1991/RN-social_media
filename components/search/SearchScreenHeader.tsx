import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons as Ionic } from "@expo/vector-icons";
import Feather from "react-native-vector-icons/Feather";
import SearchContent from "./SearchContent";
import { useQuery } from "react-query";
import api from "../../services/api";
import SearchBox from "./SearchBox";
import colors from "../../colorPalette/colors";
interface SearchTabsProps {
  initialTab?: number;
}

const SearchScreenHeader: React.FC<SearchTabsProps> = ({ initialTab = 0 }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState(initialTab);

  const { isLoading, isError, data, error } = useQuery(
    ["searchpeople", searchTerm],
    () => api.fetchSearchUsers(searchTerm),
    { enabled: !!searchTerm }
  );

  if (data) console.log(data.results);

  const onInputChange = (text: string) => {
    setSearchTerm(text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Ionic name="arrow-back" style={styles.icon} />
        </TouchableOpacity>
        <View
        //   style={{
        //     flex: 1,
        //     alignItems: "center",
        //   }}
        >
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
        data={data?.results}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isLoading={isLoading}
        isError={isError}
        error={error as Error}
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
