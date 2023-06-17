import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Formik } from "formik";
import * as Yup from "yup";
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../../context/UserContext";

const LoginFormSchema = Yup.object().shape({
  username: Yup.string().required("A username is required"),
  password: Yup.string()
    .required()
    .min(6, "Your password has to have at least 8 characters"),
});

export interface LoginValues {
  username: string;
  password: string;
}

const LoginForm = ({ navigation }) => {
  const { handleSetToken, handleSetUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (values) => {
    setLoading(true);
    setError("");
    try {
      const response = await api.login(values);
      const { token, user } = response;

      await AsyncStorage.setItem("token", token);
      handleSetToken(token);
      handleSetUser(user);

      const storedToken = await AsyncStorage.getItem("token");

      console.log("Login successful");
      // console.log(response);
      //@TODO: asyncstorage, napravi context gde ces da cuvas usera i njegove podatke(username,token..)
      //token cuvaj loklano u context i u asyncstorage. Sve radnje i funkcije sa userom, radi iz konteksta i odatle
      //exportaj funkcije koje ces da koristis u komponentama.
      navigation.replace("HomeScreen");
    } catch (error) {
      console.log("Login failed");
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const initialValues: LoginValues = { username: "", password: "" };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.username.length || values.username.length > 3
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Username"
                autoCapitalize="none"
                textContentType="username"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length > 6
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password "
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
              <Text style={{ color: "#5BB0F5" }}>Forgot password</Text>
            </View>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <Pressable
              style={[
                styles.button,
                isValid ? styles.buttonValid : styles.buttonInvalid,
                loading ? { opacity: 0.5 } : null,
              ]}
              onPress={() => handleSubmit()}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#ffffff" />
              ) : (
                <Text style={styles.buttonText}>Login</Text>
              )}
            </Pressable>
            <View style={styles.signupContainer}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.push("SignupScreen")}>
                <Text style={{ color: "#6BB0F5" }}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  },
  buttonValid: {
    backgroundColor: "#0096F6",
  },
  buttonInvalid: {
    backgroundColor: "#9ACAF7",
  },
  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
  signupContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
  errorText: {
    fontSize: 12,
    color: "red",
    fontWeight: "600",
    marginTop: 10,
  },
});

export default LoginForm;
