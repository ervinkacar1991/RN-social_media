import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Posts from "./Posts";
import Tags from "./Tags";
import { Ionicons as Ionic } from "@expo/vector-icons";
import colors from "../../../colorPalette/colors";

const BottomProfileTabView = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: colors.backgroundColor,
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.buttonBackgroundColor,
          height: 2,
        },

        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === "Posts") {
            iconName = focused ? "ios-apps-sharp" : "ios-apps-sharp";
            color = focused ? colors.buttonBackgroundColor : "white";
          } else if (route.name === "Tags") {
            iconName = focused ? "ios-person" : "ios-person-outline";
            color = focused ? colors.buttonBackgroundColor : "white";
          }
          return <Ionic name={iconName} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="Tags" component={Tags} />
    </Tab.Navigator>
  );
};

export default BottomProfileTabView;
