import ShowTodos from './components/ShowTodos';
import InputForm from './components/InputForm';
import React, { useState } from 'react';
import './App.css';
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
  console.log(todo);
  console.log(todos);

  return (
    <div className="App">
      <InputForm addTodo={addTodo} todo={todo} setTodo={setTodo} />
      <ShowTodos todos={todos} />
    </div>
  );
};

export default App;
