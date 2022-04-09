import React, { useState } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import ShowTodos from './components/ShowTodos';
import { Todo } from './models/Todo';

const App = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [day, setDay] = useState<string>('');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now() + 1, text: todo, day: day }]);
      setTodo('');
    }
  };

  return (
    <div className="App">
      <InputForm
        addTodo={addTodo}
        todo={todo}
        setTodo={setTodo}
        setDay={setDay}
      />

      <ShowTodos todos={todos} />
    </div>
  );
};

export default App;
