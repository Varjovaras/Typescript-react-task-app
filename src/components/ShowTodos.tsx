import React from 'react';
import { Todo } from '../models/Todo';

interface Props {
  todos: Todo[];
}

const ShowTodos: React.FC<Props> = ({ todos }) => (
  <div>
    {todos.map((todo) => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </div>
);

export default ShowTodos;
