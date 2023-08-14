import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useCallback } from "react";
import colors from "../../../../colorPalette/colors";
import { Divider } from "react-native-paper";

const DefaultAvatarUri =
  "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg";

const SearchPeople = ({ people }) => {
  const renderItem = useCallback(({ item }) => {
    return (
      <View>
        <View style={styles.listItem}>
          <TouchableOpacity>
            <Image
              source={{
                uri: item.photo ? item.photo : DefaultAvatarUri,
              }}
              style={styles.photo}
            />
          </TouchableOpacity>
          <View style={styles.userInfo}>
            <View>
              <TouchableOpacity>
                <Text style={styles.name}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Divider
          style={{
            width: "98%",
            alignSelf: "center",
            backgroundColor: colors.dividerBackgroundColor,
            marginBottom: 10,
          }}
        />
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },

  listItem: {
    flexDirection: "row",

    marginBottom: 10,
  },
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  photo: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 2,
  },

  name: {
    fontSize: 13,
    color: "#a9a4a4",
  },
});

export default SearchPeople;
