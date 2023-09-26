import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import { Ionicons as Ionic } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import { useToast } from "react-native-toast-notifications";
import colors from "../../colorPalette/colors";
import * as ImagePicker from "expo-image-picker";
import api from "../../services/api";
import { useQueryClient } from "react-query";
import { ActivityIndicator } from "react-native-paper";

const EditProfile = ({ navigation, route }) => {
  const { profilePhoto } = route.params;
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(profilePhoto);
  const queryClient = useQueryClient();

  const toast = useToast();

  const handleUploadImage = async () => {
    setLoading(true);
    let result: any = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (result.canceled) {
      setLoading(false);
      return;
    }

    let selectedAssets = result?.assets;
    let localUri = selectedAssets[0]?.uri;
    let filename = localUri.split("/").pop();

    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    let formData = new FormData();

    formData.append("photo", { uri: localUri, name: filename, type } as any);

    const res = await api.updateProfilePhoto(formData);
    setImage(res?.photo_thumbnail);
    setLoading(false);
    queryClient.refetchQueries("fetchUser");
  };

  const handleShowToast = () => {
    toast.show("Edited successfully !", {
      duration: 2000,
      type: "success",
      animationType: "slide-in",
      textStyle: { fontWeight: "bold" },
      style: { backgroundColor: colors.buttonBackgroundColor },
    });
    navigation.goBack();
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionic
              name="close-outline"
              style={{ fontSize: 35, color: colors.primaryTextColor }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: colors.primaryTextColor,
            }}
          >
            Edit Profile
          </Text>
          <TouchableOpacity onPress={handleShowToast}>
            <Ionic
              name="checkmark"
              style={{ fontSize: 35, color: "#3493D9" }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
            padding: 20,
          }}
        >
          <Image
            source={{
              uri: image,
            }}
            style={{ width: 80, height: 80, borderRadius: 100 }}
            resizeMode="cover"
          />

          <TouchableOpacity onPress={handleUploadImage}>
            <Text style={{ color: "#2493D9", marginTop: 10 }}>
              Change profile photo
            </Text>
          </TouchableOpacity>
          {loading && (
            <ActivityIndicator
              size="small"
              color={colors.primaryTextColor}
              style={styles.loadingContainer}
            />
          )}
        </View>
        <View
          style={{
            padding: 10,
          }}
        >
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ opacity: 0.5, color: colors.primaryTextColor }}>
              Name
            </Text>
            <TextInput
              placeholder="name"
              defaultValue="ema"
              style={styles.textInput}
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ opacity: 0.5, color: colors.primaryTextColor }}>
              Username
            </Text>
            <TextInput
              placeholder="accountname"
              defaultValue="ema"
              style={styles.textInput}
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ opacity: 0.5, color: colors.primaryTextColor }}>
              Bio
            </Text>
            <TextInput
              placeholder="bio"
              defaultValue="bio"
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <Text
            style={{
              marginVertical: 10,
              padding: 10,
              color: "#3493D9",
              borderWidth: 1,
              borderColor: "#EFEFEF",
              borderRadius: 5,
            }}
          >
            Personal information setting
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.backgroundColor,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  textInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#CDCDCD",
    padding: 5,
    color: colors.primaryTextColor,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.backgroundColor,
  },
});

export default EditProfile;
