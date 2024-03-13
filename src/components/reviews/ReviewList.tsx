import styled from "@emotion/styled";
import useReviewList from "../../hooks/reviews";
import { useState } from "react";
import PaginationButton from "../commonUI/PaginationButton";

export default function ReviewList() {
  const { reviewData } = useReviewList();
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = reviewData.perPage;
  const firstReviewIndex = (currentPage - 1) * reviewsPerPage;
  const lastReviewIndex = firstReviewIndex + reviewsPerPage;
  const reviewList = reviewData?.reviewList?.slice(firstReviewIndex, lastReviewIndex);

  return (
    <>
      <Container>
        {reviewList?.map(({ image }: { image: string }) => (
          <Card key={image}>
            <Image src={image} alt="고객 리뷰 이미지" />
          </Card>
        ))}
      </Container>
      <PaginationButton
        totalPages={reviewData.totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
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
  padding: 6px;
  background-color: #eee;
  border-radius: 12px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;
