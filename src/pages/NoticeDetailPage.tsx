import styled from "@emotion/styled";
import useNoticeDetail from "../hooks/notice-detail";
import ContentViewer from "../components/notice-detail/ContentViewer";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { dbService } from "../services/firebase";

export default function NoticeDetailPage() {
  const user = useContext(AuthContext);
  const { notice_detail } = useNoticeDetail();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleRemoveNotice = () => {
    const docRef = doc(dbService, "notices", String(id));

    if (confirm("공지사항을 삭제하시겠습니까?")) {
      deleteDoc(docRef)
        .then(() => {
          alert("공지사항이 삭제되었습니다.");
          navigate("/notices");
        })
        .catch((err) => alert(err));
    }
  };

  return (
    <Section>
      <Container>
        <Title>{notice_detail?.title}</Title>
        <div>{notice_detail?.content && <ContentViewer content={notice_detail?.content} />}</div>
        <ButtonBox>
          <Button onClick={() => navigate("/notices")}>목록보기</Button>
          {user ? <Button onClick={() => navigate(`/notice/modify/${id}`)}>수정하기</Button> : null}
          {user ? <Button onClick={handleRemoveNotice}>삭제하기</Button> : null}
        </ButtonBox>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-top: 120px;
`;

const Container = styled.div`
  width: 750px;
  height: 800px;
  padding: 10px;
  background-color: #eee;
  border-radius: 6px;

  .toastui-editor-contents {
    width: 100%;
    height: 660px;
    margin-top: 10px;
    padding: 10px 20px;
    border: 1px solid #ddd;
    border-radius: 6px;
    background-color: white;
    overflow-y: scroll;
  }
`;

const Title = styled.h1`
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: white;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: right;
  gap: 20px;
  margin-top: 15px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  color: white;
  background-color: black;
`;
