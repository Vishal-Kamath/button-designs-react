import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const Button5: React.FC<{ title: string; options: string[] }> = ({
  title,
  options,
}) => {
  const [selected, setSelected] = useState<string>('');
  const handleClick = () => {
    document.getElementById('options')?.classList.toggle('hide');
    document.getElementById('button')?.classList.toggle('click');
  };

  return (
    <div className="select1">
      <div className="selectContainer">
        <div className="selected">{selected ? selected : title}</div>
        <button onClick={handleClick} id="button">
          <FaAngleDown />
        </button>
      </div>
      <div className="options hide" id="options">
        {options.map((value) => (
          <button className="option" onClick={() => setSelected(value)}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Button5;
