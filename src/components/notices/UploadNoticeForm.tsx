import styled from "@emotion/styled";
import { SetStateAction, useState } from "react";
import { BiX } from "react-icons/bi";
import TextArea from "./TextArea";
import UploadButton from "./UploadButton";

type Props = {
  setOpenForm: React.Dispatch<SetStateAction<boolean>>;
};

export default function UploadNoticeForm({ setOpenForm }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Container>
      <Wrapper>
        <BiX className="exit" onClick={() => setOpenForm(false)} />
        <TextArea title={title} setTitle={setTitle} setContent={setContent} />
        <ButtonBox>
          <UploadButton title={title} setOpenForm={setOpenForm} content={content} />
          <ResetButton>초기화</ResetButton>
        </ButtonBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  height: 90%;
  padding: 30px;
  background-color: white;

  .exit {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 40px;
    cursor: pointer;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 20px;
  width: 80%;
`;

const ResetButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 8px;
`;
