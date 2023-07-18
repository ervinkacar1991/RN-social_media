import { View, StyleSheet, Image, Text } from "react-native";
import React from "react";
import SignupForm from "../components/signupScreen/signUpForm";

const SIGNUP_LOGO =
  "https://cdn2.iconfinder.com/data/icons/call-to-action-1/512/7.Log_in-512.png";

const SignupScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image source={{ uri: SIGNUP_LOGO, height: 100, width: 100 }} />
      {/* <Text>Signup</Text> */}
    </View>
    <SignupForm navigation={navigation} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});

export default SignupScreen;
