import styled from "@emotion/styled";
import useReviewList from "../../hooks/reviews";
import PaginationButton from "../commonUI/PaginationButton";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { dbService } from "../../services/firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

export default function ReviewList() {
  const user = useContext(AuthContext);
  const { reviewData } = useReviewList();
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = reviewData.perPage;
  const firstReviewIndex = (currentPage - 1) * reviewsPerPage;
  const lastReviewIndex = firstReviewIndex + reviewsPerPage;
  const reviewList = reviewData?.reviewList?.slice(firstReviewIndex, lastReviewIndex);
  const navigate = useNavigate();

  const handleRemoveNotice = (id: string) => {
    const docRef = doc(dbService, "reviews", String(id));

    Swal.fire({
      text: "리뷰를 삭제하시겠습니까?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#d33",
      confirmButtonText: "삭제",
      cancelButtonText: "취소"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteDoc(docRef)
          .then(() => {
            Swal.fire({
              text: "삭제 완료",
              icon: "success",
              showConfirmButton: false,
              timer: 1500
            });
            navigate("/reviews");
          })
          .catch((err) =>
            Swal.fire({
              text: err,
              icon: "error",
              confirmButtonText: "확인",
              confirmButtonColor: "#000"
            })
          );
      }
    });
  };

  return (
    <>
      <Container>
        {reviewList?.map(({ image, id }: { image: string; id: string }) => (
          <Card key={image}>
            <Image src={image} alt="고객 리뷰 이미지" />
            {user != null ? (
              <RemoveButton onClick={() => handleRemoveNotice(id)}>삭제</RemoveButton>
            ) : null}
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
  position: relative;
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

const RemoveButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 5px;
  border: none;
  border-radius: 8px;
  background-color: #fff;

  &:hover {
    background-color: #ddd;
  }
`;
