import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";

const ProfilePhotoBottomSheet = () => {
  const bottomSheetRef = useRef(null);

  const renderBottomSheetContent = () => (
    <View style={styles.bottomSheetContent}>
      <TouchableOpacity style={styles.bottomSheetItem}>
        <Text style={styles.bottomSheetText}>Change Profile Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomSheetItem}>
        <Text style={styles.bottomSheetText}>Share</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <BottomSheet
        ref={bottomSheetRef}
        enablePanDownToClose
        snapPoints={[200, 200]}
        containerHeight={300}
      >
        {renderBottomSheetContent()}
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSheetContent: {
    width: "100%",
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomSheetItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  bottomSheetText: {
    fontSize: 18,
    color: "#333",
  },
});

export default ProfilePhotoBottomSheet;
