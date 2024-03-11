import CommonTitle from "../components/commonUI/CommonTitle";
import MainUI from "../components/commonUI/MainUI";
import ReservationLink from "../components/reservation/ReservationLink";

export default function ReservationPage() {
  return (
    <MainUI>
      <CommonTitle>RESERVATION</CommonTitle>
      <ReservationLink />
    </MainUI>
  );
}
