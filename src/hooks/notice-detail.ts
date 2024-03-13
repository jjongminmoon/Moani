import { useParams } from "react-router-dom";
import useNoticeList from "./notices";

type Props = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

export default function useNoticeDetail() {
  const { noticeData } = useNoticeList();
  const { id } = useParams();

  const notice_detail: Props | undefined = noticeData.noticeList?.find(
    (notice: Props) => notice.id == id
  );

  return { notice_detail };
}
