import { useState, useRef } from "react";
import "../css/Editor.css";

// 학생 이름/점수를 입력해서 부모 컴포넌트로 전달하는 입력 폼 컴포넌트
const Editor = ({ onCreate }) => {
  // 각 입력값 상태 관리
  const [name, setName] = useState("");
  const [kor, setKor] = useState("");
  const [eng, setEng] = useState("");
  const [math, setMath] = useState("");

  // 이름 input에 포커스 주기 위한 ref
  const nameRef = useRef();

  // 등록 버튼 또는 엔터 입력 시 실행
  const onSubmit = () => {
    // 이름이 비어있으면 이름 input에 포커스 이동
    if (!name) {
      nameRef.current.focus();
      return;
    }

    // 부모 컴포넌트로 입력값 전달
    onCreate(name, kor, eng, math);

    // 입력창 초기화
    setName("");
    setKor("");
    setEng("");
    setMath("");
    nameRef.current.focus(); // 초기화 후 다시 이름에 포커스
  };

  // 엔터 키 누르면 등록 실행
  const onKeyDown = (e) => {
    if (e.key === "Enter") onSubmit();
  };

  return (
    <div className="editor">
      {/* 이름 입력 */}
      <input
        ref={nameRef}
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={onKeyDown}
      />
      {/* 국어 점수 입력 */}
      <input
        placeholder="국어"
        value={kor}
        onChange={(e) => setKor(e.target.value)}
        onKeyDown={onKeyDown}
      />
      {/* 영어 점수 입력 */}
      <input
        placeholder="영어"
        value={eng}
        onChange={(e) => setEng(e.target.value)}
        onKeyDown={onKeyDown}
      />
      {/* 수학 점수 입력 */}
      <input
        placeholder="수학"
        value={math}
        onChange={(e) => setMath(e.target.value)}
        onKeyDown={onKeyDown}
      />
      {/* 등록 버튼 */}
      <button onClick={onSubmit}>등록</button>
    </div>
  );
};

export default Editor;
