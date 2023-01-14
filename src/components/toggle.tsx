import React, { useState } from 'react';
import { FaMoon } from 'react-icons/fa';

const Toggle: React.FC = () => {
  let storageChecked = JSON.parse(
    localStorage.getItem('dayNnight') || 'false'
  ) as boolean;
  const [checked, setChecked] = useState<boolean>(storageChecked);
  const handleClick = () => {
    setChecked(!checked);
    localStorage.setItem('dayNnight', JSON.stringify(!checked));
  };
  return (
    <div className="toggle">
      <input
        type="checkbox"
        id="dayNnight"
        checked={checked}
        onClick={handleClick}
      />
      <div className="slider">
        <FaMoon />
      </div>
    </div>
  );
};

export default Toggle;
