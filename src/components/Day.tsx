import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import React from 'react';
import { Todo } from '../models/Todo';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setInfoMessage: React.Dispatch<React.SetStateAction<string | null>>;
  day: string;
}

const Day: React.FC<Props> = ({ todos, setTodos, setInfoMessage, day }) => {
  const handleDelete = (id: number, text: string) => {
    setInfoMessage(`${text} deleted`);
    setTodos(todos.filter((todo) => todo.id !== id));
    setTimeout(() => {
      setInfoMessage(null);
    }, 5000);
  };

  const handleEdit = (id: number, text: string) => {
    setInfoMessage(`${text} edited`);
    setTodos(todos.filter((todo) => todo.id !== id));
    setTimeout(() => {
      setInfoMessage(null);
    }, 5000);
  };

  return (
    <div className="todos">
      {todos.map((todo) => (
        <li className="day" key={todo.id}>
          {todo.text}
          <span className="icon" onClick={() => handleEdit(todo.id, todo.text)}>
            <EditOutlined />
          </span>
          <span
            className="icon"
            onClick={() => handleDelete(todo.id, todo.text)}
          >
            <DeleteOutlined />
          </span>
        </li>
      ))}
    </div>
  );
};

export default Day;
