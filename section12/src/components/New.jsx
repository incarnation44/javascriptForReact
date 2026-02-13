// 상단 헤더 UI
import Header from "../components/Header";

// 버튼 컴포넌트
import Button from "../components/Button";

// 입력폼 (공용 컴포넌트)
// 새 작성 / 수정 둘 다 사용됨
import Editor from "../components/Editor";

// 페이지 이동용
import { useNavigate } from "react-router-dom";

// 전역 상태 사용
import { useContext } from "react";

// App.jsx에서 만든 저장 함수 가져오기
import { DiaryDispatchContext } from "../App";


const New = () => {
  // 페이지 이동 함수 (뒤로가기, 홈 이동)
  const nav = useNavigate();

  // 전역에서 onCreate 함수 가져오기
  // → 새 일기 저장 함수
  const { onCreate } = useContext(DiaryDispatchContext);

  // Editor에서 전달해주는 입력값(input) 받아서
  // 새 일기 저장
  const onSubmit = (input) => {

    // input 안에 있는 값
    // createdDate : 날짜
    // emotionId   : 감정
    // content     : 내용

    onCreate(
      input.createdDate.getTime(), // 날짜 (숫자 저장)
      input.emotionId,             // 감정
      input.content                // 내용
    );

    // 저장 후 홈으로 이동
    nav("/", { replace: true });
  };

  return (
    <div>

      {/* 상단 헤더 */}
      <Header
        title={"새 일기 쓰기"}

        // 왼쪽 버튼 (뒤로가기)
        leftChild={
          <Button
            text={"< 뒤로"}
            onClick={() => nav(-1)}
          />
        }
      />

      {/* 입력폼 */}
      {/* onSubmit 함수 전달 */}
      {/* initData 없음 → 새 작성 모드 */}
      <Editor onSubmit={onSubmit} />

    </div>
  );
};

export default New;
