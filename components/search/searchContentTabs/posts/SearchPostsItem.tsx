import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionic from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

const SearchPostsItem = ({ posts }) => {
  //   console.log(posts);
  return (
    <>
      {posts.map((post) => (
        <View
          style={{
            backgroundColor: "white",
            width: 340,
            height: 465,
            borderRadius: 15,
            marginBottom: 50,
          }}
        >
          <View key={post.id} style={{ flexDirection: "column" }}>
            {post.images.map((index) => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                }}
              >
                <Image
                  key={index}
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

            <View>
              <Image
                source={{ uri: post.images[0].image }}
                style={{ width: "100%", height: "85%" }}
              />
              <View
                style={{
                  justifyContent: "space-around",
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 8,
                  //   backgroundColor: "red",
                  top: 10,
                }}
              >
                <TouchableOpacity>
                  <Ionic name="ios-heart-outline" size={26} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionic name="ios-person-circle" size={26} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather name="navigation" size={26} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather name="file-text" size={26} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ))}
    </>
  );
};

export default SearchPostsItem;
