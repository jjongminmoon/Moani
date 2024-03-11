import styled from "@emotion/styled";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import useNoticeDetail from "../../hooks/notice-detail";
import { SetStateAction, useEffect, useRef } from "react";
import { Editor } from "@toast-ui/react-editor";

import "@toast-ui/editor/dist/i18n/ko-kr";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import "tui-color-picker/dist/tui-color-picker.css";

type Props = {
  title: string;
  setTitle: React.Dispatch<SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<SetStateAction<string>>;
};

export default function TextArea({ setTitle, setContent }: Props) {
  const editorRef: any = useRef();
  const { notice_detail } = useNoticeDetail();

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleContent = () => {
    setContent(editorRef.current.getInstance().getMarkdown());
  };

  useEffect(() => {
    editorRef.current.getInstance().setMarkdown(notice_detail?.content);
  }, [notice_detail?.content]);

  return (
    <Wrapper>
      <TitleInput
        type="text"
        defaultValue={notice_detail?.title}
        onChange={handleTitle}
        placeholder="제목을 입력해주세요"
        required
      />
      <div>
        <Editor
          ref={editorRef}
          onChange={handleContent}
          initialValue={notice_detail?.content}
          previewStyle="vertical"
          height="660px"
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
  width: 100%;
  height: 95%;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: white;
  font-size: 24px;
`;
