import React, { Component } from 'react';
import Button2 from './button2';

class Button2Container extends Component {
  state = { 
    ContainerClass: 'button2Container',

    buttonValue: 'Click Me!',
    buttonClass: 'button2'
  }  

  handleButtonClick = async () => {
    this.setState({
      ContainerClass: 'button2Container clicked',
      buttonClass: 'button2 clicked'
    })

    await new Promise(resolve => setTimeout(resolve, 2000))

    this.setState({
      ContainerClass: 'button2Container',
      buttonClass: 'button2'
    })
  }

  render() { 
    return (
      <div className={`container ${this.state.ContainerClass}`}>
        <div className="body">Button 1</div>
        <Button2 
          buttonValue={this.state.buttonValue}
          buttonClass={this.state.buttonClass}
          buttonFunction={this.handleButtonClick}/>
      </div>
    );
  }
}
 
export default Button2Container;