import React, { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import MyComponent from './components/MyComponent';
import ShowTodos from './components/ShowTodos';
import { Todo } from './models/Todo';

const App = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now() + 1, text: todo }]);
      setTodo('');
    }
  };

  return (
    <div className="App">
      <InputForm addTodo={addTodo} todo={todo} setTodo={setTodo} />
      <MyComponent />

      <ShowTodos todos={todos} />
    </div>
  );
};

export default App;
