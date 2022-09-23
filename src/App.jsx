
import './App.css';
import {Navbar,Hero,
About,
Projects,
OtherProjects,
Contact} from './components'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <OtherProjects />
      <Contact />
    </div>
  );
  
}

export default App;
