import React from 'react';
import Day from './Day';
import { Task } from '../models/Task';
import { Days } from '../models/Days';

interface Props {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setInfoMessage: React.Dispatch<React.SetStateAction<string | null>>;
  showDay: string;
}

const Tasks: React.FC<Props> = ({
  tasks,
  setTasks,
  setInfoMessage,
  showDay,
}) => {
  return (
    <div>
      <Day
        tasks={tasks.filter((task) => Days[parseInt(task.day)] === showDay)}
        setTasks={setTasks}
        setInfoMessage={setInfoMessage}
      />
    </div>
  );
};

export default Tasks;
