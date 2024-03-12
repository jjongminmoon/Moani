import styled from "@emotion/styled";
import mainImage from "../../assets/main/moaniMain1.jpg";
import roomImage from "../../assets/main/roomImage.jpeg";
import reservImage from "../../assets/room/bedRoom1-3.jpeg";
import locationsImage from "../../assets/main/locationsImage.jpg";
import reviewsImage from "../../assets/room/externalView5.jpeg";
import noticeImage from "../../assets/room/externalView3.jpeg";
import { BiArrowFromTop } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { Suspense } from "react";
import LoadingSpinner from "./LoadingSpinner";

export default function MainUI({ children }: { children: React.ReactNode }) {
  const params = useLocation().pathname;

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Section>
        <Wrapper height={params == "/" ? "100vh" : "800px"}>
          <Image
            src={
              params == "/"
                ? mainImage
                : params == "/room"
                ? roomImage
                : params == "/reservation"
                ? reservImage
                : params == "/locations"
                ? locationsImage
                : params == "/reviews"
                ? reviewsImage
                : noticeImage
            }
            alt="메인 이미지"
            height={params == "/" ? "100%" : "800px"}
          />
          <Arrow display={params == "/" ? "block" : "none"} />
        </Wrapper>
        {children}
      </Section>
    </Suspense>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div<{ height: string }>`
  height: ${(props) => props.height};
`;

const Image = styled.img<{ height: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.height};
  object-fit: cover;
  z-index: -50;
`;

const Arrow = styled(BiArrowFromTop)<{ display: string }>`
  display: ${(props) => props.display};
  position: absolute;
  left: 48%;
  color: white;
  font-size: 70px;
  animation: motion 0.3s linear 0s infinite alternate;

  @keyframes motion {
    0% {
      margin-top: 0px;
      bottom: 10px;
    }
    100% {
      margin-top: 10px;
      bottom: 20px;
    }
  }
`;
