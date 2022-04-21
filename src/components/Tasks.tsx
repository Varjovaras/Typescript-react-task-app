import React from 'react';
import Day from './Day';
import { Task } from '../models/Task';
import { Days } from '../models/Days';

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setInfoMessage: React.Dispatch<React.SetStateAction<string | null>>;
  showDay: string;
  handleDelete: (id: number, text: string) => void;
  handleEdit: (id: number) => void;
}

const Tasks: React.FC<Props> = ({
  tasks,
  setTasks,
  setInfoMessage,
  showDay,
  handleDelete,
  handleEdit,
}) => {
  return (
    <div>
      <Day
        tasks={tasks.filter((task) => Days[parseInt(task.day)] === showDay)}
        setTasks={setTasks}
        setInfoMessage={setInfoMessage}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default Tasks;
