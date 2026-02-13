import Header from "./Header";
import Button from "./Button";
import DiaryList from "./DiaryList";
import { DiaryStateContext } from "../App";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const state = useContext(DiaryStateContext);
  const navigate = useNavigate();

  const [pivotDate, setPivotDate] = useState(new Date());

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  const monthlyData = state.filter(
    (item) => item.createdDate >= beginTime && item.createdDate <= endTime
  );

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={"<이전달"} onClick={onDecreaseMonth} />}
        rightChild={<Button text={"다음달>"} onClick={onIncreaseMonth} />}
      />

      <Button text={"새 일기 쓰기"} onClick={() => navigate("/new")} />

      <DiaryList monthlyData={monthlyData} />
    </div>
  );
};

export default Home;
