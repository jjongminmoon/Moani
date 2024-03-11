import CommonTitle from "../components/commonUI/CommonTitle";
import MainUI from "../components/commonUI/MainUI";
import Announcement from "../components/locations/Announcement";
import Location from "../components/locations/Location";

export default function LocationsPage() {
  return (
    <MainUI>
      <CommonTitle>LOCATIONS</CommonTitle>
      <Location />
      <Announcement />
    </MainUI>
  );
}
