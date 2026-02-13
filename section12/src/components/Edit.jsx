import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";
import Editor from "./Editor";
import { useContext } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  const params = useParams();     // URL id 읽기
  const nav = useNavigate();

  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);

  // 현재 수정할 일기 찾기
  const curDiaryItem = data.find(
    (item) => String(item.id) === String(params.id)
  );

  // 🔥 수정 완료
  const onSubmit = (input) => {
    // 수정 확인창
    if (!window.confirm("정말 수정하시겠습니까?")) return;

    onUpdate(
      Number(params.id),
      input.createdDate,
      input.emotionId,
      input.content
    );

    nav("/", { replace: true });
  };

  // 🔥 삭제
  const onDeleteClick = () => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;

    onDelete(Number(params.id));
    nav("/", { replace: true });
  };

  if (!curDiaryItem) return null;

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text={"뒤로"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"삭제"} type="NEGATIVE" onClick={onDeleteClick} />
        }
      />

      {/* Editor 재사용 */}
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
