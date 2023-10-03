import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons as Ionic } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect, useRef } from "react";
import { useToast } from "react-native-toast-notifications";
import colors from "../../../colorPalette/colors";
import { useQueryClient, useMutation } from "react-query";
import { ActivityIndicator } from "react-native-paper";
import Icon from "react-native-vector-icons/Feather";
import BottomSheet from "@gorhom/bottom-sheet";
import {
  handleEditFromGallery,
  handleEditTakePhoto,
} from "../../../util/imageUploadUtils";
import { styles } from "./EditProfileStyles";
import api from "../../../services/api";

const EditProfile = ({ navigation, route }) => {
  const {
    profilePhoto,
    username,
    name: initalName,
    bio: initalBio,
  } = route.params;

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(profilePhoto);
  const [name, setName] = useState(initalName);
  const [userUsername, setUserUsername] = useState(username);
  const [bio, setBio] = useState(initalBio);
  const queryClient = useQueryClient();
  const bottomSheetRef = useRef(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      bottomSheetRef.current?.close();
    });

    return unsubscribe;
  }, [navigation]);

  const toast = useToast();

  const handleEditImageWrapper = () => {
    handleEditFromGallery(setImage, setLoading, queryClient, bottomSheetRef);
  };

  const handleEditTakePhotoImageWrapper = () => {
    handleEditTakePhoto(setImage, setLoading, queryClient, bottomSheetRef);
  };

  const handleEditUserProfile = () => {
    if (!name || !userUsername || !bio) {
      toast.show("Molimo popunite sva polja", { type: "warning" });
      return;
    }

    const requestBody = {
      username: userUsername,
      name: name,
      bio: bio,
    };

    api
      .editUserProfile(requestBody)
      .then((updatedUser) => {
        console.log("Profil uspešno ažuriran:", updatedUser);
        toast.show("Profil uspešno ažuriran.", { type: "success" });
        queryClient.invalidateQueries("fetchUser");
        navigation.navigate("ProfileScreen");
        queryClient.invalidateQueries("profi");
      })
      .catch((error) => {
        console.error("Greška prilikom ažuriranja korisničkog profila:", error);
        toast.show("Došlo je do greške pri ažuriranju profila.", {
          type: "danger",
        });
      });
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
        Edit profile photo
      </Text>
      <TouchableOpacity
        style={styles.bottomSheetItem}
        onPress={handleEditTakePhotoImageWrapper}
      >
        <Icon name="camera" size={20} color="#ddd7d7" style={styles.icon} />
        <Text style={styles.bottomSheetText}>Take a photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomSheetItem}
        onPress={handleEditImageWrapper}
      >
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
    <TouchableWithoutFeedback onPress={() => bottomSheetRef.current?.close()}>
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
            <TouchableOpacity onPress={handleEditUserProfile}>
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

            <TouchableOpacity onPress={() => bottomSheetRef.current?.expand()}>
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
                value={name}
                onChangeText={(text) => setName(text)}
                style={styles.textInput}
              />
            </View>
            <View style={{ paddingVertical: 10 }}>
              <Text style={{ opacity: 0.5, color: colors.primaryTextColor }}>
                Username
              </Text>
              <TextInput
                placeholder="accountname"
                value={userUsername}
                onChangeText={(text) => setUserUsername(text)}
                style={styles.textInput}
              />
            </View>
            <View style={{ paddingVertical: 10 }}>
              <Text style={{ opacity: 0.5, color: colors.primaryTextColor }}>
                Bio
              </Text>
              <TextInput
                placeholder="bio"
                value={bio}
                onChangeText={(text) => setBio(text)}
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
                    backgroundColor: "#303030",
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
    </TouchableWithoutFeedback>
  );
};

export default EditProfile;
