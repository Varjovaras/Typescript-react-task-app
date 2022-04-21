import React from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Task } from '../models/Task';

interface Props {
  tasks: Task[];

  handleDelete: (id: number, text: string) => void;
  handleEdit: (id: number) => void;
}

const Day: React.FC<Props> = ({ tasks, handleDelete, handleEdit }) => {
  return (
    <div className="tasks">
      {tasks.map((task) => {
        return (
          <li className="task" key={task.id}>
            {task.text}
            <span className="icon" onClick={() => handleEdit(task.id)}>
              <EditOutlined />
            </span>
            <span
              className="icon"
              onClick={() => handleDelete(task.id, task.text)}
              id="delete-button"
            >
              <DeleteOutlined />
            </span>
          </li>
        );
      })}
    </div>
  );
};

export default Day;
