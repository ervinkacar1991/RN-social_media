import React, { createContext, useContext, useState, useEffect } from "react";

interface SearchContextType {
  searchTermPeople: string;
  setSearchTermPeople: React.Dispatch<React.SetStateAction<string>>;
  searchTermPosts: string;
  setSearchTermPosts: React.Dispatch<React.SetStateAction<string>>;
  searchTermUsers: string;
  setSearchTermUsers: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = createContext<SearchContextType | null>(null);

interface SearchProviderProps {
  children: React.ReactNode;
}

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchTermPeople, setSearchTermPeople] = useState("");
  const [searchTermPosts, setSearchTermPosts] = useState("");
  const [searchTermUsers, setSearchTermUsers] = useState("");

  return (
    <SearchContext.Provider
      value={{
        searchTermPeople,
        setSearchTermPeople,
        searchTermPosts,
        setSearchTermPosts,
        searchTermUsers,
        setSearchTermUsers,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
