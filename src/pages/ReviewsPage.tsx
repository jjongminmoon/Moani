import MainUI from "../components/commonUI/MainUI";
import CommonTitle from "../components/commonUI/CommonTitle";
import OpenFormButton from "../components/reviews/OpenFormButton";
import ReviewList from "../components/reviews/ReviewList";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";

export default function ReviewsPage() {
  const user = useContext(AuthContext);
  const [openForm, setOpenForm] = useState(false);

  return (
    <MainUI>
      <CommonTitle>REVIEWS</CommonTitle>
      {user ? <OpenFormButton openForm={openForm} setOpenForm={setOpenForm} /> : null}
      <ReviewList />
    </MainUI>
  );
}
