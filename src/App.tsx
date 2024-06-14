import './App.scss';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Nav } from './pages/Nav';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';
import { Tech } from './components/Tech';
import { Experience } from './pages/Experience';


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Tech />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

