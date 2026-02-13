import { useState, useRef } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";

function App() {
  // 전체 목록 상태
  const [todos, setTodos] = useState([]);
  const idRef = useRef(0); // 고유 id용

  // 등록: 점수 입력 → 총점/평균 계산 후 목록 추가
  const onCreate = (name, kor, eng, math) => {
    const total = Number(kor) + Number(eng) + Number(math);
    const avg = Math.floor(total / 3);

    const newItem = {
      id: idRef.current++,
      name,
      kor,
      eng,
      math,
      total,
      avg,
      isDone: false,
    };

    setTodos([newItem, ...todos]);
  };

  // 삭제
  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 체크 토글
  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  // 수정: 값 변경 후 총점/평균 재계산
  const onUpdate = (id, name, kor, eng, math) => {
    const total = Number(kor) + Number(eng) + Number(math);
    const avg = Math.floor(total / 3);

    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, name, kor, eng, math, total, avg }
          : todo
      )
    );
  };

  return (
    <div>
      <Header />
      <Editor onCreate={onCreate} />
      <List
        todos={todos}
        onDelete={onDelete}
        onToggle={onToggle}
        onUpdate={onUpdate}
      />
    </div>
  );
}

export default App;
