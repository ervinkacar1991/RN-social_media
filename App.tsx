import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useContext } from "react";
import { UserContext, UserProvider } from "./context/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthorizedStack, UnauthorizedStack } from "./screens/navigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

const queryClient = new QueryClient();

const AuthNavigator = () => {
  const { token } = useContext(UserContext);
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {token ? (
        <Stack.Screen name="Authorized" component={AuthorizedStack} />
      ) : (
        <Stack.Screen name="Unauthorized" component={UnauthorizedStack} />
      )}
    </Stack.Navigator>
  );
};

const Root = () => {
  const { handleSetToken } = useContext(UserContext);

  const loadFromStorage = async () => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      handleSetToken(token);

      //TODO: fetch user i postavi ga na contexr
    }
  };

  useEffect(() => {
    loadFromStorage();
  }, []);

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Root />
      </UserProvider>
    </QueryClientProvider>
  );
}
