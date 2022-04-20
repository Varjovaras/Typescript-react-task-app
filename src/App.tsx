import React, { useEffect, useState } from 'react';
import './App.css';
import './components/styles.css';
import DayButtons from './components/DayButtons';
import InputForm from './components/InputForm';
import Todos from './components/Todos';
import { Todo } from './models/Todo';
import { Days } from './models/Days';

const App = () => {
  const currentDay = new Date().getDay();

  useEffect(() => {
    setDay(currentDay.toString());
  }, [currentDay]);

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [day, setDay] = useState<string>(currentDay.toString());
  const [showDay, setShowDay] = useState<string>(Days[currentDay]);

  console.log(todos);

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

      <DayButtons setShowDay={setShowDay} />
      <Todos todos={todos} showDay={showDay} />
    </div>
  );
};

export default App;
