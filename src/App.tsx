import Button1Container from './Buttons/button1/button1Container';
import Button2Container from './Buttons/button2/button2Container';
import Button3Container from './Buttons/button3/button3Container';
import './scss/App.css';

function App() {
  return (
    <div className="mainContainer">
      <Button1Container />
      <Button2Container />
      <Button3Container />
    </div>
  );
}

export default App;
