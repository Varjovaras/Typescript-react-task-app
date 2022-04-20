import React from 'react';

interface Props {
  day: string;
  setDay: React.Dispatch<React.SetStateAction<string>>;
}

const SelectMenu: React.FC<Props> = ({ day, setDay }) => {
  const handleSelectChange = (e: any) => {
    e.preventDefault();
    setDay(e.target.value);
  };

  return (
    <select
      defaultValue={day}
      onChange={handleSelectChange}
      className="select-menu"
    >
      <option value="1">Monday</option>
      <option value="2">Tuesday</option>
      <option value="3">Wednesday</option>
      <option value="4">Thursday</option>
      <option value="5">Friday</option>
      <option value="6">Saturday</option>
      <option value="7">Sunday</option>
    </select>
  );
};

export default SelectMenu;
