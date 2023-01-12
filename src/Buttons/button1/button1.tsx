import React from 'react';

const Button1: React.FC<{ buttonValue: string; buttonClass: string }> = ({
  buttonValue,
  buttonClass,
}) => {
  return <button className={buttonClass}>{buttonValue}</button>;
};

export default Button1;
