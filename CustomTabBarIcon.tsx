import React from "react";
import { Ionicons as Ionic } from "@expo/vector-icons";

const CustomTabBarIcon = ({ focused, size, routeName }) => {
  let iconName;
  let iconColor = focused ? "white" : "gray";
  if (routeName === "Home") {
    iconName = focused ? "home-sharp" : "home-outline";
  } else if (routeName === "Search") {
    iconName = focused ? "search" : "ios-search-outline";
  } else if (routeName === "AddPost") {
    iconName = focused ? "add-circle" : "add-circle-outline";
    size = focused ? 50 : 30;
  } else if (routeName === "Activity") {
    iconName = focused ? "ios-heart" : "ios-heart-outline";
  } else if (routeName === "Profile") {
    iconName = focused ? "ios-person" : "ios-person-outline";
  }

  return <Ionic name={iconName} size={size} color={iconColor} />;
};

export default CustomTabBarIcon;
