import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Divider } from "react-native-paper";
import colors from "../../../../colorPalette/colors";
import { ActivityIndicator } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const DefaultAvatarUri =
  "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg";

const SearchUsers = ({ users, usersLoading, usersError }) => {
  const renderItem = ({ item }) => {
    return (
      <View>
        <View style={styles.listItem}>
          <TouchableOpacity>
            <Image
              source={{
                uri: item.photo ? item.photo : DefaultAvatarUri,
              }}
              style={styles.photo}
            />
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <View>
              <TouchableOpacity>
                <Text style={styles.name}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Divider
          style={{
            width: "98%",
            alignSelf: "center",
            backgroundColor: colors.dividerBackgroundColor,
            marginBottom: 10,
          }}
        />
      </View>
    );
  };
  if (usersLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primaryTextColor} />
      </View>
    );
  }

  if (usersError) {
    return (
      <View style={styles.errorContainer}>
        <Ionicons
          name="alert-circle-outline"
          size={40}
          color={colors.errorColor}
        />
        <Text style={styles.errorText}>Error loading data.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
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
    marginBottom: 10,
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
  name: {
    fontSize: 13,
    color: "#a9a4a4",
  },
  loadingContainer: {
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
  errorText: {
    color: colors.errorColor,
    fontSize: 18,
    marginTop: 10,
  },
});

export default SearchUsers;
