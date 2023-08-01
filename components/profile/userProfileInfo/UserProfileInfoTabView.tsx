import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import colors from "../../../colorPalette/colors";
import ListOfFollowers from "./ListOfFollowers";
import ListOfFollowing from "./ListOfFollowing";

const UserProfileInfoTabView = () => {
  const Tab = createMaterialTopTabNavigator();

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: colors.backgroundColor,
        },

        tabBarIndicatorStyle: {
          backgroundColor: colors.buttonBackgroundColor,
          height: 3,
        },
        tabBarLabel: ({ focused, color }) => {
          const routeName = route.name;
          const formattedLabel = capitalizeFirstLetter(routeName);
          return (
            <Text
              style={{
                color: focused ? "white" : "#a9a4a4",
                fontWeight: "600",
              }}
            >
              {formattedLabel}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Followers" component={ListOfFollowers} />
      <Tab.Screen name="Following" component={ListOfFollowing} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default UserProfileInfoTabView;
