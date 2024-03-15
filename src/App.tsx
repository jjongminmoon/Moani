import PageNavigator from "./PageNavigator";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ScrollToUp from "./util/ScrollToUp";
import Swal from "sweetalert2";
import { AuthProvider } from "./contexts/AuthProvider";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width: 1024px)"
  });

  useEffect(() => {
    if (isMobile) {
      Swal.fire({
        text: "모바일 페이지는 준비중입니다",
        icon: "warning",
        confirmButtonColor: "coral",
        confirmButtonText: "인스타 계정 이동"
      }).then((result) => {
        if (result.isConfirmed) {
          window.open("https://www.instagram.com/jejumoanistay/");
        }
      });
    }
  });

  return (
    <>
      <AuthProvider>
        <Header />
        <main>
          <PageNavigator />
        </main>
        <Footer />
      </AuthProvider>
      <ScrollToUp />
    </>
  );
}

export default App;
