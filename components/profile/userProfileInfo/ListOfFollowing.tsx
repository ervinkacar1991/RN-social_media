import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { useQuery } from "react-query";
import api from "../../../services/api";
import { ActivityIndicator } from "react-native";
import colors from "../../../colorPalette/colors";

////// TO DOOO, PROMENITI LOGIKU ZA FOLLOWING...

const DefaultAvatarUri =
  "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg";

const UserInfoFollowingList = ({ item }) => {
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

const ListOfFollowing = ({ user }) => {
  const {
    isLoading,
    data: userFollowingInfo,
    isError,
  } = useQuery("fetchUserFollowing", () => api.fetchUserFollowing(user), {
    enabled: !!user,
  });

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }
  if (!userFollowingInfo) {
    return (
      <View>
        <Text>Evo sad ce</Text>
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

  if (userFollowingInfo.results.length === 0) {
    return (
      <View style={styles.messageContainer}>
        <Text style={styles.emptyMessage}>
          You are not following any users.
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={userFollowingInfo.results}
        renderItem={UserInfoFollowingList}
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
  emptyMessage: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 70,
  },
  messageContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListOfFollowing;
