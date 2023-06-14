import React from "react";
import SignedInStack from "./screens/navigation";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SignedInStack />
    </QueryClientProvider>
  );
}
