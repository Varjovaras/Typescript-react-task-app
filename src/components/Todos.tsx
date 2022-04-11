import React from 'react';
import DayTodo from './Day';
import { Todo } from '../models/Todo';
import { Days } from '../models/Days';

interface Props {
  todos: Todo[];
}

const Todos: React.FC<Props> = ({ todos }) => {
  return (
    <div className="todos">
      <DayTodo day={Days[1]} todos={todos.filter((todo) => todo.day === '1')} />
      <DayTodo day={Days[2]} todos={todos.filter((todo) => todo.day === '2')} />
      <DayTodo day={Days[3]} todos={todos.filter((todo) => todo.day === '3')} />
      <DayTodo day={Days[4]} todos={todos.filter((todo) => todo.day === '4')} />
      <DayTodo day={Days[5]} todos={todos.filter((todo) => todo.day === '5')} />
      <DayTodo day={Days[6]} todos={todos.filter((todo) => todo.day === '6')} />
      <DayTodo day={Days[7]} todos={todos.filter((todo) => todo.day === '7')} />
    </div>
  );
};

export default Todos;
