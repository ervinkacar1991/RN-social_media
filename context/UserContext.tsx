import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from "react";
import api from "../services/api";

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
  handleLogout: () => void;
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

  const handleLogout = useCallback(async () => {
    await AsyncStorage.removeItem("token");
    handleSetToken(null);
  }, []);

  // const handleDeleteToken = useCallback((token: string) => {
  //   setToken(null);
  //   AsyncStorage.removeItem("token");
  // }, []);

  const handleSetUser = useCallback((newUser: User | null) => {
    setuser(newUser);
  }, []);

  const loadUser = useCallback(async () => {
    try {
      const response = await api.fetchUser();
      setuser(response);
    } catch (error) {
      throw error;
    }
  }, []);
  useEffect(() => {
    loadUser();
  }, []);

  const loadFromStorage = async () => {
    const storedToken = await AsyncStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
    setIsLoading(false);
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
      handleLogout,
    };
  }, [user, token, handleSetToken, handleSetUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
