import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useContext } from "react";
import { UserContext, UserProvider } from "./context/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthorizedStack, UnauthorizedStack } from "./screens/navigation";
import { ToastProvider } from "react-native-toast-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SearchProvider } from "./context/SearchContext";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();
const AuthNavigator = () => {
  const { token } = useContext(UserContext);

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
    } else {
      handleSetToken(null);
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
        <SearchProvider>
          <ToastProvider offsetBottom={80} swipeEnabled={true}>
            <Root />
          </ToastProvider>
        </SearchProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}
