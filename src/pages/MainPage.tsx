import Introduce from "../components/main/Introduce";
import MainUI from "../components/commonUI/MainUI";

export default function MainPage() {
  return (
    <MainUI>
      <div id="move-preview">
        <Introduce />
      </div>
    </MainUI>
  );
}
