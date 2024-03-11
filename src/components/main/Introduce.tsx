import styled from "@emotion/styled";
import moaniMain2 from "../../assets/main/moaniMain2.jpg";
import moaniMain3 from "../../assets/main/moaniMain3.jpeg";
import moaniMain4 from "../../assets/main/moaniMain4.jpeg";
import moaniMain5 from "../../assets/main/moaniMain5.jpeg";

// 이미지 데이터 하단
export default function Introduce() {
  return (
    <Container>
      <Caption>제주 서쪽</Caption>
      {previewData.map(({ id, title, image, alter }) => (
        <Wrapper key={id}>
          <h2>{title}</h2>
          <Image src={image} alt={alter} objectFit={id == 3 ? "fill" : "cover"} />
          <Line display={id == 4 ? "none" : "block"} />
        </Wrapper>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 50px;
`;

const Caption = styled.p`
  padding: 5px 20px;
  margin-bottom: 20px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img<{ objectFit: string }>`
  width: 800px;
  height: 500px;
  margin: 20px 0;
  border-radius: 10px;
  object-fit: ${(props) => props.objectFit};
`;

const Line = styled.hr<{ display: string }>`
  display: ${(props) => props.display};
  width: 1px;
  height: 100px;
  border: 2px solid #ccc;
`;

const previewData = [
  {
    id: 1,
    title: "신창 풍차해안도로 근처, 하루 한 팀만을 위한 독채 숙소",
    image: moaniMain2,
    alter: "신창 풍차해안도로 이미지"
  },
  {
    id: 2,
    title: "화이트톤의 깔끔하고 감성 있는 내부 인테리어",
    image: moaniMain3,
    alter: "숙소 내부 이미지"
  },
  {
    id: 3,
    title: "조용하고 한적한 숙소에서 즐기는 우리만의 제주",
    image: moaniMain4,
    alter: "숙소 마당 이미지"
  },
  {
    id: 4,
    title: "돌담과 야자수 위로 노을을 볼 수 있는 넓은 마당",
    image: moaniMain5,
    alter: "숙소 노을 이미지"
  }
];
