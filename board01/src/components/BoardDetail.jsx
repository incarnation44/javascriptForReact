import { useContext, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BoardStateContext } from "../context/BoardStateContext";
import { BoardDispatchContext } from "../context/BoardDispatchContext";
import "./css/BoardDetail.css";

const BoardDetail = () => {
    const params = useParams();
    const nav = useNavigate();
    const commentIdRef = useRef(1);
    const boardList = useContext(BoardStateContext);
    const { onDelete, setCategory, onCreate_comment } = useContext(BoardDispatchContext);
    const [observeComment, setObserveComment] = useState('');

    const observeCommentInput = (e) => {
        setObserveComment(e.target.value);
    }

    const checkBlankOfComment = ()=>{
        if(observeComment === ''){
            alert('댓글 내용을 입력해주세요')
            return true;
        }
    }

    const boardInfo = boardList.find(
        (item) => item.id === Number(params.id)
    );

    if (!boardInfo) {
        return (
            <div className="detail-wrapper">
                <div className="detail-inner">
                    <div className="not-found">
                        존재하지 않는 게시글입니다.
                    </div>
                </div>
            </div>
        );
    }

    const { id, title, content, date, writer, category, comment } = boardInfo;
    const formattedDate = new Date(date).toLocaleString("ko-KR");


    return (
        <div className="detail-wrapper">
            <div className="detail-inner">
                {/* ===== 게시글 영역 ===== */}
                <div className="detail-header">
                    <span className="detail-category">{category}</span>
                    <h1 className="detail-title">{title}</h1>

                    <div className="detail-meta">
                        <span className="detail-writer">{writer}</span>
                        <span className="detail-date">{formattedDate}</span>
                    </div>
                </div>

                <div className="detail-divider" />

                <div className="detail-content">
                    {content}
                </div>

                {/* ===== 댓글 영역 ===== */}
                <div className="comment-section">
                    <h2 className="comment-section-title">
                        댓글 {comment.length}
                    </h2>

                    {/* 이미 달린 댓글들 */}
                    <div className="comment-list">
                        {comment.map((comment) => (
                            <div key={comment.id} className="comment-item">
                                <div className="comment-header">
                                    <span className="comment-writer">
                                        {comment.writer}
                                    </span>
                                    <span className="comment-date">
                                        {new Date(comment.date).toLocaleString("ko-KR")}
                                    </span>
                                </div>
                                <div className="comment-content">
                                    {comment.content}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 댓글 입력 폼 */}
                    <div className="comment-form">
                        <textarea
                            className="comment-textarea"
                            name="comment"
                            value={observeComment}
                            placeholder="댓글을 입력하세요..."
                            onChange={observeCommentInput}
                        />
                        <div className="comment-form-footer">
                            <button className="comment-submit-btn" onClick={() => {
                                if(checkBlankOfComment()){
                                    return;
                                }
                                onCreate_comment(id, commentIdRef.current++, "댓글작성자", observeComment)
                                setObserveComment('');
                            }

                            }>
                                등록
                            </button>
                        </div>
                    </div>
                </div>

                {/* 수정,삭제,목록으로 버튼 */}
                <div className="detail-footer">
                    <div className="detail-btn-group">
                        <button
                            className="detail-edit-btn"
                            onClick={() => nav(`/edit/${id}`)}
                        >
                            수정
                        </button>

                        <button
                            className="detail-delete-btn"
                            onClick={() => {
                                if (confirm("정말 삭제하시겠습니까?")) {
                                    onDelete(id);
                                    setCategory("전체");
                                    nav("/");
                                }
                            }}
                        >
                            삭제
                        </button>

                        <button
                            className="detail-back-btn"
                            onClick={() => nav("/")}
                        >
                            목록으로
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoardDetail;
