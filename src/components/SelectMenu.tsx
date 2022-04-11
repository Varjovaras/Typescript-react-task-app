import React from 'react';
import './styles.css';

interface Props {
  day: string;
  setDay: React.Dispatch<React.SetStateAction<string>>;
}

const SelectMenu: React.FC<Props> = ({ day, setDay }) => {
  const handleSelectChange = (e: any) => {
    setDay(e.target.value);
  };

  return (
    <select
      defaultValue={day}
      onChange={handleSelectChange}
      className="select-menu"
    >
      <option value="1">Maanantai</option>
      <option value="2">Tiistai</option>
      <option value="3">Keskiviikko</option>
      <option value="4">Torstai</option>
      <option value="5">Perjantai</option>
      <option value="6">Lauantai</option>
      <option value="7">Sunnuntai</option>
    </select>
  );

  //  <Select onChange={handleSelectChange} options={Days} />
};

export default SelectMenu;
