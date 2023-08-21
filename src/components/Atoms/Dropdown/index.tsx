import { useState } from 'react';
import { MovieType } from '@/utils/types';
import { Arrow, Check } from '@/icons';

export const Dropdown = ({ onSelect }: any) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('Populares');
  const options = [
    { isOn: 0, value: MovieType.POPULAR, text: 'Populares' },
    { isOn: 1, value: MovieType.MY_LIST, text: 'Mis películas' }
  ];
  const [checked, setChecked] = useState(0);

  return (
    <div className="dropdown-container">
      <div
        className="dropdown-buttons"
        onClick={(e: any) => setIsActive(!isActive)}
      >
        <span>ver: </span>
        {selectedOption} <Arrow />
      </div>
      {isActive && (
        <>
          <div className="arrow" />
          <div className="content">
            {options.map((option, i) => (
              <div
                className="dropdown-item"
                onClick={(e: any) => {
                  setSelectedOption(option.text)
                  onSelect(option.value);
                  setIsActive(false);
                  setChecked(i);
                }}
                key={option.isOn}
              >
                {option.text}
                {checked === option.isOn ? (
                  <p>
                    <Check />
                  </p>
                ) : (
                  ''
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
