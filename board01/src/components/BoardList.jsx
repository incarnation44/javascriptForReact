import "./css/BoardList.css";
import { BoardStateContext } from "../context/BoardStateContext"
import { useContext } from "react"
import BoardListItem from "./BoardListItem";

const BoardList = () => {


    const state = useContext(BoardStateContext)



    return (
        <div className="board-list-wrapper">
            <div className="board-list-inner">
            {state.map((board)=><BoardListItem key={board.id}{...board}/>)}
            </div>
        </div>
    );
};

export default BoardList;
