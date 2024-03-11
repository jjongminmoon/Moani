import MainUI from "../components/commonUI/MainUI";
import CommonTitle from "../components/commonUI/CommonTitle";
import Navbar from "../components/room/Navbar";
import RoomCarousel from "../components/room/RoomCarousel";
import Announcement from "../components/room/Announcement";
import { useState } from "react";

export default function RoomPage() {
  const [selectedMenu, setSelectedMenu] = useState(1);

  return (
    <MainUI>
      <CommonTitle>ROOM</CommonTitle>
      <Navbar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <RoomCarousel selectedMenu={selectedMenu} />
      <Announcement />
    </MainUI>
  );
}
