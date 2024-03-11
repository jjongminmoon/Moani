import styled from "@emotion/styled";
import BarLoader from "react-spinners/BarLoader";

export default function LoadingSpinner() {
  return (
    <Container>
      <Wrapper>
        <BarLoader color="#ffffff" />
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0);
  z-index: 9999;  
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
