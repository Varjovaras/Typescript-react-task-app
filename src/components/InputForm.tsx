import React from 'react';

interface Props {
  addTask: (e: React.FormEvent) => void;
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
}
const InputForm: React.FC<Props> = ({ addTask, task, setTask }) => {
  return (
    <>
      <form
        className="input-form"
        onSubmit={(e) => {
          addTask(e);
        }}
      >
        <input
          className="input"
          id="input"
          type="input"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />

        <button className="submit-button" id="submit-button" type="submit">
          enter
        </button>
      </form>
    </>
  );
};

export default InputForm;
