import React from 'react';
import SelectMenu from './SelectMenu';
import './styles.css';

interface Props {
  addTodo: (e: React.FormEvent) => void;
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  setDay: React.Dispatch<React.SetStateAction<string>>;
  day: string;
}
const InputForm: React.FC<Props> = ({
  addTodo,
  todo,
  setTodo,
  setDay,
  day,
}) => {
  return (
    <>
      <form
        className="input-form"
        onSubmit={(e) => {
          console.log(e);
          addTodo(e);
        }}
      >
        <SelectMenu day={day} setDay={setDay} />
        <input
          className="input"
          type="input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter todo"
        />

        <button className="submit-button" type="submit">
          go
        </button>
      </form>
    </>
  );
};

export default InputForm;
