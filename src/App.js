import './App.css';
import About from './components/About'
import Chatbot from './components/Chatbot';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Resume></Resume>
      <Projects></Projects>
      <div className='spacer'></div>
    </div>
  );
}

export default App;
