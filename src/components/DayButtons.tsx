import React from 'react';
import Daybutton from './Daybutton';
import { Days } from '../models/Days';
import { $enum } from 'ts-enum-util';

interface Props {
  showDay: string;
  setDay: React.Dispatch<React.SetStateAction<string>>;
  setShowDay: React.Dispatch<React.SetStateAction<string>>;
}

const Daybuttons: React.FC<Props> = ({ showDay, setDay, setShowDay }) => {
  return (
    <div className="day-buttons">
      {$enum(Days).map((d: number) => {
        if (Days[d] === showDay) {
          return (
            <Daybutton
              selected={true}
              key={d}
              setDay={setDay}
              setShowDay={setShowDay}
              text={Days[d]}
            />
          );
        } else {
          return (
            <Daybutton
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

export default Daybuttons;
