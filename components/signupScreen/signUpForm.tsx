import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import api from "../../services/api";

const SignupForm = ({ navigation }) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    username: Yup.string().required().min(3, "A username is required"),
    password: Yup.string()
      .required()
      .min(6, "Your password has to have at least 8 characters"),
    bio: Yup.string().required("Bio je obavezan"),
    mobile: Yup.string().required("Broj mobilnog telefona je obavezan"),
    name: Yup.string().required("Ime je obavezno"),
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async (values) => {
    const requestBody = {
      username: values.username,
      name: values.name,
      bio: values.bio,
      email: values.email,
      mobile: values.mobile,
      password: values.password,
    };

    setLoading(true);
    setError("");

    try {
      // const response = await fetch(url, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(requestBody),
      // });

      const response = await api.signup(requestBody);
      console.log("Uspešno ste se registrovali:", response);

      if (response.ok) {
        const data = await response.json();
        console.log("Uspešno ste se registrovali:", data);
        navigation.navigate("LoginScreen");
      } else {
        const errorData = await response.json();
        console.log("Greška prilikom registracije:", errorData);
      }
    } catch (error) {
      console.error("Došlo je do greške pri izvršavanju zahteva:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{
          username: "",
          name: "",
          bio: "",
          email: "",
          mobile: "",
          password: "",
        }}
        onSubmit={handleSignUp}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.username.length || values.username.length > 4
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
                    1 > values.name.length || values.name.length > 6
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Name"
                autoCapitalize="none"
                textContentType="name"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.bio.length || values.bio.length > 6
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Bio"
                autoCapitalize="none"
                keyboardType="default"
                textContentType="none"
                onChangeText={handleChange("bio")}
                onBlur={handleBlur("bio")}
                value={values.bio}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>

            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.mobile.length > 0 &&
                    !/^(\+\d{1,3})?\d{9,14}$/.test(values.mobile)
                      ? "red"
                      : "#ccc",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Mobile"
                autoCapitalize="none"
                keyboardType="phone-pad"
                textContentType="telephoneNumber"
                onChangeText={handleChange("mobile")}
                onBlur={handleBlur("mobile")}
                value={values.mobile}
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
              {/* <Text style={{ color: "#5BB0F5" }}>Forgot password</Text> */}
            </View>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
            >
              {loading ? (
                <ActivityIndicator color="#ffffff" />
              ) : (
                <Text style={styles.buttonText}>Sign Up</Text>
              )}
            </Pressable>
            <View style={styles.signupContainer}>
              <Text>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: "#6BB0F5" }}> Log In</Text>
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
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  }),
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
    color: "red", // Stil za "errorText"
    marginBottom: 10,
  },
});

export default SignupForm;
