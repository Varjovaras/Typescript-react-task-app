import React, { useEffect, useState } from 'react';
import './App.scss';
import InputForm from './components/InputForm';
import Todos from './components/Todos';
import { Todo } from './models/Todo';

const App = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [day, setDay] = useState<string>('');

  const currentDay = new Date().getDay();

  useEffect(() => {
    setDay(currentDay.toString());
  }, [currentDay]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now() + 1, text: todo, day: day }]);
      setTodo('');
    }
  };

  return (
    <div className="App">
      <span className="header">Todo List</span>
      <InputForm
        addTodo={addTodo}
        todo={todo}
        setTodo={setTodo}
        day={day}
        setDay={setDay}
      />

      <Todos todos={todos} />
    </div>
  );
};

export default App;
