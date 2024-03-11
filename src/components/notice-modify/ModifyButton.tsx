import styled from "@emotion/styled";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { dbService } from "../../services/firebase";
import useNoticeDetail from "../../hooks/notice-detail";

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

    if (confirm("공지사항을 수정하시겠습니까?")) {
      updateDoc(docRef, {
        title: title ? title : notice_detail?.title,
        content: content
      })
        .then(() => {
          alert("공지사항이 수정되었습니다.");
          navigate("/notices");
        })
        .catch((err) => alert(err));
    }
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
