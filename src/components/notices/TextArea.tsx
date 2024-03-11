import styled from "@emotion/styled";
import { SetStateAction, useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "tui-color-picker/dist/tui-color-picker.css";

type Props = {
  title: string;
  setTitle: React.Dispatch<SetStateAction<string>>;
  setContent: React.Dispatch<SetStateAction<string>>;
};

export default function TextArea({ title, setTitle, setContent }: Props) {
  const editorRef: any = useRef();

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleContent = () => {
    setContent(editorRef.current.getInstance().getMarkdown());
  };

  return (
    <Wrapper>
      <p>제목</p>
      <TitleInput
        type="text"
        value={title}
        onChange={handleTitle}
        placeholder="제목을 입력해주세요"
        required
      />
      <p>내용</p>
      <div>
        <Editor
          ref={editorRef}
          onChange={handleContent}
          initialValue="내용을 입력해주세요"
          previewStyle="vertical"
          height="500px"
          initialEditType="wysiwyg"
          hideModeSwitch={true}
          useCommandShortcut={false}
          plugins={[colorSyntax]}
          language="ko-KR"
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 90%;
  height: 100%;
  padding: 50px 0;
`;

const TitleInput = styled.input`
  height: 40px;
  padding: 0 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;
