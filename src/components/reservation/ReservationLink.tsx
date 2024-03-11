import styled from "@emotion/styled";
import CommonAnnouncement from "../commonUI/CommonAnnouncement";
import telIcon from "../../assets/icon/tel-icon.png";
import instaIcon from "../../assets/icon/insta-icon.png";
import blogIcon from "../../assets/icon/blog-icon.png";
import reserveIcon from "../../assets/icon/reserve-icon.png";
import airbnbIcon from "../../assets/icon/airbnb-icon.png";
import yeogiIcon from "../../assets/icon/yeogi-icon.png";
import yanoljaIcon from "../../assets/icon/yanolja-icon.png";
import { Link } from "react-router-dom";

const snsData = [
  {
    id: 1,
    text: "전화/문자 문의 예약",
    alter: "전화 아이콘",
    url: "tel:010-8652-2178",
    icon: telIcon
  },
  {
    id: 2,
    text: "인스타그램 문의 예약",
    alter: "인스타그램 아이콘",
    url: "https://www.instagram.com/jejumoanistay/",
    icon: instaIcon
  },
  {
    id: 3,
    text: "네이버 예약",
    alter: "네이버 예약 아이콘",
    url: "https://booking.naver.com/booking/3/bizes/710725/items/4462549?tr=bnm",
    icon: reserveIcon
  },
  {
    id: 4,
    text: "에어비앤비 예약",
    alter: "에어비앤비 아이콘",
    url: "https://www.airbnb.co.kr/rooms/707664978776884652?preview_for_ml=true&source_impression_id=p3_1664682469_lgGflgoYyDo8wcm%2F",
    icon: airbnbIcon
  },
  {
    id: 5,
    text: "여기어때 예약",
    alter: "여기어때 아이콘",
    url: "https://place-site.yanolja.com/places/10046346",
    icon: yeogiIcon
  },
  {
    id: 6,
    text: "야놀자 예약",
    alter: "야놀자 아이콘",
    url: "https://www.yeogi.com/domestic-accommodations/72034?checkIn=2024-02-16&checkOut=2024-02-17&personal=2",
    icon: yanoljaIcon
  },
  {
    id: 7,
    text: "네이버 블로그 문의 예약",
    alter: "네이버 블로그 아이콘",
    url: "https://blog.naver.com/moanistay",
    icon: blogIcon
  }
];

export default function ReservationLink() {
  return (
    <CommonAnnouncement title="예약 방법">
      {snsData.map(({ id, text, alter, url, icon }) => (
        <Item key={id} marginBottom={id == 7 ? "0" : "10px"}>
          <Link to={url} target="_blank" rel="noreferrer" className="reserv-link">
            <Icon src={icon} alt={alter} />
            <p>{text}</p>
          </Link>
        </Item>
      ))}
    </CommonAnnouncement>
  );
}

const Item = styled.div<{ marginBottom: string }>`
  width: 100%;
  height: 80px;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  margin-bottom: ${(props) => props.marginBottom};

  &:hover {
    background-color: #ddd;
  }

  .reserv-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;
