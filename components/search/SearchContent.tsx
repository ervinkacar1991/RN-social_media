import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchPeople from "./searchContentTabs/SearchPeople";
import SearchUsers from "./searchContentTabs/SearchUsers";
import SearchPosts from "./searchContentTabs/SearchPosts";
import colors from "../../colorPalette/colors";

// export interface CustomError {
//   message: string;
// }
// interface ImageData {
//   id: string;
//   photo_thumbnail: string | null;
// }

// interface SearchContentProps {
//   data: ImageData[];
//   isLoading: boolean;
//   isError: boolean;
//   error: Error | CustomError;
//   activeTab: number;
//   setActiveTab: React.Dispatch<React.SetStateAction<number>>;
// }

const SearchContent = ({ peopleData, postsData }) => {
  const WrappedSearchPeople = () => <SearchPeople people={peopleData} />;
  const WrappedSearchPosts = () => <SearchPosts posts={postsData} />;
  const WrappedSearchUsers = () => <SearchUsers />;

  const Tab = createMaterialTopTabNavigator();

  // if (isLoading) {
  //   return (
  //     <View>
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <View>
  //       <Text>Error: {error.message}</Text>
  //     </View>
  //   );
  // }

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
          // const formattedLabel = capitalizeFirstLetter(routeName);
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
