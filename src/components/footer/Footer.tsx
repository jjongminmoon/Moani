import styled from "@emotion/styled";
import instaIcon from "../../assets/icon/insta-icon.png";
import blogIcon from "../../assets/icon/blog-icon.png";
import reserveIcon from "../../assets/icon/reserve-icon.png";
import airbnbIcon from "../../assets/icon/airbnb-icon.png";
import yeogiIcon from "../../assets/icon/yeogi-icon.png";
import yanoljaIcon from "../../assets/icon/yanolja-icon.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";

const snsData = [
  {
    id: 1,
    alter: "인스타그램 아이콘",
    url: "https://www.instagram.com/jejumoanistay/",
    icon: instaIcon
  },
  {
    id: 2,
    alter: "네이버 블로그 아이콘",
    url: "https://blog.naver.com/moanistay",
    icon: blogIcon
  },
  {
    id: 3,
    alter: "네이버 예약 아이콘",
    url: "https://booking.naver.com/booking/3/bizes/710725/items/4462549?tr=bnm",
    icon: reserveIcon
  },
  {
    id: 4,
    alter: "에어비앤비 아이콘",
    url: "https://www.airbnb.co.kr/rooms/707664978776884652?preview_for_ml=true&source_impression_id=p3_1664682469_lgGflgoYyDo8wcm%2F",
    icon: airbnbIcon
  },
  {
    id: 5,
    alter: "여기어때 아이콘",
    url: "https://place-site.yanolja.com/places/10046346",
    icon: yeogiIcon
  },
  {
    id: 6,
    alter: "야놀자 아이콘",
    url: "https://www.yeogi.com/domestic-accommodations/72034?checkIn=2024-02-16&checkOut=2024-02-17&personal=2",
    icon: yanoljaIcon
  }
];

export default function Footer() {
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (confirm("로그아웃 하시겠습니까?")) {
      signOut(auth);
      alert("정상적으로 로그아웃 되었스니다.");
      navigate("/");
    }
  };

  return (
    <Section>
      <Name>모아니스테이</Name>
      <Wrapper>
        <p>제주시 한경면 용수5길 4-2</p>
        <p>|</p>
        <p>대표자 : 손명희</p>
        <p>|</p>
        <Link to="tel:010-8652-2178">연락처 : 010-8652-2178</Link>
        <p>|</p>
        <p>사업자 등록번호 : 173-22-01691</p>
      </Wrapper>
      <IconArea>
        {snsData.map(({ id, alter, url, icon }) => (
          <Link to={url} target="_blank" rel="noreferrer" key={id}>
            <Icon src={icon} alt={alter} />
          </Link>
        ))}
      </IconArea>
      <LogButton onClick={user ? handleLogout : () => navigate("/login")}>
        {user ? "관리자 로그아웃" : "관리자 로그인"}
      </LogButton>
    </Section>
  );
}

const Section = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 80px;
  padding: 40px 0;
  font-family: "GmarketSansMedium";
  font-size: 14px;
  border-top: 1px solid #ccc;

  .insta {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    padding: 5px;
    background: radial-gradient(
        circle farthest-corner at 32% 106%,
        #ffe17d 0%,
        #ffcd69 10%,
        #fa9137 28%,
        #eb4141 42%,
        transparent 82%
      ),
      linear-gradient(135deg, #234bd7 12%, #c33cbe 58%);
    color: white;
  }
`;

const Name = styled.h2`
  font-size: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  color: #999999;
`;

const IconArea = styled.div`
  display: flex;
  align-items: cennter;
  gap: 10px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;

const LogButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 8px;
`;
