import React from "react";
import SignedInStack from "./screens/navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "./context/UserContext";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <SignedInStack />
      </UserProvider>
    </QueryClientProvider>
  );
}
