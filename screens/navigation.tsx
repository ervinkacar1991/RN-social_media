import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "./SearchScreen";
import ReelsScreen from "./ReelsScreen";
import ActivityScreen from "./ActivityScreen";
import EditProfile from "../components/profile/EditProfile";
import SeeAllRecommendedScreen from "../components/home/SeeAllRecommendedScreen";
import colors from "../colorPalette/colors";
import CustomTabBarIcon from "../CustomTabBarIcon";
import ProfileScreen from "./ProfileScreen";
import UserProfileInfoScreen from "../components/profile/userProfileInfo/UserProfileInfoScreen";
import UserPostsDetails from "../components/profile/UserPostsDetails";
import ProfilePhotoEditScreen from "../components/profile/profilePhotoEdit/ProfilePhotoEditScreen";
import AccountSettingsScreen from "../components/profile/acountSettings/AccountSettingsScreen";

type RootStackParamList = {
  HomeScreen: undefined;
  NewPostScreen: undefined;
  LoginScreen: undefined;
  SignupScreen: undefined;
};
// type BottomTabParamList = {
//   SignedInStack: undefined;
// };

type ProfileStackParamList = {
  ProfileScreen: undefined;
  EditProfile: undefined;
  UserProfileInfo: undefined;
  UserPostsDetails: undefined;
  ProfilePhotoEditScreen: undefined;
  ProfilePhotoCameraScreen: undefined;
  AccountSettings: undefined;
};

type HomeStackParamList = {
  HomeScreen: undefined;
  SeeAllRecommendedScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
// const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const screenOptions = {
  headerShown: false,
};

const AuthorizedStack: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 80,
          backgroundColor: colors.backgroundColor,
          borderTopColor: "black",

          position: "absolute",
        },
        tabBarIcon: ({ focused, size }) => (
          <CustomTabBarIcon
            focused={focused}
            size={size}
            routeName={route.name}
          />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Reels" component={ReelsScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

const PStack = createStackNavigator<ProfileStackParamList>();

const ProfileStack: React.FC = () => {
  return (
    <PStack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <PStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <PStack.Screen name="EditProfile" component={EditProfile} />
      <PStack.Screen name="UserProfileInfo" component={UserProfileInfoScreen} />
      <PStack.Screen name="UserPostsDetails" component={UserPostsDetails} />
      <PStack.Screen name="AccountSettings" component={AccountSettingsScreen} />

      <PStack.Screen
        name="ProfilePhotoEditScreen"
        component={ProfilePhotoEditScreen}
      />
    </PStack.Navigator>
  );
};

const HStack = createStackNavigator<HomeStackParamList>();

const HomeStack: React.FC = () => {
  return (
    <HStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <HStack.Screen name="HomeScreen" component={HomeScreen} />
      <HStack.Screen
        name="SeeAllRecommendedScreen"
        component={SeeAllRecommendedScreen}
      />
    </HStack.Navigator>
  );
};

const UnauthorizedStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export { AuthorizedStack, UnauthorizedStack };
