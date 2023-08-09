import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useQuery } from "react-query";
import api from "../../../services/api";
import { ActivityIndicator } from "react-native";
import colors from "../../../colorPalette/colors";
import UserInfoSearchBox from "./UserInfoSearchBox";

const DefaultAvatarUri =
  "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg";

const UserInfoFollowersList = ({ item }) => {
  const handleFollowPress = () => {
    // Logika za follow
  };

  const handleRemovePress = () => {
    // Logika za remove
  };

  return (
    <View style={styles.listItem}>
      <Image
        source={{
          uri: item.photo ? item.photo : DefaultAvatarUri,
        }}
        style={styles.userPhoto}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.username}>{item.username}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={item.following ? handleRemovePress : handleFollowPress}
        >
          <Text style={styles.buttonText}>
            {item.following ? "Remove" : "Follow"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ListOfFollowers = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  const {
    isLoading,
    data: userFollowersInfo,
    isError,
  } = useQuery("fetchUserFollowers", () => api.fetchUserFollowers(user), {
    enabled: !!user,
  });

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  if (!userFollowersInfo) {
    return (
      <View>
        <Text>Evo sad će</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>Error occurred while fetching data</Text>
      </View>
    );
  }

  const filteredFollowers = userFollowersInfo.results.filter((follower) =>
    follower.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <UserInfoSearchBox onSearch={handleSearch} />
      <FlatList
        data={filteredFollowers}
        renderItem={UserInfoFollowersList}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 2,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundColor,
  },
  userPhoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    color: "white",
    fontWeight: "500",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: colors.buttonBackgroundColor,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
});

export default ListOfFollowers;
