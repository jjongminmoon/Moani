import PageNavigator from "./PageNavigator";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ScrollToUp from "./util/ScrollToUp";
import Swal from "sweetalert2";
import { AuthProvider } from "./contexts/AuthProvider";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width: 1024px)"
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobile) {
      Swal.fire({
        text: "모바일 페이지는 준비중입니다",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "coral",
        cancelButtonColor: "gray",
        confirmButtonText: "인스타 계정 이동",
        cancelButtonText: "확인"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("https://www.instagram.com/jejumoanistay/");
        } else {
          navigate(-1);
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
