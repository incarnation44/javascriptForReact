import { useNavigate } from "react-router-dom";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import './DiaryList.css'
import { useState } from "react";


const DiaryList = ({ monthlyData }) => {

  //정렬 순서 상태 변화
  const [sortType, setSortType] = useState("latest")


  //페이지라우팅
  const nav = useNavigate();







  //정렬 처리
  const getSortedMonthlyData = () => {

    return monthlyData.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate)
      } else{
        return Number(b.createdDate) - Number(a.createdDate)
      }
    })
  }

  const sortedMonthlyData = getSortedMonthlyData();


  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button text={"새 일기 쓰기"} type={"POSITIVE"} onClick={()=>nav("/new")}/>
      </div>
      <div className="list_wrapper">
        {sortedMonthlyData.map((item)=> <DiaryItem key={item.id}{...item}/>)}
      </div>
    </div>
  );
};
export default DiaryList;