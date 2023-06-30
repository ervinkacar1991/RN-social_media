import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const SearchTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["People", "Users", "Posts"];

  return (
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
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 10,
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
