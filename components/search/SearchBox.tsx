import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Ionicons as Ionic } from "@expo/vector-icons";

const SearchBox = ({ onSearch }) => {
  const handleInputChange = (text) => {
    onSearch(text);
    console.log(text);
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        position: "relative",
        marginTop: 10,
      }}
    >
      <Ionic
        name="search"
        size={18}
        color="gray"
        style={{
          position: "absolute",
          left: 25,
          zIndex: 1,
          opacity: 0.7,
        }}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#909090"
        style={styles.searchInput}
        onChangeText={handleInputChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    width: "90%",
    backgroundColor: "#EBEBEB",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
    padding: 8,
    paddingLeft: 40,
  },
});

export default SearchBox;
