import { View, StyleSheet, Image } from "react-native";
import React from "react";
import LoginForm from "../components/loginScreen/LoginForm";

const LOGIN_LOGO =
  "https://static.vecteezy.com/system/resources/thumbnails/005/502/055/small/logotype-letter-login-logo-design-graphic-symbol-icon-sign-illustration-creative-idea-vector.jpg";

const LoginScreen = () => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image source={{ uri: LOGIN_LOGO, height: 100, width: 100 }} />
    </View>
    <LoginForm />
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

export default LoginScreen;
