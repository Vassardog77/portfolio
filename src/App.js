import './App.css';
import About from './components/About'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <div className='spacer'></div>

      <About></About>
      <Resume></Resume>
      <Projects></Projects>
    </div>
  );
}

export default App;
