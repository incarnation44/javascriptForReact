import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 감정 리스트 (선택 버튼용)
const emotionList = [
  { emotionId: 1, emotionName: "완전 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "끔찍함" },
];

// Date → input type="date"용 문자열 변환
const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;

  return `${year}-${month}-${date}`;
};

// initData : 수정페이지에서 넘어온 기존 일기
// onSubmit : 저장 함수 (New / Edit 둘다 사용)
const Editor = ({ initData, onSubmit }) => {
  const nav = useNavigate();

  // 입력 상태
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  // 수정페이지 들어왔을 때 기존 데이터 세팅
  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  // input 값 변경
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

  // 저장 버튼
  const onSubmitButtonClick = () => {
    onSubmit(input); // 👉 실제 저장은 부모(New/Edit)가 함
  };

  return (
    <div className="Editor">

      {/* 날짜 */}
      <section>
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </section>

      {/* 감정 선택 */}
      <section>
        <h4>오늘의 감정</h4>
        {emotionList.map((item) => (
          <EmotionItem
            key={item.emotionId}
            {...item}
            isSelected={item.emotionId === input.emotionId}
            onClick={() =>
              onChangeInput({
                target: { name: "emotionId", value: item.emotionId },
              })
            }
          />
        ))}
      </section>

      {/* 내용 */}
      <section>
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
        />
      </section>

      {/* 버튼 */}
      <section>
        <Button onClick={() => nav(-1)} text={"취소"} />
        <Button onClick={onSubmitButtonClick} text={"저장"} type="POSITIVE" />
      </section>

    </div>
  );
};

export default Editor;
