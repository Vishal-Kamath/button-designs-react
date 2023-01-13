import { useState } from 'react';
import Button4 from './button4';

const CreateGrid: React.FC<{ id: string }> = ({ id }) => {
  const array = (
    <>
      {Array(25)
        .fill(null)
        .map((val, index) => (
          <div key={index} className={id + '-item'}></div>
        ))}
    </>
  );
  return array;
};
const handleClick = async () => {
  const newPageGrid = document.getElementById('newPage-grid');
  if (!newPageGrid) return;
  newPageGrid.style.zIndex = '999';
  const newPageGridItems = document.getElementsByClassName('newPage-grid-item');

  await displayGrid(newPageGridItems);
  await new Promise(() =>
    setTimeout(async () => {
      await displayGrid(newPageGridItems);
      newPageGrid.style.zIndex = '-1';
    }, 500)
  );
};

const handleDisplay = async (
  displayArray: number[],
  gridItems: HTMLCollection,
  timeout: number
) => {
  displayArray.forEach((val) => gridItems[val].classList.toggle('display'));
  await new Promise((resolve) => setTimeout(resolve, timeout));
  return;
};

const displayGrid = async (gridItems: HTMLCollection) => {
  await handleDisplay([17], gridItems, 100);
  await handleDisplay([16, 18, 12, 22], gridItems, 100);
  await handleDisplay([15, 19, 11, 13, 7, 21, 23], gridItems, 100);
  await handleDisplay([10, 14, 6, 8, 2, 20, 24], gridItems, 100);
  await handleDisplay([5, 9, 1, 3], gridItems, 100);
  await handleDisplay([0, 4], gridItems, 100);
};

const Button4Container = () => {
  const [containerClass, setContainerClass] = useState('button4Container');
  const [buttonClass, setbuttonClass] = useState('button4');
  const [buttonValue, setbuttonValue] = useState('Click Me!');

  return (
    <div className={'container ' + containerClass}>
      <div className="grid" id="grid">
        <div className="animation"></div>
        <CreateGrid id="grid" />
      </div>
      <div className="newPage-grid" id="newPage-grid">
        <CreateGrid id="newPage-grid" />
      </div>

      <div className="body">Button 4</div>

      <Button4
        buttonValue={buttonValue}
        buttonClass={buttonClass}
        buttonFunction={handleClick}
      />
    </div>
  );
};

export default Button4Container;
