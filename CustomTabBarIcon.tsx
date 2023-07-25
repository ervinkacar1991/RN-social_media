import React from "react";
import { View } from "react-native";
import { Ionicons as Ionic } from "@expo/vector-icons";

const CustomTabBarIcon = ({ focused, size, routeName }) => {
  let iconName;
  let iconColor = focused ? "white" : "gray";
  if (routeName === "Home") {
    iconName = focused ? "home-sharp" : "home-outline";
  } else if (routeName === "Search") {
    iconName = focused ? "search" : "ios-search-outline";
  } else if (routeName === "Reels") {
    iconName = focused
      ? "caret-forward-circle"
      : "caret-forward-circle-outline";
  } else if (routeName === "Activity") {
    iconName = focused ? "ios-heart" : "ios-heart-outline";
  } else if (routeName === "Profile") {
    iconName = focused ? "ios-person" : "ios-person-outline";
  }

  return (
    <View style={{ marginTop: 5 }}>
      <Ionic name={iconName} size={size} color={iconColor} />
    </View>
  );
};

export default CustomTabBarIcon;
