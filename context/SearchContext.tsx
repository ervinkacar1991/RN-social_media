import React, { createContext, useContext, useState, useEffect } from "react";

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

const SearchContext = createContext<SearchContextType | null>(null);

interface SearchProviderProps {
  children: React.ReactNode;
}

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};
