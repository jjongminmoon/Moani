import styled from "@emotion/styled";
import { SetStateAction } from "react";
import { dbService } from "../../services/firebase";
import { addDoc, collection } from "firebase/firestore";

type Props = {
  image: any;
  setOpenForm: React.Dispatch<SetStateAction<boolean>>;
};

export default function UploadButton({ image, setOpenForm }: Props) {
  //
  const handleUpload = async () => {
    const coll = collection(dbService, "reviews");

    if (image == null) {
      alert("이미지를 첨부해주세요.");
      return;
    } else {
      if (confirm("리뷰를 업로드하시겠습니까?")) {
        await addDoc(coll, {
          image: image,
          createdAt: Date.now()
        });

        setOpenForm(false);
        alert("리뷰 업로드가 완료되었습니다.");
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
