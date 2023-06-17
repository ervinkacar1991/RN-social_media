import { View, StyleSheet, Image } from "react-native";
import React from "react";
import LoginForm from "../components/loginScreen/LoginForm";

const LOGIN_LOGO =
  "https://static.vecteezy.com/system/resources/thumbnails/005/502/055/small/logotype-letter-login-logo-design-graphic-symbol-icon-sign-illustration-creative-idea-vector.jpg";

const LOGIN_LOGO1 =
  "https://cdn.shopify.com/app-store/listing_images/492da9579bfc706e736a9935b163a871/icon/CLuomtPgiP0CEAE=.jpeg";

const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image source={{ uri: LOGIN_LOGO1, height: 100, width: 100 }} />
    </View>
    <LoginForm navigation={navigation} />
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
