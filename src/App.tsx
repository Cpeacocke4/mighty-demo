import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./screens/Dashboard";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard />
    </QueryClientProvider>
  );
};

export default App;
