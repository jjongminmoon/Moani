import styled from "@emotion/styled";
import useReviewList from "../../hooks/reviews";

export default function ReviewList() {
  const { reviewList } = useReviewList();

  return (
    <Container>
      {reviewList.map(({ image }: { image: string }) => (
        <Card key={image}>
          <Image src={image} alt="고객 리뷰 이미지" />
        </Card>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  margin-top: 40px;
  padding: 0 200px;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 4px;
  background-color: #eee;
  border-radius: 12px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;
