import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BoardDispatchContext } from "../context/BoardDispatchContext";
import "./css/BoardNew.css";

const BoardNew = () => {

  const nav = useNavigate();
  const { onCreate } = useContext(BoardDispatchContext);

  const [input, setInput] = useState({
    category: "수다",
    title: "",
    content: "",
    writer: ""
  });

  const observeInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!input.title.trim()) {
      alert("제목을 입력하세요.");
      return;
    }
    if (!input.content.trim()) {
      alert("내용을 입력하세요.");
      return;
    }
    if (!input.writer.trim()) {
      alert("작성자를 입력하세요.");
      return;
    }

    onCreate(input);
    nav("/");
  };

  return (
    <div className="new-wrapper">
      <div className="new-inner">

        <div className="new-header">
          <select
            name="category"
            onChange={observeInput}
            className="new-category-select"
          >
            <option value="전체">전체</option>
            <option value="수다">수다</option>
            <option value="질문">질문</option>
            <option value="정보">정보</option>
            <option value="이벤트">이벤트</option>
          </select>

          <input
            type="text"
            name="title"
            value={input.title}
            onChange={observeInput}
            placeholder="제목을 입력하세요"
            className="new-title-input"
          />

          <input
            type="text"
            name="writer"
            value={input.writer}
            onChange={observeInput}
            placeholder="작성자"
            className="new-writer-input"
          />
        </div>


        <textarea
          name="content"
          value={input.content}
          onChange={observeInput}
          placeholder="내용을 입력하세요"
          className="new-content-textarea"
        />

        <div className="new-footer">
          <div className="new-btn-group">
            <button
              className="new-submit-btn"
              onClick={handleSubmit}
            >
              완료
            </button>

            <button
              className="new-back-btn"
              onClick={() => nav(-1)}
            >
              취소
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BoardNew;
