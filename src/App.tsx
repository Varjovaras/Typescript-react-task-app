import React, { useEffect, useState } from 'react';
import './styles/App.css';
import './styles/styles.css';
import Daybuttons from './components/Daybuttons';
import InputForm from './components/InputForm';
import Tasks from './components/Tasks';
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

  const handleEdit = (id: number) => {
    const findTask = tasks.find((task) => task.id === id);
    if (findTask) {
      const edited = window.prompt(`Edit ${findTask.text}`);
      if (edited !== null) {
        setTasks([
          ...tasks.filter((task) => task.id !== id),
          { id: findTask.id, text: edited, day: findTask.day },
        ]);
        setInfoMessage(`${findTask.text} edited`);
        setTimeout(() => {
          setInfoMessage(null);
        }, 5000);
      }
    }
    // else {
    //   setInfoMessage(`Couldn't be edited`);
    //   setTimeout(() => {
    //     setInfoMessage(null);
    //   }, 5000);
    // }
  };

  const handleDelete = (id: number, text: string) => {
    setInfoMessage(`${text} deleted`);
    setTasks(tasks.filter((task) => task.id !== id));
    setTimeout(() => {
      setInfoMessage(null);
    }, 5000);
  };

  return (
    <div className="App">
      <span className="header">TASK APP</span>
      <InfoNotification message={infoMessage} />
      <InputForm addTask={addTask} task={task} setTask={setTask} />

      <Daybuttons showDay={showDay} setDay={setDay} setShowDay={setShowDay} />
      <Tasks
        tasks={tasks}
        showDay={showDay}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default App;
