import { Viewer } from "@toast-ui/react-editor";

import "@toast-ui/editor/dist/toastui-editor.css";

export default function ContentViewer({ content }: { content: string }) {
  return <>{content && <Viewer initialValue={content} />}</>;
}
