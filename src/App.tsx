import React, { useEffect, useState } from 'react';
import './styles/App.css';
import './styles/styles.css';
import DayButtons from './components/DayButtons';
import InputForm from './components/InputForm';
import Todos from './components/Tasks';
import { Task } from './models/Task';
import { Days } from './models/Days';
import InfoNotification from './components/InfoNotification';

const App = () => {
  const currentDay = new Date().getDay();

  useEffect(() => {
    setDay(currentDay.toString());
    setShowDay(Days[currentDay]);
  }, [currentDay]);
  //useEffect hookki asettaa kyseisen päivän oikein, kun sivu ladataan uudelleen.

  const [task, setTask] = useState<string>(''); //input-kentän arvo
  const [tasks, setTasks] = useState<Task[]>([]); //kaikki taskit
  const [day, setDay] = useState<string>(''); //uuden taskin päivä
  const [showDay, setShowDay] = useState<string>(''); //mikä päivä korostetaan
  const [infoMessage, setInfoMessage] = useState<string | null>(null);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, { id: Date.now() + 1, text: task, day: day }]);
      setTask('');
    }
  };

  return (
    <div className="App">
      <span className="header">TASK APP</span>
      <InfoNotification message={infoMessage} />
      <InputForm addTask={addTask} task={task} setTask={setTask} />

      <DayButtons showDay={showDay} setShowDay={setShowDay} />
      <Todos
        tasks={tasks}
        setTasks={setTasks}
        showDay={showDay}
        setInfoMessage={setInfoMessage}
      />
    </div>
  );
};

export default App;
