import styled from "@emotion/styled";
import Swal from "sweetalert2";
import useNoticeDetail from "../../hooks/notice-detail";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { dbService } from "../../services/firebase";

type Props = {
  title: string;
  content: string;
};

export default function ModifyButton({ title, content }: Props) {
  const { notice_detail } = useNoticeDetail();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleModifyNotice = () => {
    const docRef = doc(dbService, "notices", String(id));

    Swal.fire({
      text: "공지사항을 수정하시겠습니까?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#d33",
      confirmButtonText: "수정",
      cancelButtonText: "취소"
    }).then((result) => {
      if (result.isConfirmed) {
        updateDoc(docRef, {
          title: title ? title : notice_detail?.title,
          content: content
        })
          .then(() => {
            Swal.fire({
              text: "수정 완료",
              icon: "success",
              showConfirmButton: false,
              timer: 1500
            });
            navigate(`/notice/${id}`);
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
    <ButtonBox>
      <Button onClick={handleModifyNotice}>저장</Button>
    </ButtonBox>
  );
}

const ButtonBox = styled.div`
  display: flex;
  justify-content: right;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  color: white;
  background-color: black;
`;
