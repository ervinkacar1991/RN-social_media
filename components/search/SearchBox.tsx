import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Ionicons as Ionic } from "@expo/vector-icons";
import colors from "../../colorPalette/colors";

const SearchBox = ({ onSearch }) => {
  const handleInputChange = (text) => {
    onSearch(text);
    // console.log(text);
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
          top: 20,
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
    width: "95%",
    backgroundColor: colors.userInfoSearchBoxBackgroundColor,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 17,
    padding: 9,
    paddingLeft: 40,
    marginTop: 10,
    color: colors.primaryTextColor,
  },
});

export default SearchBox;
