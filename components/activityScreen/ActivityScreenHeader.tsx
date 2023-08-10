import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Feather, Ionicons as Ionic } from "@expo/vector-icons";
import colors from "../../colorPalette/colors";
import { Divider } from "react-native-paper";
import ActivitySearchBox from "./ActivitySearchBox";

const ActivityScreenHeader = () => {
  const [showSearchBox, setShowSearchBox] = useState(false);

  const toggleSearchBox = () => {
    setShowSearchBox(!showSearchBox);
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionic
            name="md-chevron-back"
            size={30}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.headerText}>Notifications</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={toggleSearchBox}>
            <Ionic
              name="search"
              size={25}
              color={colors.userInfoSearchBoxTextColor}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionic
              name="person-circle-outline"
              size={25}
              color={colors.userInfoSearchBoxTextColor}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      {showSearchBox && <ActivitySearchBox />}

      <Divider style={styles.divider} />
      <View style={styles.markAllAsReadContainer}>
        <Text style={styles.markAllAsReadText}>Mark all as read</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  headerText: {
    fontSize: 21,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 0.7,
  },
  icon: {
    marginHorizontal: 5,
  },
  divider: {
    marginTop: 10,
    width: "90%",
    alignSelf: "center",
    backgroundColor: colors.dividerBackgroundColor,
  },
  markAllAsReadContainer: {
    alignItems: "flex-end",
    padding: 10,
  },
  markAllAsReadText: {
    color: colors.buttonBackgroundColor,
    fontWeight: "600",
  },
});

export default ActivityScreenHeader;
