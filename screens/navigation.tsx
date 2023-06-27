import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import NewPostScreen from "./NewPostScreen";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

type RootStackParamList = {
  HomeScreen: undefined;
  NewPostScreen: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
};
type BottomTabParamList = {
  SignedInStack: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const screenOptions = {
  headerShown: false,
};

const SignedInStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignedInStack;
