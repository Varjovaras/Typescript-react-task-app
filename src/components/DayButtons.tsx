import React from 'react';
import DayButton from './DayButton';
import { Days } from '../models/Days';
import { $enum } from 'ts-enum-util';

interface Props {
  setShowDay: React.Dispatch<React.SetStateAction<string>>;
}

const DayButtons: React.FC<Props> = ({ setShowDay }) => {
  return (
    <div className="day-buttons">
      {$enum(Days).map((day) => (
        <DayButton key={day} setShowDay={setShowDay} text={Days[day]} />
      ))}
    </div>
  );
};

export default DayButtons;
