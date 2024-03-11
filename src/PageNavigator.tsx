import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "./components/commonUI/LoadingSpinner";

const MainPage = lazy(() => import("./pages/MainPage"));
const RoomPage = lazy(() => import("./pages/RoomPage"));
const LocationsPage = lazy(() => import("./pages/LocationsPage"));
const ReservationPage = lazy(() => import("./pages/ReservationPage"));
const ReviewsPage = lazy(() => import("./pages/ReviewsPage"));
const NoticesPage = lazy(() => import("./pages/NoticesPage"));
const NoticeDetailPage = lazy(() => import("./pages/NoticeDetailPage"));
const NoticeModifyPage = lazy(() => import("./pages/NoticeModifyPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

export default function PageNavigator() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/room" element={<RoomPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/notice/:id" element={<NoticeDetailPage />} />
        <Route path="/notice/modify/:id" element={<NoticeModifyPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Suspense>
  );
}
