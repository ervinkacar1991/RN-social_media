import { createContext, useCallback, useMemo, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [token, setToken] = useState(null);

  const handleSetToken = useCallback((token) => {
    setToken(token);
  }, []);

  const handleSetUser = useCallback((user) => {
    setuser(user);
  }, []);

  const value = useMemo(() => {
    return {
      user,
      handleSetToken,
      token,
      handleSetUser,
    };
  }, [user, token]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
