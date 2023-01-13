import Button1Container from './Buttons/button1/button1Container';
import Button2Container from './Buttons/button2/button2Container';
import Button3Container from './Buttons/button3/button3Container';
import Button4Container from './Buttons/button4/button4Container';
import Select1Container from './Buttons/select1/select1Container';
import './scss/App.css';

function App() {
  return (
    <div className="mainContainer">
      <Button1Container />
      <Button2Container />
      <Button3Container />
      <Button4Container />
      <Select1Container />
    </div>
  );
}

export default App;
