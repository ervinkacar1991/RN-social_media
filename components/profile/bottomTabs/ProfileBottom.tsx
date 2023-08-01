import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import Posts from "./Posts";
import Tags from "./Tags";
import colors from "../../../colorPalette/colors";
import { Ionicons as Ionic } from "@expo/vector-icons";

const ProfileBottom = ({ username, initialTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  const tabs = [
    {
      key: "posts",
      icon: (
        <Ionic
          name={activeTab === 0 ? "ios-apps-sharp" : "ios-apps-sharp"}
          size={22}
          color={activeTab === 0 ? colors.buttonBackgroundColor : "white"}
        />
      ),
    },
    {
      key: "tags",
      icon: (
        <Ionic
          name={activeTab === 1 ? "ios-person" : "ios-person-outline"}
          size={22}
          color={activeTab === 1 ? colors.buttonBackgroundColor : "white"}
        />
      ),
    },
  ];

  let renderedComponent: React.ReactNode;

  switch (activeTab) {
    case 0:
      renderedComponent = <Posts username={username} />;
      break;
    case 1:
      renderedComponent = <Tags />;
      break;
    default:
      renderedComponent = null;
  }

  return (
    <View>
      <FlatList
        horizontal
        data={tabs}
        renderItem={({ item, index }) => (
          <View style={styles.iconContainer}>
            <TouchableOpacity
              key={index}
              style={[
                styles.tabButton,
                activeTab === index && styles.activeTabButton,
              ]}
              onPress={() => setActiveTab(index)}
            >
              {item.icon}
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
      {renderedComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
  },
  activeTabButton: {
    borderBottomColor: colors.buttonBackgroundColor,
    borderBottomWidth: 3,
    flex: 1,
  },
  iconContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default ProfileBottom;
