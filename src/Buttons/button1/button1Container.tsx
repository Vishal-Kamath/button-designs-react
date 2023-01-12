import { useState } from 'react';
import Button1 from './button1';

const Button1Container = () => {
  const [buttonValue, setButtonValue] = useState('Click Me!');
  const [buttonClass, setButtonClass] = useState('button1');

  return (
    <div className="container button1Container">
      <div className="body">Button 1</div>
      <Button1 buttonValue={buttonValue} buttonClass={buttonClass} />
    </div>
  );
};

export default Button1Container;
