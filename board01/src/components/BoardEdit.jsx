import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BoardStateContext } from "../context/BoardStateContext";
import { BoardDispatchContext } from "../context/BoardDispatchContext";
import "./css/BoardEdit.css";

const BoardEdit = () => {

    const params = useParams();
    const nav = useNavigate();
    const boardList = useContext(BoardStateContext);
    const { onUpdate } = useContext(BoardDispatchContext);

    const boardInfo = boardList.find(
        (item) => item.id === Number(params.id)
    );
    const { id, title, content, date, writer, category } = boardInfo;
    const [input, setInput] = useState({
        title: title,
        content: content,
        category: category
    });

    if (!boardInfo) {
        return (
            <div className="kitchen-edit-wrapper">
                <div className="kitchen-edit-inner">
                    <div className="kitchen-not-found">
                        존재하지 않는 게시글입니다.
                    </div>
                </div>
            </div>
        );
    }

    const observeInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="kitchen-edit-wrapper">
            <div className="kitchen-edit-inner">

                <div className="kitchen-edit-header">

                    <select
                        className="kitchen-category-select"
                        name="category"
                        defaultValue={boardInfo.categorys}
                        onChange={observeInput}
                    >
                        <option value="전체">전체</option>
                        <option value="수다">수다</option>
                        <option value="질문">질문</option>
                        <option value="정보">정보</option>
                        <option value="이벤트">이벤트</option>
                    </select>

                    <input
                        className="kitchen-title-input"
                        type="text"
                        name="title"
                        value={input.title}
                        onChange={observeInput}
                    />

                    <div className="kitchen-meta">
                        <span className="kitchen-writer">{writer}</span>
                        <span className="kitchen-date">
                            {new Date(date).toLocaleString("ko-KR")}
                        </span>
                    </div>
                </div>

                <textarea
                    className="kitchen-content-textarea"
                    name="content"
                    value={input.content}
                    onChange={observeInput}
                />

                <div className="kitchen-footer">
                    <div className="kitchen-btn-group">
                        <button
                            className="kitchen-complete-btn"
                            onClick={() => {
                                onUpdate(id, input);
                                nav(`/boardDetail/${id}`);
                            }}
                        >
                            완료
                        </button>

                        <button
                            className="kitchen-back-btn"
                            onClick={() => nav(-1)}
                        >
                            뒤로가기
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BoardEdit;
