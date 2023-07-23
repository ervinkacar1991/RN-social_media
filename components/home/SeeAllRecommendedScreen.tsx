import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons as Ionic } from "@expo/vector-icons";
import Feather from "react-native-vector-icons/Feather";
import { suggestionsData } from "../../suggestionsData";

const SeeAllRecommendedScreen = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
              Suggested For You
            </Text>
          </View>

          <Feather name="more-vertical" style={{ color: "#01200F" }} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#01200F",
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

export default SeeAllRecommendedScreen;
