// hooks/useBoard.js
import { useReducer, useRef, useState } from "react";
import { boardReducer } from '../../reducer/boardReducer'
import { mockData } from "../mockData/boardMockData";

export function useBoard() {
  const idRef = useRef(7);
  const [state, dispatch] = useReducer(boardReducer, mockData);
  const [category, setCategory] = useState("전체");

  function onCreate(input) {
    dispatch({
      type: "created",
      id: idRef.current++,
      title: input.title,
      content: input.content,
      date: new Date().getTime(),
      writer: input.writer,
      category: input.category
    });
  }

  function onUpdate(id, input) {
    dispatch({
      type: "updated",
      id,
      title: input.title,
      content: input.content,
      category: input.category,
    });
  }

  function onDelete(id) {
    dispatch({
      type: "deleted",
      id,
    });
  }

  function onCreate_comment(boardId,commentId,writer,content){
    dispatch({
      type:"comment_created",
      boardId:boardId,
      commentId:commentId,
      writer:writer,
      content:content,
      date:new Date().getTime()

    })
  }

  function clickFilterCategory(e) {
    setCategory(e.target.value);
  }

  const filteredBoard =
    category === "전체"
      ? state
      : state.filter((b) => b.category === category);

  return {
    filteredBoard,
    onCreate_comment,
    onCreate,
    onUpdate,
    onDelete,
    clickFilterCategory,
    setCategory,
  };
}
