import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useQuery } from "react-query";
import api from "../../../services/api";
import colors from "../../../colorPalette/colors";
import { ActivityIndicator } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const numColumns = 3;
const imageSize = (windowWidth - 16 * (numColumns - 3)) / numColumns;

const Posts = ({ username }) => {
  const navigation = useNavigation() as any;
  const renderPostItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("UserPostsDetails", {
          posts: postsData,
          postId: item.id,
        })
      }
    >
      <View
        style={[styles.postContainer, { width: imageSize, height: imageSize }]}
      >
        <Image
          style={styles.postImage}
          source={{ uri: item.images[0].image }}
        />
      </View>
    </TouchableOpacity>
  );
  const {
    isLoading: isPostsLoading,
    data: postsData,
    isError: isPostsError,
  } = useQuery(["fetchUserPosts", username], () =>
    api.fetchUserPosts(username)
  );

  // console.log(postsData.results.map((item) => item.id));

  if (isPostsLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  if (isPostsError) {
    return (
      <View style={styles.errorContainer}>
        <Feather name="alert-triangle" size={32} color="white" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={postsData.results}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.backgroundColor,
  },

  postContainer: {
    marginVertical: 1,
    marginHorizontal: 1,
  },

  postImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundColor,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundColor,
  },
});

export default Posts;
