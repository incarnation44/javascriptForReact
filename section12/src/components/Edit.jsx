// URL 파라미터(id) 읽기 + 페이지 이동용
import { useParams, useNavigate } from "react-router-dom";

// 공통 UI 컴포넌트
import Header from "./Header";
import Button from "./Button";
import Editor from "./Editor";

// 전역 상태 사용
import { useContext } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  // 현재 URL의 id 가져오기 (/edit/3 이런거)
  const params = useParams();

  // 페이지 이동 함수
  const nav = useNavigate();

  // App.jsx에서 만든 전역 함수들 가져오기
  // onDelete : 삭제
  // onUpdate : 수정
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  // 전체 일기 데이터 가져오기
  const data = useContext(DiaryStateContext);

  // 현재 수정하려는 일기 찾기
  // URL id와 같은 id 찾기
  const curDiaryItem = data.find(
    (item) => String(item.id) === String(params.id)
  );

  // 수정 완료 버튼 눌렀을 때 실행
  const onSubmit = (input) => {
    // 수정 함수 실행
    onUpdate(
      Number(params.id),      // id
      input.createdDate,      // 날짜
      input.emotionId,        // 감정
      input.content           // 내용
    );

    // 수정 후 홈으로 이동
    nav("/", { replace: true });
  };

  // 삭제 버튼 클릭 시
  const onDeleteClick = () => {
    // 삭제 실행
    onDelete(Number(params.id));

    // 삭제 후 홈으로 이동
    nav("/", { replace: true });
  };

  // 해당 일기 없으면 아무것도 안보이게
  if (!curDiaryItem) return null;

  return (
    <div>
      {/* 상단 헤더 */}
      <Header
        title={"일기 수정하기"}

        // 왼쪽 버튼 (뒤로가기)
        leftChild={
          <Button text={"< 뒤로가기"} onClick={() => nav(-1)} />
        }

        // 오른쪽 버튼 (삭제)
        rightChild={
          <Button
            text={"삭제하기"}
            type={"NEGATIVE"}
            onClick={onDeleteClick}
          />
        }
      />

      {/* 수정용 Editor 컴포넌트 */}
      {/* initData = 기존 일기 데이터 */}
      {/* onSubmit = 수정 완료 함수 */}
      <Editor
        initData={curDiaryItem}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Edit;
