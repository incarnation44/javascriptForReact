import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";
import Editor from "./Editor";
import { useContext } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();

  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);

  const curDiaryItem = data.find(
    (item) => String(item.id) === String(params.id)
  );

  const onSubmit = (input) => {
    onUpdate(
      Number(params.id),
      input.createdDate,
      input.emotionId,
      input.content
    );
    nav("/", { replace: true });
  };

  const onDeleteClick = () => {
    onDelete(Number(params.id));
    nav("/", { replace: true });
  };

  if (!curDiaryItem) return null;

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button text={"삭제하기"} type={"NEGATIVE"} onClick={onDeleteClick} />
        }
      />

      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
