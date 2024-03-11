import styled from "@emotion/styled";
import { FcSpeaker } from "react-icons/fc";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function CommonAnnouncement({ title, children }: Props) {
  return (
    <Wrapper>
      <Line />
      <Title>
        <Icon />
        <h2>{title}</h2>
        <Icon />
      </Title>
      <Content>{children}</Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Line = styled.hr`
  width: 1px;
  height: 50px;
  border: 2px solid #ccc;
  margin-top: 50px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  margin-top: 10px;
`;

const Icon = styled(FcSpeaker)`
  font-size: 30px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 800px;
  margin-top: 20px;
  padding: 20px;
  background-color: #eee;
  border-radius: 8px;
  font-size: 18px;

  .notice {
    margin-top: 30px;
    font-size: 20px;
    color: var(--moa-red);
  }
`;
