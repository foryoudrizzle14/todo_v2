import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleNewTodo = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };


  return (
    <div className="App">
      <div className="new-todo">
        <input type="text" placeholder = "오늘의 할일을 입력하세요"value={newTodo} onChange={handleNewTodo} /> 
        <button onClick={handleAddTodo}>등록하기</button>
      </div>
      <h1>Todo List</h1>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <div key={index}>
            {todo}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
