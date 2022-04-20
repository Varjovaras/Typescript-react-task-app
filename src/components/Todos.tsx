import React from 'react';
import Day from './Day';
import { Todo } from '../models/Todo';
import { Days } from '../models/Days';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setInfoMessage: React.Dispatch<React.SetStateAction<string | null>>;
  showDay: string;
}

const Todos: React.FC<Props> = ({
  todos,
  setTodos,
  setInfoMessage,
  showDay,
}) => {
  return (
    <div>
      <Day
        day={showDay}
        todos={todos.filter((todo) => Days[parseInt(todo.day)] === showDay)}
        setTodos={setTodos}
        setInfoMessage={setInfoMessage}
      />
    </div>
  );
};

export default Todos;
