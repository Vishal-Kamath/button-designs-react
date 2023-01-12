// import React from 'react';
// import Button2 from './button2';

// class Button2Container {
//   state = {
//     ContainerClass: 'button2Container',

//     buttonValue: 'Click Me!',
//     buttonClass: 'button2'
//   }

//   handleButtonClick = async () => {
//     this.setState({
//       ContainerClass: 'button2Container clicked',
//       buttonClass: 'button2 clicked'
//     })

//     await new Promise(resolve => setTimeout(resolve, 2000))

//     this.setState({
//       ContainerClass: 'button2Container',
//       buttonClass: 'button2'
//     })
//   }

//   render() {
//     return (
//       <div className={`container ${this.state.ContainerClass}`}>
//         <div className="body">Button 2</div>
//         <Button2
//           buttonValue={this.state.buttonValue}
//           buttonClass={this.state.buttonClass}
//           buttonFunction={this.handleButtonClick}/>
//       </div>
//     );
//   }
// }

// export default Button2Container;

import React, { useState } from 'react';
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
