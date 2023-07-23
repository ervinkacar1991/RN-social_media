import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from "react";

interface User {
  id: string;
  username: string;
  name: string;
  photo_thumbnail: string | null;
}

interface IUserContext {
  user: User | null;
  handleSetToken: (token: string) => void;
  token: string;
  handleSetUser: (user: any) => void;
}

const UserContext = createContext<IUserContext | null>(null);

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setuser] = useState<User | null>(null);
  const [token, setToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleSetToken = useCallback((token: string) => {
    setToken(token);
  }, []);

  const handleSetUser = useCallback((newUser: User | null) => {
    setuser(newUser);
  }, []);

  const loadFromStorage = async () => {
    const storedToken = await AsyncStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
    setIsLoading(false); // Postavite isLoading na false kada se završi učitavanje
  };

  useEffect(() => {
    loadFromStorage();
  }, []);

  const value = useMemo<IUserContext>(() => {
    return {
      user,
      handleSetToken,
      token,
      handleSetUser,
    };
  }, [user, token, handleSetToken, handleSetUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
