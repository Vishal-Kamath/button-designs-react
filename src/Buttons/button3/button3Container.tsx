import { useState } from 'react';
import Button3 from './button3';

const Button3Container = () => {
  const [containerClass, setContainerClass] = useState('button3Container');
  const [buttonClass, setbuttonClass] = useState('button3');
  const [buttonValue, setbuttonValue] = useState('Click Me!');

  return (
    <div className={`container ${containerClass}`}>
      <div className="cover"></div>
      <div className="body">Button 3</div>
      <Button3 buttonValue={buttonValue} buttonClass={buttonClass} />
    </div>
  );
};

export default Button3Container;
