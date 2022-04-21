import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import React from 'react';
import { Task } from '../models/Task';

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setInfoMessage: React.Dispatch<React.SetStateAction<string | null>>;
}

const Day: React.FC<Props> = ({ tasks, setTasks, setInfoMessage }) => {
  const handleDelete = (id: number, text: string) => {
    setInfoMessage(`${text} deleted`);
    setTasks(tasks.filter((task) => task.id !== id));
    setTimeout(() => {
      setInfoMessage(null);
    }, 5000);
  };

  const handleEdit = (id: number, text: string) => {
    setInfoMessage(`${text} edited`);
    setTasks(tasks.filter((task) => task.id !== id));
    setTimeout(() => {
      setInfoMessage(null);
    }, 5000);
  };

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <li className="day" key={task.id}>
          {task.text}
          <span className="icon" onClick={() => handleEdit(task.id, task.text)}>
            <EditOutlined />
          </span>
          <span
            className="icon"
            onClick={() => handleDelete(task.id, task.text)}
          >
            <DeleteOutlined />
          </span>
        </li>
      ))}
    </div>
  );
};

export default Day;
