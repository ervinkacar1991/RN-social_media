import { Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchPeople from "./searchContentTabs/people/SearchPeople";
import SearchUsers from "./searchContentTabs/users/SearchUsers";
import SearchPosts from "./searchContentTabs/posts/SearchPosts";
import colors from "../../colorPalette/colors";

const SearchContent = ({
  peopleData,
  postsData,
  usersData,
  usersLoading,
  postsLoading,
  peopleLoading,
  usersError,
  postsError,
  peopleError,
}) => {
  const WrappedSearchPeople = () => (
    <SearchPeople
      people={peopleData}
      peopleLoading={peopleLoading}
      peopleError={peopleError}
    />
  );
  const WrappedSearchPosts = () => (
    <SearchPosts
      posts={postsData}
      postsLoading={postsLoading}
      postsError={postsError}
    />
  );
  const WrappedSearchUsers = () => (
    <SearchUsers
      users={usersData}
      usersLoading={usersLoading}
      usersError={usersError}
    />
  );

  const Tab = createMaterialTopTabNavigator();

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
          return (
            <Text
              style={{
                color: focused ? "white" : "#a9a4a4",
                fontWeight: "600",
              }}
            >
              {routeName}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen
        name="People"
        component={WrappedSearchPeople}
        options={{ lazy: true }}
      ></Tab.Screen>
      <Tab.Screen
        name="Posts"
        component={WrappedSearchPosts}
        options={{ lazy: true }}
      ></Tab.Screen>
      <Tab.Screen
        name="Users"
        component={WrappedSearchUsers}
        options={{ lazy: true }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchContent;
