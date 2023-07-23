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

const EditProfile = ({ navigation }) => {
  const toast = useToast();

  const handleShowToast = () => {
    toast.show("Edited successfully !", {
      duration: 2000,
      type: "success",
      animationType: "slide-in",
      textStyle: { fontWeight: "bold" },
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
              defaultValue="el_babus"
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
    // backgroundColor: "#01200F",
    backgroundColor: "white",
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
  },
});

export default EditProfile;
