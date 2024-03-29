import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-paper";
import colors from "../../colorPalette/colors";
import UserPostSettings from "../../modals/UserPostSettings";

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

const UserPostsDetailsBody = ({ post, onDelete, postId }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const images = post?.images.map((image) => image.image);
  const likes = post?.likes;
  const comments = post?.comments;

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View>
      <Divider style={styles.divider} />

      <UserPostHeader
        profileImg={post?.user?.photo_thumbnail}
        username={post?.user?.username}
        toggleModal={toggleModal}
        onDelete={onDelete}
        postId={postId}
      />
      <UserPostImage images={images} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />

        <Likes likes={likes} />
        {/* <Caption post={post} /> */}
        {/* <CommentSection comments={post.comments} /> */}
        <Comments comments={comments} />
      </View>
      <UserPostSettings
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        onDelete={onDelete}
        postId={postId}
      />
    </View>
  );
};

const UserPostHeader = ({
  profileImg,
  username,
  toggleModal,
  onDelete,
  postId,
}) => (
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
      <TouchableOpacity onPress={toggleModal}>
        <Text
          style={{
            color: "white",
            marginRight: 7,
            fontWeight: "900",
            fontSize: 18,
          }}
        >
          ...
        </Text>
      </TouchableOpacity>
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

const PostFooter = () => (
  <View style={{ flexDirection: "row" }}>
    <View style={styles.leftFooterIconsContainer}>
      <PostIcon
        imgStyle={styles.footerIcon}
        imgUrl={postFooterIcons[0].imageUrl}
      />
      <PostIcon
        imgStyle={styles.footerIcon}
        imgUrl={postFooterIcons[1].imageUrl}
      />
      <PostIcon
        imgStyle={styles.footerIcon}
        imgUrl={postFooterIcons[2].imageUrl}
      />
    </View>
    <View style={{ flex: 1, alignItems: "flex-end" }}>
      <PostIcon
        imgStyle={styles.footerIcon}
        imgUrl={postFooterIcons[3].imageUrl}
      />
    </View>
  </View>
);

const PostIcon = ({ imgUrl, imgStyle }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Likes = ({ likes }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "500" }}>
      {`${likes.toLocaleString()} likes`}
    </Text>
  </View>
);

const Comments = ({ comments }) => (
  <>
    <View style={{ flexDirection: "row", marginTop: 5 }}>
      <Text style={{ color: "white" }}>
        <Text style={{ fontWeight: "500" }}>{`${comments} comments`}</Text>
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
    borderColor: colors.storyBorderColor,
  },
  footerIcon: {
    width: 27,
    height: 27,
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
  divider: {
    marginTop: 10,
    width: "90%",
    alignSelf: "center",
    backgroundColor: colors.dividerBackgroundColor,
  },
});

export default UserPostsDetailsBody;
