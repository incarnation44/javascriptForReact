// 스타일
import "./Editor.css";

// 감정 버튼 컴포넌트
import EmotionItem from "./EmotionItem";

// 공통 버튼
import Button from "./Button";

// 상태 + 생명주기
import { useState, useEffect } from "react";

// 페이지 이동
import { useNavigate } from "react-router-dom";


// 감정 목록 (상수)
const emotionList = [
  { emotionId: 1, emotionName: "완전 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "끔찍함" },
];


// 날짜 → yyyy-mm-dd 문자열로 변환
// input type="date"는 이 형식만 받음
const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;

  return `${year}-${month}-${date}`;
};


// initData = 수정페이지에서 넘어온 기존 데이터
// onSubmit = 저장 함수 (App.jsx에서 내려옴)
const Editor = ({ initData, onSubmit }) => {

  // 뒤로가기용
  const nav = useNavigate();

  // 입력 상태
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });


  // 🔥 수정 페이지에서 들어왔을 때
  // 기존 데이터로 input 채우기
  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);


  // input 변경
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    // 날짜는 Date 객체로 변환
    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };


  // 저장 버튼 클릭
  const onSubmitButtonClick = () => {
    onSubmit(input);
  };


  return (
    <div className="Editor">

      {/* 날짜 */}
      <section className="date_section">
        <h4>오늘의 날짜</h4>

        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </section>


      {/* 감정 */}
      <section className="emotion_section">
        <h4>오늘의 감정</h4>

        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}

              // emotionId, emotionName 전달
              {...item}

              // 선택된 감정
              isSelected={item.emotionId === input.emotionId}

              // 클릭 시 감정 변경
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
            />
          ))}
        </div>
      </section>


      {/* 내용 */}
      <section className="content_section">
        <h4>오늘의 일기</h4>

        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        />
      </section>


      {/* 버튼 */}
      <section className="button_section">
        {/* 취소 */}
        <Button
          onClick={() => nav(-1)}
          text={"취소하기"}
        />

        {/* 저장 */}
        <Button
          onClick={onSubmitButtonClick}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};

export default Editor;
