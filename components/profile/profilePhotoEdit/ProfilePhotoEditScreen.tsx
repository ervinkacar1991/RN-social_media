import React, { useRef, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import colors from "../../../colorPalette/colors";
import ProfilePhotoEditHeader from "./ProfilePhotoEditHeader";
import ProfilePhotoEditBody from "./ProfilePhotoEditBody";
import BottomSheet from "@gorhom/bottom-sheet";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import api from "../../../services/api";
import * as ImagePicker from "expo-image-picker";
import { useQueryClient } from "react-query";

const ProfilePhotoEditScreen = ({ route }) => {
  const { profilePhoto } = route.params;
  const bottomSheetRef = useRef(null);
  const navigation = useNavigation() as any;
  // const [isCameraVisible, setIsCameraVisible] = useState(false);
  const queryClient = useQueryClient();
  const [image, setImage] = useState(profilePhoto);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      bottomSheetRef.current?.close();
    });

    return unsubscribe;
  }, [navigation]);

  const handleSaveImage = async () => {
    let result: any = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (result.cancelled) {
      return;
    }

    // ImagePicker saves the taken photo to disk and returns a local URI to it
    let localUri = result.uri;
    let filename = localUri.split("/").pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    // Upload the image using the fetch and FormData APIs
    let formData = new FormData();
    // Assume "photo" is the name of the form field the server expects
    formData.append("photo", { uri: localUri, name: filename, type } as any);

    const res = await api.updateProfilePhoto(formData);
    setImage(res?.photo_thumbnail);
    console.log("res", res);
    // setIsPreviewVisible(false);
    queryClient.refetchQueries("fetchUser");
    navigation.goBack();
  };

  const renderBottomSheetContent = () => (
    <View style={styles.bottomSheetContent}>
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 18,
          marginBottom: 10,
        }}
      >
        Add profile photo
      </Text>
      <TouchableOpacity
        style={styles.bottomSheetItem}
        onPress={handleSaveImage}
      >
        <Icon name="camera" size={20} color="#ddd7d7" style={styles.icon} />
        <Text style={styles.bottomSheetText}>Take a photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomSheetItem}>
        <Icon
          name="upload-cloud"
          size={20}
          color="#ddd7d7"
          style={styles.icon}
        />
        <Text style={styles.bottomSheetText}>Upload from photos</Text>
      </TouchableOpacity>
    </View>
  );

  // const openCamera = async () => {
  //   const { status } = await Camera.getCameraPermissionsAsync();
  //   console.log(status);

  //   if (status !== "granted") {
  //     const { status: newStatus } =
  //       await Camera.requestCameraPermissionsAsync();
  //     if (newStatus !== "granted") {
  //       return;
  //     }
  //   }

  //   // setIsCameraVisible(true);
  // };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ProfilePhotoEditHeader />
        <ProfilePhotoEditBody
          profilePhoto={image}
          bottomSheetRef={bottomSheetRef}
        />
        <BottomSheet
          ref={bottomSheetRef}
          style={{ marginTop: -65 }}
          enablePanDownToClose
          snapPoints={[0.5, 200]}
          containerHeight={300}
          backgroundComponent={({ style }) => (
            <View
              style={[
                style,
                {
                  backgroundColor: "#393737",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderColor: "#676666",
                  borderWidth: 0.5,
                },
              ]}
            />
          )}
        >
          {renderBottomSheetContent()}
        </BottomSheet>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  bottomSheetContent: {
    width: "100%",
    padding: 20,
    backgroundColor: "#393737",
  },
  bottomSheetItem: {
    flexDirection: "row",
    paddingVertical: 15,
  },
  bottomSheetText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#ece9e9",
  },
  icon: {
    marginRight: 10,
  },
});

export default ProfilePhotoEditScreen;
