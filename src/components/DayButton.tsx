import React from 'react';

interface Props {
  text: string;
  setShowDay: React.Dispatch<React.SetStateAction<string>>;
  selected: boolean;
}

const DayButton: React.FC<Props> = ({ text, selected, setShowDay }) => {
  const handleDayChange = (e: any) => {
    e.preventDefault();
    setShowDay(text);
  };
  return (
    <div>
      {selected === true ? (
        <button
          onClick={handleDayChange}
          type="submit"
          className="day-button-selected"
        >
          {text}
        </button>
      ) : (
        <button onClick={handleDayChange} type="submit" className="day-button">
          {text}
        </button>
      )}
    </div>
  );
};

export default DayButton;
