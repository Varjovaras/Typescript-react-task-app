import React, { SetStateAction } from 'react';
import Day from './Day';
import { Todo } from '../models/Todo';
import { Days } from '../models/Days';

interface Props {
  todos: Todo[];
  showDay: string;
}

const Todos: React.FC<Props> = ({ todos, showDay }) => {
  return (
    <div>
      <Day
        day={showDay}
        todos={todos.filter((todo) => Days[parseInt(todo.day)] === showDay)}
      />
      {/* <Day day={Days[2]} todos={todos.filter((todo) => todo.day === '2')} />
      <Day day={Days[3]} todos={todos.filter((todo) => todo.day === '3')} />
      <Day day={Days[4]} todos={todos.filter((todo) => todo.day === '4')} />
      <Day day={Days[5]} todos={todos.filter((todo) => todo.day === '5')} />
      <Day day={Days[6]} todos={todos.filter((todo) => todo.day === '6')} />
      <Day day={Days[7]} todos={todos.filter((todo) => todo.day === '7')} /> */}
    </div>
  );
};

export default Todos;
