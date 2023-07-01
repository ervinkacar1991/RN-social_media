import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import SearchPeople from "./searchContentTabs/SearchPeople";
import SearchUsers from "./searchContentTabs/SearchUsers";
import SearchPosts from "./searchContentTabs/SearchPosts";

const SearchTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["People", "Users", "Posts"];

  let renderedComponent: React.ReactNode;

  switch (activeTab) {
    case 0:
      renderedComponent = <SearchPeople />;
      break;
    case 1:
      renderedComponent = <SearchUsers />;
      break;
    case 2:
      renderedComponent = <SearchPosts />;
      break;
    default:
      renderedComponent = null;
  }

  return (
    <View>
      <View style={styles.tabsContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tabButton,
              activeTab === index && styles.activeTabButton,
            ]}
            onPress={() => setActiveTab(index)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === index && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {renderedComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginTop: 10,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
  activeTabButton: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  tabText: {
    color: "gray",
    fontSize: 16,
  },
  activeTabText: {
    color: "white",
    fontSize: 16,
  },
});

export default SearchTabs;
