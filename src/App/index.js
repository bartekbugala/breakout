import styles from './styles.module.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../views/Home';
import Game from '../views/Game';
import About from '../views/About';


function App() {
  return (
    <Router>
      <ul className={styles.menu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/game">Game</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/game" element={<Game />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
