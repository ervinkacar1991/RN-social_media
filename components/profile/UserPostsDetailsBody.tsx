import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import { Divider } from "react-native-paper";
import colors from "../../colorPalette/colors";

const UserPostsDetailsBody = ({ post }) => {
  const images = post?.images.map((image) => image.image);

  return (
    <View>
      <UserPostHeader
        profileImg={post?.user?.photo_thumbnail}
        username={post?.user?.username}
      />
      <Divider
        style={{
          marginTop: 10,
          width: "90%",
          alignSelf: "center",
          backgroundColor: colors.dividerBackgroundColor,
        }}
      />
      <UserPostImage images={images} />
    </View>
  );
};

const UserPostHeader = ({ profileImg, username }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
      paddingVertical: 4,
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: profileImg }} style={styles.story} />
      <Text style={{ color: "white", marginLeft: 5, fontWeight: "600" }}>
        {username}
      </Text>
    </View>
    <View>
      <Text style={{ color: "white", marginRight: 5, fontWeight: "900" }}>
        ...
      </Text>
    </View>
  </View>
);

const UserPostImage = ({ images }) => {
  const renderImage = ({ item }) => (
    <Image source={{ uri: item }} style={styles.image} />
  );

  return (
    <View style={{ width: "100%", height: 450 }}>
      <FlatList
        data={images}
        renderItem={renderImage}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.imageContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#B8B8FF",
  },
  //   footerIcon: {
  //     width: 30,
  //     height: 30,
  //   },
  //   leftFooterIconsContainer: {
  //     flexDirection: "row",
  //     width: "33%",
  //     justifyContent: "space-between",
  //   },
  //   shareICon: {
  //     transform: [{ rotate: "320deg" }],
  //     marginTop: -3,
  //   },
  imageContainer: {
    width: "100%",
    height: 450,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default UserPostsDetailsBody;
