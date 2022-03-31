import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, todo]);
    }
  };
  console.log(todo);

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          addTodo(e);
        }}
      >
        <input
          type="input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter todo"
        />
      </form>
      <div className="display-todo">
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </div>
    </div>
  );
};

export default App;
