import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useQuery } from "react-query";
import api from "../../services/api";
import { suggestionsData } from "../../suggestionsData";
import AntDesign from "react-native-vector-icons/AntDesign";

const Recommended = () => {
  const [isFollow, setIsFollow] = useState(false);

  // console.log(suggestionsData);

  // const { isLoading, isError, data, error } = useQuery(
  //   "suggestedUsers",
  //   api.fetchSuggestedUsers
  // );

  // if (isLoading) {
  //   return <Text>Loading...</Text>;
  // }

  const renderRecommendedList = ({ item }) => {
    return (
      <View
        style={{
          width: 125,
          height: 160,
          margin: 3,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 0.5,
          borderColor: "#DEDEDE",
          borderRadius: 5,
          backgroundColor: "#011502",
        }}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
        >
          <AntDesign
            name="close"
            style={{ fontSize: 20, color: "white", opacity: 0.5 }}
          />
        </TouchableOpacity>
        <Image
          source={{
            uri: "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg",
          }}
          style={{ width: 50, height: 50, borderRadius: 100, marginTop: 10 }}
          resizeMode="cover"
        />
        <Text
          style={{
            fontSize: 15,
            color: "white",
            fontWeight: "600",
            marginTop: 10,
          }}
        >
          {item.name}
        </Text>
        <Text style={{ fontSize: 12, color: "white" }}>{item.username}</Text>
        <TouchableOpacity
          style={{ width: "80%", paddingVertical: 10 }}
          onPress={() => setIsFollow(!isFollow)}
        >
          <View
            style={{
              width: "100%",
              height: 25,
              backgroundColor: isFollow ? null : "#137547",
              borderWidth: isFollow ? 1 : 0,
              borderColor: "#DEDEDE",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <Text style={{ color: isFollow ? "white" : "white" }}>
              {isFollow ? "Following" : "Follow"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 8,
        }}
      >
        <Text
          style={{ color: "white", paddingVertical: 10, fontWeight: "bold" }}
        >
          Recommended
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: "#2493D9",
              paddingVertical: 10,
              fontWeight: "bold",
            }}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={suggestionsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderRecommendedList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Recommended;
