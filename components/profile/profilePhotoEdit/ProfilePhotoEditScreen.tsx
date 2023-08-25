import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useRef, useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import colors from "../../../colorPalette/colors";
import ProfilePhotoEditHeader from "./ProfilePhotoEditHeader";
import ProfilePhotoEditBody from "./ProfilePhotoEditBody";
import ProfilePhotoEditBottomIcons from "./ProfilePhotoEditBottomIcons";
import BottomSheet from "@gorhom/bottom-sheet";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const ProfilePhotoEditScreen = ({ route }) => {
  const { profilePhoto } = route.params;
  const bottomSheetRef = useRef(null);
  const navigation = useNavigation() as any;

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      bottomSheetRef.current?.close();
    });

    return unsubscribe;
  }, [navigation]);

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
      <TouchableOpacity style={styles.bottomSheetItem}>
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
          profilePhoto={profilePhoto}
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
