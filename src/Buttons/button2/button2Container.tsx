import { useState } from 'react';
import Button2 from './button2';

const Button2Container = () => {
  const [containerClass, setContainerClass] = useState('button2Container');
  const [buttonClass, setbuttonClass] = useState('button2');
  const [buttonValue, setbuttonValue] = useState('Click Me!');

  const handleClick = () => {
    setContainerClass('button2Container clicked');
    setbuttonClass('button2 clicked');

    setTimeout(() => {
      setContainerClass('button2Container');
      setbuttonClass('button2');
    }, 2000);
  };

  return (
    <div className={'container ' + containerClass}>
      <div className="body">Button 2</div>
      <Button2
        buttonValue={buttonValue}
        buttonClass={buttonClass}
        buttonFunction={handleClick}
      />
    </div>
  );
};

export default Button2Container;
