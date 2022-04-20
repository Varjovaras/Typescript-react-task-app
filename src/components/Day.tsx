import React from 'react';
import { Todo } from '../models/Todo';

interface Props {
  todos: Todo[];
  day: string;
}

const Day: React.FC<Props> = ({ todos, day }) => {
  return (
    <div>
      <h3 className="day-title">{day}</h3>
      {todos.map((todo) => (
        <li className="day" key={todo.id}>
          {todo.text}
        </li>
      ))}
    </div>
  );
};

export default Day;
