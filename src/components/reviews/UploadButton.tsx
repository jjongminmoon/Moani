import styled from "@emotion/styled";
import Swal from "sweetalert2";
import { SetStateAction } from "react";
import { dbService } from "../../services/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getToday } from "../../util/getToday";

type Props = {
  image: any;
  setOpenForm: React.Dispatch<SetStateAction<boolean>>;
};

export default function UploadButton({ image, setOpenForm }: Props) {
  const dateString = getToday();

  const handleUpload = async () => {
    const coll = collection(dbService, "reviews");

    if (image == null) {
      Swal.fire({
        text: "이미지를 추가해주세요!",
        icon: "warning",
        showConfirmButton: false,
        timer: 1500
      });

      return;
    } else {
      Swal.fire({
        text: "리뷰를 업로드하시겠습니까?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#000",
        cancelButtonColor: "#d33",
        confirmButtonText: "업로드",
        cancelButtonText: "취소"
      }).then((result) => {
        if (result.isConfirmed) {
          addDoc(coll, {
            image: image,
            createdAt: dateString
          });
        }

        setOpenForm(false);

        Swal.fire({
          text: "업로드 완료",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
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
