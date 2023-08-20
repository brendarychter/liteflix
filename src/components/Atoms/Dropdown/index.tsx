import { useState } from 'react';
import { MovieType } from '@/utils/types';
// import { Check } from '@/icons/';

export const Dropdown = ({ onSelect }: any): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<MovieType>(
    MovieType.POPULAR
  );

  const handleOptionChange = (option: MovieType) => {
    setSelectedOption(option);
    onSelect(option);
  };
  // const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownOpen(!isDropdownOpen);
  // };
  return (
    <>
    {/* <div className="aaa">
      <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          Toggle Dropdown
        </button>
        <ul className="dropdown-menu">
          <li value={MovieType.POPULAR}>Populares</li>
          <li value={MovieType.MY_LIST}>Mis Películas</li>
        </ul>
      </div>
      </div> */}

    
    <div className="dropdown">
      <span>Ver: </span>
      <select
        value={selectedOption}
        onChange={(e) => handleOptionChange(e.target.value as MovieType)}
      >
        <option value={MovieType.POPULAR}>Populares</option>
        <option value={MovieType.MY_LIST}>Mis Películas</option>
      </select>
    </div>
    </>
  );
};
