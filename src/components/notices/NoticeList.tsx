import styled from "@emotion/styled";
import useNoticeList from "../../hooks/notices";
import { useNavigate } from "react-router-dom";

type Props = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

export default function NoticeList() {
  const { noticeList } = useNoticeList();
  const navigate = useNavigate();

  return (
    <Container>
      <Table>
        <THead>
          <tr>
            <th>순번</th>
            <th>제목</th>
            <th>작성일자</th>
          </tr>
        </THead>
        <tbody>
          {noticeList.map((notice: Props, index: number) => (
            <ContentRow key={index} onClick={() => navigate(`/notice/${notice.id}`)}>
              <td width={"20%"}>{index + 1}</td>
              <td width={"60%"}>{notice.title}</td>
              <td width={"20%"}>{notice.createdAt}</td>
            </ContentRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  margin-top: 40px;
  padding: 0 200px;
`;

const Table = styled.table`
  width: 100%;
  padding: 3px;
  text-align: center;
  border: 2px solid #ddd;
  border-radius: 10px;

  th,
  td {
    padding: 5px;
  }
`;

const THead = styled.thead`
  background-color: #ddd;
`;

const ContentRow = styled.tr`
  cursor: pointer;

  &:hover {
    background-color: #f8f8f8;
  }
`;
