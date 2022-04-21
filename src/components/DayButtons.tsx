import React from 'react';
import DayButton from './DayButton';
import { Days } from '../models/Days';
import { $enum } from 'ts-enum-util';

interface Props {
  showDay: string;
  setShowDay: React.Dispatch<React.SetStateAction<string>>;
}

const DayButtons: React.FC<Props> = ({ showDay, setShowDay }) => {
  return (
    <div className="day-buttons">
      {$enum(Days).map((d) => {
        if (Days[d] === showDay) {
          return (
            <DayButton
              selected={true}
              key={d}
              setShowDay={setShowDay}
              text={Days[d]}
            />
          );
        } else {
          return (
            <DayButton
              selected={false}
              key={d}
              setShowDay={setShowDay}
              text={Days[d]}
            />
          );
        }
      })}
    </div>
  );
};

export default DayButtons;
