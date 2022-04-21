import React from 'react';
import Day from './Day';
import { Task } from '../models/Task';
import { Days } from '../models/Days';

interface Props {
  tasks: Task[];
  showDay: string;
  handleDelete: (id: number, text: string) => void;
  handleEdit: (id: number) => void;
}

const Tasks: React.FC<Props> = ({
  tasks,
  showDay,
  handleDelete,
  handleEdit,
}) => {
  return (
    <div>
      <Day
        tasks={tasks.filter((task) => Days[parseInt(task.day)] === showDay)}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default Tasks;
