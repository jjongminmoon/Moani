import styled from "@emotion/styled";
import { SetStateAction } from "react";
import { dbService } from "../../services/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getToday } from "../../util/getToday";

type Props = {
  title: string;
  setOpenForm: React.Dispatch<SetStateAction<boolean>>;
  content: string;
};

export default function UploadButton({ title, setOpenForm, content }: Props) {
  const dateString = getToday();

  const handleUpload = async () => {
    const coll = collection(dbService, "notices");

    if (title == null) {
      alert("제목을 입력해주세요.");
      return;
    } else if (content == null) {
      alert("내용을 입력해주세요.");
      return;
    } else {
      if (confirm("공지사항을 업로드하시겠습니까?")) {
        await addDoc(coll, {
          title: title,
          content: content,
          createdAt: dateString
        });

        setOpenForm(false);
        alert("공지사항 업로드가 완료되었습니다.");
      }
    }
  };

  return <Button onClick={handleUpload}>업로드</Button>;
}

const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 8px;
`;
