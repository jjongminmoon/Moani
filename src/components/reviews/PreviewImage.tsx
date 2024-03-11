import styled from "@emotion/styled";
import { SetStateAction } from "react";
import { FcAddImage } from "react-icons/fc";

type Props = {
  image: any;
  setImage: React.Dispatch<SetStateAction<any>>;
};

export default function PreviewImage({ image, setImage }: Props) {
  //
  const uploadImage = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImage(reader.result || null);
        resolve();
      };
    });
  };

  return (
    <Wrapper htmlFor="image-upload">
      <input type="file" id="image-upload" accept={"image/*"} onChange={(e) => uploadImage(e)} />
      {image ? <Image src={image} alt="사용자 업로드 이미지" /> : <ImageIcon />}
    </Wrapper>
  );
}

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 90%;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;

  #image-upload {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: fill;
`;

const ImageIcon = styled(FcAddImage)`
  font-size: 50px;
`;
