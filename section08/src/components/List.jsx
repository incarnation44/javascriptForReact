import { useState } from 'react';
import '../css/List.css'
import TodoItem from './TodoItem';

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  //주의 바람
  const getFilterData = () => {
    if (search === '') {
      return todos;
    }

    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(search.toLowerCase());
    });
  };

  const filterTodos = getFilterData();

  return (
    <>
      <div className="List">
        <h4>Todo List </h4>
        <input
          value={search}
          onChange={onChangeSearch}
          placeholder="검색어를 입력하세요"
        />
        <div className="todos_wrapper">
          {filterTodos.map((todo) => {
            return <TodoItem key={todo.id} {...todo}
              onUpdate={onUpdate} onDelete={onDelete} />;
          })}
        </div>
      </div>
    </>
  );
};

export default List;
