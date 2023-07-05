import { StyleSheet } from "react-native";
import React, { useState } from "react";
import SearchBox from "../components/search/SearchBox";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SearchContent, { CustomError } from "../components/search/SearchContent";
import { useQuery } from "react-query";
import api from "../services/api";

interface SearchTabsProps {
  initialTab?: number;
}

const SearchScreen: React.FC<SearchTabsProps> = ({ initialTab = 0 }) => {
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
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <SearchBox onSearch={setSearchTerm} />
        <SearchContent
          data={data?.results}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isLoading={isLoading}
          isError={isError}
          error={error as CustomError}
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
