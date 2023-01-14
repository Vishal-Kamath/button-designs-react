import Button1Container from './Buttons/button1/button1Container';
import Button2Container from './Buttons/button2/button2Container';
import Button3Container from './Buttons/button3/button3Container';
import Button4Container from './Buttons/button4/button4Container';
import Select1Container from './Buttons/select1/select1Container';
import Toggle from './components/toggle';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import './scss/App.css';

function App() {
  return (
    <>
      <div className="App">
        <header>
          <div className="title">
            UI Designs
            <div className="subTitle">by Vishal Kamath</div>
          </div>

          <Toggle />
        </header>

        <main>
          <div className="headings">Buttons</div>
          <div className="mainContainer">
            <Button1Container />
            <Button2Container />
            <Button3Container />
            <Button4Container />
          </div>

          <div className="headings">Selects</div>
          <div className="mainContainer">
            <Select1Container />
          </div>
        </main>

        <footer>
          <h1>Thank you for viewing</h1>
          <div className="contacts">
            <h2>Contacts</h2>
            <a
              href="https://github.com/Vishal-Kamath/ui-designs-react"
              target="_blank"
            >
              <FaGithub /> Github
            </a>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <FaFacebook /> FaceBook
            </a>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
            >
              <FaInstagram /> Instagram
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
