  import "../css/TodoItem.css";

  // 개별 학생(또는 할 일) 정보를 화면에 표시하고 삭제/완료 체크 기능을 처리하는 컴포넌트
  const TodoItem = ({ id, name, kor, eng, math, total, avg, isDone, onDelete, onToggle }) => {
    return (
      <div className="item">
        <div className="left">
          {/* 완료 여부 체크박스 → 체크 시 onToggle 실행 */}
          <input
            type="checkbox"
            checked={isDone}
            onChange={() => onToggle(id)}
          />

          {/* 학생 정보 영역 */}
          <div className="info">
            {/* 이름 표시 */}
            <div className="name">{name}</div>

            {/* 과목 점수 표시 */}
            <div className="score">
              국어 {kor} / 영어 {eng} / 수학 {math}
            </div>

            {/* 총점과 평균 표시 */}
            <div className="result">
              총점 {total} · 평균 {avg}
            </div>
          </div>
        </div>

        {/* 수정/삭제 버튼 영역 */}
        <div className="btns">
          {/* 수정 버튼 (기능 연결 전 상태) */}
          <button className="edit">수정</button>

          {/* 삭제 버튼 → 클릭 시 onDelete 실행 */}
          <button className="delete" onClick={() => onDelete(id)}>삭제</button>
        </div>
      </div>
    );
  };

  export default TodoItem;
