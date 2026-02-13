import TodoItem from "./TodoItem";

// 할 일 목록 배열을 받아서 TodoItem 컴포넌트들을 반복 렌더링하는 리스트 컴포넌트
const List = ({ todos, onDelete, onToggle, onUpdate }) => {
  return (
    <div>
      {/* todos 배열을 순회하면서 각 할 일을 TodoItem으로 출력 */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}       // 각 항목 고유 key
          {...todo}           // todo의 모든 값(id, text 등) props로 전달
          onDelete={onDelete} // 삭제 기능 전달
          onToggle={onToggle} // 완료 토글 기능 전달
          onUpdate={onUpdate} // 수정 기능 전달
        />
      ))}
    </div>
  );
};

export default List;
