import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import colors from "../colorPalette/colors";
import api from "../services/api";
import { useQuery } from "react-query";

const ActivityScreen = () => {
  const { isLoading, data, error } = useQuery(
    "getNotifications",
    api.fetchNotifications
  );
  console.log(data);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={{ color: "white" }}>Activity Screennn</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
});

export default ActivityScreen;
