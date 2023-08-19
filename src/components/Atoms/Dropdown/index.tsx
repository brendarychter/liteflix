import { useState } from 'react';
import { MovieType } from '@/utils/types';

export const Dropdown = ({ onSelect }: any): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<MovieType>(MovieType.POPULAR);

  const handleOptionChange = (option: MovieType ) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <select value={selectedOption} onChange={(e) => handleOptionChange(e.target.value as MovieType)}>
        <option value={MovieType.POPULAR}>Populares</option>
        <option value={MovieType.MY_LIST}>Mis Películas</option>
      </select>
    </div>
  );
};