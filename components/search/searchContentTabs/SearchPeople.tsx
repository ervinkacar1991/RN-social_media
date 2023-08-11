import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useCallback } from "react";
import colors from "../../../colorPalette/colors";
import Feather from "react-native-vector-icons/Feather";

const DefaultAvatarUri =
  "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg";

const SearchPeople = ({ people }) => {
  console.log({ people });

  const renderItem = useCallback(({ item }) => {
    return (
      <View style={styles.listItem}>
        <Image
          source={{
            uri: item.photo ? item.photo : DefaultAvatarUri,
          }}
          style={styles.photo}
        />
        <View style={styles.userInfo}>
          <View>
            <Text style={styles.username}>{item.username}</Text>
            <Text style={styles.name}>{item.name}</Text>
          </View>

          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.closeIcon}
          // onPress={() => deleteItem(item.id)}
        >
          <Feather name="x" size={15} color="#a9a4a4" />
        </TouchableOpacity>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  photo: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 2,
  },
  username: {
    fontSize: 16,
    color: "white",
    fontWeight: "500",
  },
  name: {
    fontSize: 13,
    color: "#a9a4a4",
  },
  followButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: colors.buttonBackgroundColor,
  },
  followButtonText: {
    color: "white",
    fontWeight: "600",
  },
  closeIcon: {
    padding: 5,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default SearchPeople;
