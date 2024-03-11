import styled from "@emotion/styled";
import TextArea from "../components/notice-modify/TextArea";
import { useState } from "react";
import ModifyButton from "../components/notice-modify/ModifyButton";

export default function NoticeModifyPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Section>
      <Container>
        <TextArea title={title} setTitle={setTitle} content={content} setContent={setContent} />
        <ModifyButton title={title} content={content} />
      </Container>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-top: 120px;
`;

const Container = styled.div`
  width: 750px;
  height: 800px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 6px;
`;
