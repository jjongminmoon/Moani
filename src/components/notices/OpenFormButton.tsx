import styled from "@emotion/styled";
import UploadNoticeForm from "./UploadNoticeForm";
import { SetStateAction } from "react";

type Props = {
  openForm: boolean;
  setOpenForm: React.Dispatch<SetStateAction<boolean>>;
};

export default function OpenFormButton({ openForm, setOpenForm }: Props) {
  return (
    <>
      <Button onClick={() => setOpenForm(true)}>업로드</Button>

      {openForm ? <UploadNoticeForm setOpenForm={setOpenForm} /> : null}
    </>
  );
}

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  color: white;
  background-color: black;
  border: none;
  border-radius: 8px;
`;