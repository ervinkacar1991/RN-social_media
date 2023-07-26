import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useQuery } from "react-query";
import api from "../../services/api";
import { ActivityIndicator } from "react-native-paper";
import colors from "../../colorPalette/colors";

const UsersPostList = ({ username }) => {
  const { isLoading, isError, data, error } = useQuery(
    ["fetchUserPets", username],
    () => api.fetchUserEntities(username)
  );
  //   console.log(data);

  if (isLoading) {
    return <ActivityIndicator size="large" color="gray" />;
  }

  return (
    <View>
      <Text style={styles.storyHighlights}>Story Highlights</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity activeOpacity={0.7} style={{ alignItems: "center" }}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              borderColor: "white",
              opacity: 0.7,
              marginHorizontal: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo name="plus" size={24} color="white" />
          </View>
          <Text style={styles.storyName}>Add Post</Text>
        </TouchableOpacity>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.container}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.7} style={styles.storyContainer}>
              <View>
                <Image
                  source={{ uri: item.photo_thumbnail }}
                  style={styles.storyImage}
                />
              </View>
              <Text style={styles.storyName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  storyHighlights: {
    padding: 10,
    color: "white",
    letterSpacing: 1,
    fontSize: 14,
  },
  container: {
    paddingHorizontal: 10,
  },
  storyContainer: {
    marginRight: 15,
    alignItems: "center",
  },

  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.storyBorderColor,
  },
  storyName: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },
});

export default UsersPostList;
