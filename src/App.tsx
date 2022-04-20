import React, { useEffect, useState } from 'react';
import './App.css';
import './components/styles.css';
import DayButtons from './components/DayButtons';
import InputForm from './components/InputForm';
import Todos from './components/Todos';
import { Todo } from './models/Todo';
import { Days } from './models/Days';
import InfoNotification from './components/InfoNotification';

const App = () => {
  const currentDay = new Date().getDay();

  useEffect(() => {
    setDay(currentDay.toString());
    console.log('Today is ' + Days[currentDay]);
  }, [currentDay]);

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [day, setDay] = useState<string>(currentDay.toString());
  const [showDay, setShowDay] = useState<string>(Days[currentDay]);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);
  // const [errorMessage, setErrorMessage] = useState(null);

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
      <InfoNotification message={infoMessage} />
      <InputForm
        addTodo={addTodo}
        todo={todo}
        setTodo={setTodo}
        day={day}
        setDay={setDay}
      />

      <DayButtons showDay={showDay} setShowDay={setShowDay} />
      <h3 className="day-title">{Days[currentDay]}</h3>
      <Todos
        todos={todos}
        setTodos={setTodos}
        showDay={showDay}
        setInfoMessage={setInfoMessage}
      />
    </div>
  );
};

export default App;
