import { Link } from "react-router-dom";
import CommonAnnouncement from "../commonUI/CommonAnnouncement";

export default function Announcement() {
  return (
    <CommonAnnouncement title="객실 안내사항">
      <p>1. 객실 내 구비 품목 : TV, 와이파이, 헤어드라이기, 에어컨, 제습기, 온풍기</p>
      <p>2. 샴푸, 린스, 바디워시, 핸드워시, 수건</p>
      <p>- 치약, 칫솔은 위생 상 구비 품목에 없으므로 개인적으로 챙겨주세요😂</p>
      <p>- 수건은 넉넉하게 구비해놓지만, 더 필요하시면 말씀해주세요.</p>
      <p>3. 냉장고, 정수기, 전자레인지, 토스터기, 네스프레소 버츄오 커피머신, 식기, 기본 양념</p>
      <p>- 식기 : 냄비, 소주잔, 맥주잔, 와인잔, 머그컵, 그릇, 수저, 가위, 칼, 도마 등</p>
      <p>- 기본 양념 : 간장, 고춧가루, 후추, 설탕, 소금 등</p>
      <p>4. 거실, 각 침실에는 에어컨이 설치되어 있습니다.</p>
      <p>5. 각 침실에 화이트 색상의 암막커튼이 설치되어 있습니다.</p>
      <p>6. 셀프 조식은 연박 시 숙소에 식빵, 딸기잼, 커피머신 캡슐을 제공해드립니다.</p>
      <p>
        {"(안내된 조식 외 사진 등에 배치된 것은 상황에 따라 다르거나 제공되지 않을 수 있습니다😂)"}
      </p>
      <Link className="notice" to="/notice/g9iK0EZg8nwGCsKJXAWT">
        📢 숙소 공지 사항으로 이동 (!필독!)
      </Link>
    </CommonAnnouncement>
  );
}
