import PageNavigator from "./PageNavigator";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ScrollToUp from "./util/ScrollToUp";
import { AuthProvider } from "./contexts/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {}
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Header />
        <main>
          <PageNavigator />
        </main>
        <Footer />
      </AuthProvider>
      <ScrollToUp />
    </QueryClientProvider>
  );
}

export default App;
