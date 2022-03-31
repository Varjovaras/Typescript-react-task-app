import React from 'react';

interface Props {
  addTodo: (e: React.FormEvent) => void;
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const InputForm: React.FC<Props> = ({ addTodo, todo, setTodo }) => {
  return (
    <form
      onSubmit={(e) => {
        addTodo(e);
      }}
    >
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter todo"
      />
    </form>
  );
};

export default InputForm;
