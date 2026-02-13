import { useNavigate } from "react-router-dom";
import "./css/BoardListItem.css";

const BoardListItem = ({ id, title, content, date, writer, category }) => {


const formattedDate = new Date(date).toLocaleDateString("ko-KR");
const nav = useNavigate();



  return (
    <div className="board-item" onClick={()=>nav(`/boardDetail/${id}`)}>
      <div className="board-item-header">
        <span className="board-item-category">{category}</span>
        <span className="board-item-writer">{writer}</span>
      </div>

      <div className="board-item-body">
        <h3 className="board-item-title">{title}</h3>
        <p className="board-item-content">{content}</p>
      </div>

      <div className="board-item-footer">
        <span className="board-item-date">{formattedDate}</span>
      </div>
    </div>
  );
};

export default BoardListItem;
