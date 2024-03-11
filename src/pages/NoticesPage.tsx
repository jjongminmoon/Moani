import MainUI from "../components/commonUI/MainUI";
import CommonTitle from "../components/commonUI/CommonTitle";
import OpenFormButton from "../components/notices/OpenFormButton";
import NoticeList from "../components/notices/NoticeList";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";

export default function NoticesPage() {
  const user = useContext(AuthContext);
  const [openForm, setOpenForm] = useState(false);

  console.log();

  return (
    <MainUI>
      <CommonTitle>NOTICES</CommonTitle>
      {user ? <OpenFormButton openForm={openForm} setOpenForm={setOpenForm} /> : null}
      <NoticeList />
    </MainUI>
  );
}
