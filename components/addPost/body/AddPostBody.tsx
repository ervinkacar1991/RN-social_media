import { View, Text, TouchableOpacity, Button, Image } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import api from "../../../services/api";
import { useMutation, QueryClient } from "react-query";

const DefaultProfilePhotoUri = "https://i.stack.imgur.com/l60Hf.png";

const AddPostBody = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const queryClient = new QueryClient();

  const handleUploadImage = async () => {
    setLoading(true);

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (result.canceled) {
      console.log("cancelled");
      setLoading(false);
      return;
    }

    let selectedAsset = result.assets[0];
    let localUri = selectedAsset.uri;
    let filename = localUri.split("/").pop();

    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    let formData = new FormData() as any;
    formData.append("photo", {
      uri: localUri,
      name: filename,
      type: type,
    });
  };

  // try {
  //   const res = await api.addPost(formData, "ema");
  //   setImage(res?.data?.photo_thumbnail);
  //   queryClient.refetchQueries("fetchUser");
  //   navigation.goBack();
  // } catch (error) {
  //   throw error;
  // } finally {
  //   setLoading(false);
  // }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Pick an image from camera roll"
        onPress={handleUploadImage}
      />
    </View>
  );
};

export default AddPostBody;
