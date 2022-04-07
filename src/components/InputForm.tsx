import React from 'react';
import './styles.css';

interface Props {
  addTodo: (e: React.FormEvent) => void;
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const InputForm: React.FC<Props> = ({ addTodo, todo, setTodo }) => {
  return (
    <form
      className="input-form"
      onSubmit={(e) => {
        addTodo(e);
      }}
    >
      <input
        className="input"
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter todo"
      />
    </form>
  );
};

export default InputForm;
