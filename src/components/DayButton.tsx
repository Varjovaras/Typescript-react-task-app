import React from 'react';

interface Props {
  text: string;
  setShowDay: React.Dispatch<React.SetStateAction<string>>;
}

const DayButton: React.FC<Props> = ({ text, setShowDay }) => {
  const handleDayChange = (e: any) => {
    e.preventDefault();
    setShowDay(text);
  };
  return (
    <div>
      <button onClick={handleDayChange} type="submit" className="day-button">
        {text}
      </button>
    </div>
  );
};

export default DayButton;
