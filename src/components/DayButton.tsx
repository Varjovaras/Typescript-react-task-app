import React from 'react';
import { Days } from '../models/Days';

interface Props {
  text: string;
  setDay: React.Dispatch<React.SetStateAction<string>>;
  setShowDay: React.Dispatch<React.SetStateAction<string>>;
  selected: boolean;
}

const DayButton: React.FC<Props> = ({ text, selected, setDay, setShowDay }) => {
  const handleDayChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowDay(text);
    for (let day in Days) {
      if (isNaN(Number(day))) {
        if (day === text) {
          setDay(Days[day]);
        }
      }
    }
  };
  //setDay ei hyväksy suoraan setDay(Days[text]) laittamista

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
