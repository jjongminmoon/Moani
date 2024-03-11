import styled from "@emotion/styled";
import CarouselUI from "./CarouselUI";
import livingRoom from "../../assets/room/livingRoom.jpeg";
import kitchenRoom1 from "../../assets/room/kitchenRoom1.jpeg";
import kitchenRoom2 from "../../assets/room/kitchenRoom2.jpeg";
import kitchenRoom3 from "../../assets/room/kitchenRoom3.jpeg";
import restRoom from "../../assets/room/restRoom.jpeg";
import bedRoom1_1 from "../../assets/room/bedRoom1-1.jpeg";
import bedRoom1_2 from "../../assets/room/bedRoom1-2.jpeg";
import bedRoom1_3 from "../../assets/room/bedRoom1-3.jpeg";
import bedRoom1_4 from "../../assets/room/bedRoom1-4.jpg";
import bedRoom2 from "../../assets/room/bedRoom2.jpg";
import externalView1 from "../../assets/room/externalView1.jpg";
import externalView2 from "../../assets/room/externalView2.jpeg";
import externalView3 from "../../assets/room/externalView3.jpeg";
import externalView4 from "../../assets/room/externalView4.jpeg";
import externalView5 from "../../assets/room/externalView5.jpeg";

type Props = {
  selectedMenu: number;
};

const roomData = [
  { id: 1, image: externalView1, alter: "외부 전경1" },
  { id: 2, image: externalView2, alter: "외부 전경2" },
  { id: 3, image: externalView3, alter: "외부 전경3" },
  { id: 4, image: externalView4, alter: "외부 전경4" },
  { id: 5, image: externalView5, alter: "외부 전경5" },
  { id: 6, image: livingRoom, alter: "거실" },
  { id: 7, image: kitchenRoom1, alter: "주방1" },
  { id: 8, image: kitchenRoom2, alter: "주방2" },
  { id: 9, image: kitchenRoom3, alter: "주방3" },
  { id: 10, image: restRoom, alter: "화장실" },
  { id: 11, image: bedRoom1_1, alter: "침실1-1" },
  { id: 12, image: bedRoom1_2, alter: "침실1-2" },
  { id: 13, image: bedRoom1_3, alter: "침실1-3" },
  { id: 14, image: bedRoom1_4, alter: "침실1-4" },
  { id: 15, image: bedRoom2, alter: "침실2" }
];

export default function RoomCarousel({ selectedMenu }: Props) {
  return (
    <Container>
      <CarouselUI>
        {roomData
          .filter(({ id }) =>
            selectedMenu == 1
              ? id > 0 && id < 6
              : selectedMenu == 2
              ? id == 6
              : selectedMenu == 3
              ? id > 6 && id < 10
              : selectedMenu == 4
              ? id == 10
              : selectedMenu == 5
              ? id > 10 && id < 15
              : id == 15
          )
          .map(({ id, image, alter }) => (
            <Item key={id}>
              <Image src={image} alt={`${alter} 이미지`} />
            </Item>
          ))}
      </CarouselUI>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const Item = styled.div`
  width: 700px;
  height: 600px;
  background-color: black;
  border-radius: 12px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
