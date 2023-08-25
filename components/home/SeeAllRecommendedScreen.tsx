import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useState, useCallback } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Ionicons as Ionic } from "@expo/vector-icons";
import Feather from "react-native-vector-icons/Feather";
import colors from "../../colorPalette/colors";
import { suggestionsData } from "../../suggestionsData";
import { Divider } from "react-native-paper";
import { set } from "react-native-reanimated";

const DefaultAvatarUri =
  "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg";

const SeeAllRecommendedScreen = ({ navigation }) => {
  const [data, setData] = useState(suggestionsData);

  const deleteItem = useCallback(
    (id) => {
      const newData = data.filter((item) => item.id !== id);
      setData(newData);
    },
    [data]
  );

  const renderItem = useCallback(
    ({ item }) => {
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
            onPress={() => deleteItem(item.id)}
          >
            <Feather name="x" size={15} color="#a9a4a4" />
          </TouchableOpacity>
        </View>
      );
    },
    [deleteItem]
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic name="arrow-back" style={styles.icon} />
          </TouchableOpacity>
          <View>
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

          <Feather name="more-vertical" style={{ color: "black" }} />
        </View>
        <Divider
          style={{ backgroundColor: "#2e2e2e", height: 0.3, marginTop: 20 }}
        />
        {data.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No more recommendations :)</Text>
          </View>
        ) : (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
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
  headerText: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    marginRight: 20,
  },
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
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

export default SeeAllRecommendedScreen;
