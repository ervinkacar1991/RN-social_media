import { View, Button, StyleSheet } from "react-native";
import React, { useState, useContext } from "react";
import * as ImagePicker from "expo-image-picker";
import api from "../../../services/api";
import { QueryClient } from "react-query";
import colors from "../../../colorPalette/colors";
import { ActivityIndicator } from "react-native-paper";
import { UserContext } from "../../../context/UserContext";

const AddPostBody = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const { user } = useContext(UserContext);

  const queryClient = new QueryClient();

  const handleUploadImage = async () => {
    setLoading(true);

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (result.canceled) {
      setLoading(false);
      return;
    }

    let selectedAsset = result.assets[0];
    let localUri = selectedAsset.uri;
    let filename = localUri.split("/").pop();

    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    let formData = new FormData() as any;
    formData.append("images[0][image]", {
      uri: localUri,
      name: filename,
      type: type,
    });
    try {
      const res = await api.addPost(formData, user.username);
      setImage(res?.data?.photo_thumbnail);
      queryClient.refetchQueries("fetchUser");
      navigation.navigate("Profile");
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Pick an image from camera roll"
        onPress={handleUploadImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundColor,
  },
});

export default AddPostBody;
