import React from 'react';
import { Todo } from '../models/Todo';
import { Days } from '../models/Days';
import './styles.css';

interface Props {
  todos: Todo[];
  day: string;
}

const Day: React.FC<Props> = ({ todos, day }) => {
  return (
    <div className="day">
      <h3>{day}</h3>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </div>
  );
};

export default Day;
