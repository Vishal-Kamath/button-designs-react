import React from 'react';

const Button4: React.FC<{
  buttonValue: string;
  buttonClass: string;
  buttonFunction: VoidFunction;
}> = ({ buttonValue, buttonClass, buttonFunction }) => {
  return (
    <button className={buttonClass} onClick={buttonFunction}>
      {buttonValue}
    </button>
  );
};

export default Button4;
