import { Camera } from "expo-camera";
import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../../../colorPalette/colors";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  CameraScreen: undefined;
};

type CameraScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "CameraScreen">;
};

const ProfilePhotoCameraScreen: React.FC<CameraScreenProps> = ({
  navigation,
}) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [cameraRef, setCameraRef] = useState<Camera | null>(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleCameraType = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      setCapturedImage(photo.uri);
      setIsPreviewVisible(true);
    }
  };

  const handleSaveImage = () => {
    // Implementirajte logiku za čuvanje slike (na server, lokalno, itd.)
    setIsPreviewVisible(false);
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={cameraType} ref={setCameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.cameraToggle}
            onPress={handleCameraType}
          >
            <FontAwesome name="camera" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </Camera>
      {!isPreviewVisible ? (
        <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
          <FontAwesome name="camera" size={24} color="white" />
        </TouchableOpacity>
      ) : (
        <View style={styles.previewContainer}>
          <Image source={{ uri: capturedImage }} style={styles.previewImage} />
          <TouchableOpacity style={styles.saveButton} onPress={handleSaveImage}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    marginTop: 60,
    marginRight: 20,
  },
  cameraToggle: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: colors.backgroundColor,
    borderRadius: 25,
  },
  captureButton: {
    position: "absolute",
    bottom: 100,
    alignSelf: "center",
    backgroundColor: colors.backgroundColor,
    borderRadius: 25,
    padding: 15,
  },
  previewContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  previewImage: {
    width: "90%",
    height: "55%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    bottom: 50,
  },
  saveButton: {
    width: "90%",
    backgroundColor: colors.buttonBackgroundColor,
    padding: 10,
    borderRadius: 5,
    bottom: 30,
  },
  saveButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 0.5,
    textAlign: "center",
  },
});

export default ProfilePhotoCameraScreen;
