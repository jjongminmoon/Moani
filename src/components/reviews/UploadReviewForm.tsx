import styled from "@emotion/styled";
import PreviewImage from "./PreviewImage";
import UploadButton from "./UploadButton";
import { SetStateAction, useState } from "react";
import { BiX } from "react-icons/bi";

type Props = {
  setOpenForm: React.Dispatch<SetStateAction<boolean>>;
};

export default function UploadReviewForm({ setOpenForm }: Props) {
  const [image, setImage] = useState<any>(null);

  return (
    <Container>
      <Wrapper>
        <BiX className="exit" onClick={() => setOpenForm(false)} />
        <PreviewImage image={image} setImage={setImage} />
        <ButtonBox>
          <UploadButton image={image} setOpenForm={setOpenForm} />
          <ResetButton onClick={() => setImage(null)}>초기화</ResetButton>
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
