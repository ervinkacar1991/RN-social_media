import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import { Ionicons as Ionic } from "@expo/vector-icons";
import SignupScreen from "./SignupScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "./SearchScreen";
import ReelsScreen from "./ReelsScreen";
import ActivityScreen from "./ActivityScreen";
import ProfileScreen from "./ProfileScreen";

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

const AuthorizedStack: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 65,
          backgroundColor: "#011502",
          borderTopColor: "black",
        },
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          let iconColor = focused ? "white" : "gray";
          if (route.name === "Home") {
            iconName = focused ? "home-sharp" : "home-outline";
            size = focused ? size + 8 : size + 2;
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "ios-search-outline";
          } else if (route.name === "Reels") {
            iconName = focused
              ? "caret-forward-circle"
              : "caret-forward-circle-outline";
          } else if (route.name === "Activity") {
            iconName = focused ? "ios-heart" : "ios-heart-outline";
            size = focused ? size + 8 : size + 2;
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-person-circle" : "ios-person-outline";
          }

          return (
            <Ionic
              name={iconName}
              size={size}
              color={iconColor}
              style={{ marginTop: 5 }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Reels" component={ReelsScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
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
