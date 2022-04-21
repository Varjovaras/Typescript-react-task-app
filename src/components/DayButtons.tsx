import React from 'react';
import DayButton from './DayButton';
import { Days } from '../models/Days';
import { $enum } from 'ts-enum-util';

interface Props {
  showDay: string;
  setDay: React.Dispatch<React.SetStateAction<string>>;
  setShowDay: React.Dispatch<React.SetStateAction<string>>;
}

const DayButtons: React.FC<Props> = ({ showDay, setDay, setShowDay }) => {
  return (
    <div className="day-buttons">
      {$enum(Days).map((d: number) => {
        if (Days[d] === showDay) {
          return (
            <DayButton
              selected={true}
              key={d}
              setDay={setDay}
              setShowDay={setShowDay}
              text={Days[d]}
            />
          );
        } else {
          return (
            <DayButton
              selected={false}
              key={d}
              setDay={setDay}
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
