import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { Divider } from "react-native-paper";

const postFooterIcons = [
  {
    name: "Like",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png",
    likedImageUrl: "https://img.icons8.com/ios/50/ffffff/facebook-like--v1.png",
  },
  {
    name: "Comment",
    imageUrl:
      "https://img.icons8.com/material-outlined/60/ffffff/speech-bubble.png",
  },
  {
    name: "Share",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/share.png",
  },
  {
    name: "Save",
    imageUrl:
      "https://img.icons8.com/fluency-systems-regular/60/ffffff/bookmark-ribbon.png",
  },
];

const Post = ({ post }) => {
  console.log(post);
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider style={{ marginTop: 10 }} />

      <PostHeader
        name={post?.user?.username}
        profileImg={post.user.photo_thumbnail}
      />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes likes={post.likes} />
        {/* <Caption post={post} /> */}
        {/* <CommentSection comments={post.comments} /> */}
        <Comments comments={post.comments} />
      </View>
    </View>
  );
};

const PostHeader = ({ name, profileImg }) => (
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
        {name}
      </Text>
    </View>
    <View>
      <Text style={{ color: "white", marginRight: 5, fontWeight: "900" }}>
        ...
      </Text>
    </View>
  </View>
);

const PostImage = ({ post }) => {
  const renderImage = ({ item }) => (
    <Image source={{ uri: item.image }} style={styles.image} />
  );

  return (
    <View style={{ width: "100%", height: 450 }}>
      <FlatList
        data={post.images}
        renderItem={renderImage}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.imageContainer}
      />
    </View>
  );
};

const PostFooter = () => (
  <View style={{ flexDirection: "row" }}>
    <View style={styles.leftFooterIconsContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
    </View>
    <View style={{ flex: 1, alignItems: "flex-end" }}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
    </View>
  </View>
);

const Icon = ({ imgUrl, imgStyle }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Likes = ({ likes }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {`${likes.toLocaleString()} likes`}
    </Text>
  </View>
);

// const Caption = ({ post }) => (
//   <View style={{ marginTop: 5 }}>
//     <Text style={{ color: "white" }}>
//       <Text style={{ fontWeight: "600" }}>{post.user}</Text>
//       <Text> {post.caption}</Text>
//     </Text>
//   </View>
// );

// const CommentSection = ({ comments }) => (
//   <View style={{ marginTop: 5 }}>
//     <Text style={{ color: "gray" }}>
//       View {comments > 1 ? "all" : ""} {comments}{" "}
//       {comments > 1 ? "comments" : "comment"}
//     </Text>
//   </View>
// );

const Comments = ({ comments }) => (
  <>
    <View style={{ flexDirection: "row", marginTop: 5 }}>
      <Text style={{ color: "white" }}>
        <Text style={{ fontWeight: "600" }}>{`${comments} comments`}</Text>
      </Text>
    </View>
  </>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#9EC5AB",
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
  leftFooterIconsContainer: {
    flexDirection: "row",
    width: "33%",
    justifyContent: "space-between",
  },
  shareICon: {
    transform: [{ rotate: "320deg" }],
    marginTop: -3,
  },
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

export default Post;
