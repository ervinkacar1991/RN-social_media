import { View, Text } from "react-native";
import React from "react";
import SearchTabs from "./SearchTabs";
import SearchPeople from "./searchContentTabs/SearchPeople";
import SearchUsers from "./searchContentTabs/SearchUsers";
import SearchPosts from "./searchContentTabs/SearchPosts";

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
  error: CustomError | null;
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
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
  // console.log(data.bio);
  return (
    <View>
      <SearchTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

export default SearchContent;
