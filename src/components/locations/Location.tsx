import styled from "@emotion/styled";
import { MapContainer } from "./MapContainer";

export default function Location() {
  const address = "제주시 한경면 용수5길 4-2";

  return (
    <Wrapper>
      <MapContainer address={address} />
      <Caption>{address}</Caption>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
`;

const Caption = styled.p`
  margin-top: 30px;
  font-size: 20px;
`;
