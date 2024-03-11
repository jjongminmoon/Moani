import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
};

export default function CommonTitle({ children }: Props) {
  return <Title>{children}</Title>;
}

const Title = styled.h1`
  font-size: 30px;
  margin-top: 50px;
`;
