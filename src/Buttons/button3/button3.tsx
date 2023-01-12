import React from 'react';

const Button3: React.FC<{
  buttonValue: string;
  buttonClass: string;
}> = ({ buttonValue, buttonClass }) => {
  return (
    <button className={buttonClass}>
      <div className="buttonCover"></div>
      {buttonValue}
    </button>
  );
};

export default Button3;
