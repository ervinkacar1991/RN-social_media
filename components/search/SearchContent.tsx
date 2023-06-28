import { View, Text, FlatList } from "react-native";
import React from "react";
import FastImage from "react-native-fast-image";

interface CustomError {
  message: string;
}

interface SearchContentProps {
  data: Array<{ id: string; image: string; size: string[] }>;
  isLoading: boolean;
  isError: boolean;
  error?: CustomError | null;
}

const SearchContent = ({
  data,
  isLoading,
  isError,
  error,
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

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FastImage
            source={{
              uri: item.image,
              priority: FastImage.priority.normal,
              cache: FastImage.cacheControl.immutable,
            }}
            style={{ width: "100%", height: 200 }}
            resizeMode={FastImage.resizeMode.cover}
          />
        )}
      />
    </View>
  );
};

export default SearchContent;
