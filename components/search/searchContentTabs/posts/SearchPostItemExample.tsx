import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionic from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

const SearchPostItemExample = ({ posts }) => {
  console.log(posts);
  return (
    <View style={styles.container}>
      {posts.map((post) => (
        <View style={styles.cardContainer}>
          <View>
            {post.images.map((index) => (
              <View style={styles.cardHeaderContainer} key={index}>
                <Image
                  source={{ uri: post.user.photo_thumbnail }}
                  style={{ width: 30, height: 30, borderRadius: 100 }}
                />
                <View style={{ paddingLeft: 8 }}>
                  <Text style={{ fontSize: 12, fontWeight: "600" }}>
                    {post.user.username}
                  </Text>
                </View>
              </View>
            ))}
          </View>
          <Image
            source={{ uri: post.images[0].image }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Ionic name="ios-heart-outline" size={26} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionic name="ios-person-circle" size={26} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="navigation" size={26} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.descriptionContainer}>
            <Ionic
              name="pencil-outline"
              size={20}
              color="#666"
              style={styles.icon}
            />
            <Text style={styles.descriptionText}>{post.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    backgroundColor: "white",
    width: 350,
    borderRadius: 15,
    marginBottom: 50,
  },
  cardHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  image: {
    width: "100%",
    height: 300,
  },
  iconContainer: {
    justifyContent: "space-around",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    top: 10,
  },
  descriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
    gap: 15,
  },
  descriptionText: {
    fontSize: 14,
    color: "#333",
  },
  icon: {
    marginLeft: 35,
  },
});

export default SearchPostItemExample;
