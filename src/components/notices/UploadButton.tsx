import styled from "@emotion/styled";
import Swal from "sweetalert2";
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

  const handleUpload = () => {
    const coll = collection(dbService, "notices");

    if (title == null) {
      Swal.fire({
        text: "제목을 입력해주세요!",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500
      });

      return;
    } else if (content == null) {
      Swal.fire({
        text: "내용을 입력해주세요!",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500
      });

      return;
    } else {
      Swal.fire({
        text: "공지사항을 업로드하시겠습니까?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#000",
        cancelButtonColor: "#d33",
        confirmButtonText: "업로드",
        cancelButtonText: "취소"
      }).then((result) => {
        if (result.isConfirmed) {
          addDoc(coll, {
            title: title,
            content: content,
            createdAt: dateString
          });

          setOpenForm(false);

          Swal.fire({
            text: "업로드 완료",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
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
