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
import { ActivityIndicator } from "react-native-paper";

const ProfilePhotoEditScreen = ({ route }) => {
  const { profilePhoto } = route.params;
  const bottomSheetRef = useRef(null);
  const navigation = useNavigation() as any;
  const queryClient = useQueryClient();
  const [image, setImage] = useState(profilePhoto);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      bottomSheetRef.current?.close();
    });

    return unsubscribe;
  }, [navigation]);

  const handleSaveImage = async () => {
    setLoading(true);
    let result: any = await ImagePicker.launchCameraAsync({
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
        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={colors.primaryTextColor} />
          </View>
        )}
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

export default ProfilePhotoEditScreen;
