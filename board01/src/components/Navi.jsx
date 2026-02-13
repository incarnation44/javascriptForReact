import { useContext } from "react";
import "./css/Navi.css";
import { BoardStateContext } from "../context/BoardStateContext";
import { BoardDispatchContext } from "../context/BoardDispatchContext";
import { useNavigate } from "react-router-dom";

const Navi = () => {

  const { clickFilterCategory } = useContext(BoardDispatchContext);

  const nav = useNavigate();
  return (
    <nav className="navi">
      <div className="navi-inner">
        <div className="category-buttons">
          <button className="category-btn" value="전체" onClick={clickFilterCategory}>전체</button>
          <button className="category-btn" value="수다" onClick={clickFilterCategory}>수다</button>
          <button className="category-btn" value="질문" onClick={clickFilterCategory}>질문</button>
          <button className="category-btn" value="정보" onClick={clickFilterCategory}>정보</button>
          <button className="category-btn" value="이벤트" onClick={clickFilterCategory}>이벤트</button>
        </div>

        <button className="write-btn" onClick={()=>nav('/new')}>글쓰기</button>
      </div>
    </nav>
  );
};

export default Navi;
