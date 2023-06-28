import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "./context/UserContext";
import { Ionicons as Ionic } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import ReelsScreen from "./screens/ReelsScreen";
import ActivityScreen from "./screens/ActivityScreen";
import ProfileScreen from "./screens/ProfileScreen";

const queryClient = new QueryClient();

const BottomTabScreen = () => {
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

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Bottom" component={BottomTabScreen} />
            {/* <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignupScreen" component={SignupScreen} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </QueryClientProvider>
  );
}
