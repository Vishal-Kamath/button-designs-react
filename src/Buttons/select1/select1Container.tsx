import React from 'react';
import Button5 from './select1';

const Select1Container = () => {
  return (
    <div className="container select1Container">
      <h1>Select 1</h1>
      <Button5
        title="Select option"
        options={['option 1', 'option 2', 'option 3', 'option 4', 'option 5']}
      />
    </div>
  );
};

export default Select1Container;
