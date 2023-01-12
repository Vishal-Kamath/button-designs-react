import React from 'react';

type Button2Props = {
  buttonValue: string;
  buttonClass: string;
  buttonFunction: VoidFunction;
};

const Button2: React.FC<Button2Props> = ({
  buttonValue,
  buttonClass,
  buttonFunction,
}) => {
  return (
    <button className={buttonClass} onClick={buttonFunction}>
      {buttonValue}
    </button>
  );
};

export default Button2;
