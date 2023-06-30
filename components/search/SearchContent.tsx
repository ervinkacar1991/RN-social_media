import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import FastImage from "react-native-fast-image";
import SearchTabs from "./SearchTabs";

interface CustomError {
  message: string;
}
interface ImageData {
  id: string;
  photo_thumbnail: string | null;
}
interface SearchContentProps {
  data: ImageData[];
  isLoading: boolean;
  isError: boolean;
  error?: CustomError;
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContent = ({
  data,
  isLoading,
  isError,
  error,
  activeTab,
  setActiveTab,
}: SearchContentProps) => {
  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>Error: {(error as CustomError)?.message}</Text>
      </View>
    );
  }

  const renderImage = ({ item }: { item: ImageData }) => {
    if (item.photo_thumbnail) {
      return (
        <FastImage
          source={{
            uri: item.photo_thumbnail,
          }}
          style={{ width: "100%", height: 200 }}
          resizeMode={FastImage.resizeMode.cover}
        />
      );
    } else {
      return <Text>Slika nije dostupna</Text>;
    }
  };

  return (
    <View>
      {/* <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View key={item.id}>
            {item.photo_thumbnail ? (
              <Image
                source={{
                  uri: item.photo_thumbnail,
                }}
                style={{ width: "100%", height: 200 }}
              />
            ) : (
              <Text>Slika nije dostupna</Text>
            )}
          </View>
        )}
      /> */}
      <SearchTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 0 && (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderImage}
        />
      )}
      {activeTab === 1 && (
        <Text>Users</Text>
        // {/* Add your implementation for displaying Users */}
      )}

      {activeTab === 2 && (
        <Text>Posts</Text>
        // {/* Add your implementation for displaying Posts */}
      )}
    </View>
  );
};

export default SearchContent;
