import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";

const SearchPostItemExample = ({ posts }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.cardContainer} key={item.id}>
      <View>
        {item.images.map((index) => (
          <View style={styles.cardHeaderContainer} key={index}>
            <Image
              source={{ uri: item.user.photo_thumbnail }}
              style={{ width: 30, height: 30, borderRadius: 100 }}
            />
            <View style={{ paddingLeft: 8 }}>
              <Text style={{ fontSize: 12, fontWeight: "600" }}>
                {item.user.username}
              </Text>
            </View>
          </View>
        ))}
      </View>
      <Image
        source={{ uri: item.images[0].image }}
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
        <TouchableOpacity onPress={() => openModal(item)}>
          <Ionic name="pencil-outline" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={{ marginBottom: 50 }}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        {selectedPost && (
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalDescription}>
                {selectedPost.description}
              </Text>
              <TouchableOpacity onPress={closeModal}>
                <Text style={styles.closeButton}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    backgroundColor: "white",
    width: 350,
    height: 400,
    borderRadius: 15,
    marginTop: 30,
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    width: "80%",
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    color: "blue",
    fontSize: 16,
    alignSelf: "flex-end",
  },
});

export default SearchPostItemExample;
