import React from 'react';
import { Todo } from '../models/Todo';
import { Days } from '../models/Days';

interface Props {
  todos: Todo[];
}

console.log(Days[5]);

const ShowTodos: React.FC<Props> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text} {Days[parseInt(todo.day)]}
        </li>
      ))}
    </div>
  );
};

export default ShowTodos;
