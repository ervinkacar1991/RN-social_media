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
import React from "react";
import { useToast } from "react-native-toast-notifications";

const EditProfile = () => {
  const toast = useToast();

  const handleShowToast = () => {
    toast.show("Edited successfully !", {
      duration: 2000,
      type: "success",
      animationType: "slide-in",
      textStyle: { fontWeight: "bold" },
    });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          width: "100%",
          height: "100%",
          // backgroundColor: "#01200F",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
          }}
        >
          <TouchableOpacity>
            <Ionic name="close-outline" style={{ fontSize: 35 }} />
          </TouchableOpacity>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Edit Profile</Text>
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
              uri: "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg",
            }}
            style={{ width: 80, height: 80, borderRadius: 100 }}
            resizeMode="cover"
          />
          <Text style={{ color: "#2493D9" }}>Change profile photo</Text>
        </View>
        <View
          style={{
            padding: 10,
          }}
        >
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ opacity: 0.5 }}>Name</Text>
            <TextInput
              placeholder="name"
              defaultValue="Ervin Kacar"
              style={styles.textInput}
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ opacity: 0.5 }}>Username</Text>
            <TextInput
              placeholder="accountname"
              defaultValue="Ervin Kacar"
              style={styles.textInput}
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text></Text>
            <TextInput placeholder="Website" style={styles.textInput} />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text></Text>
            <TextInput placeholder="Bio" style={styles.textInput} />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#CDCDCD",
    padding: 5,
  },
});

export default EditProfile;
