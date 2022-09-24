
import AnimatedCursor from 'react-animated-cursor';
import './App.css';
import {Navbar,Hero,
About,
Projects,
OtherProjects,
Contact,
RightBar,
LeftBar} from './components'
function App() {
  return (
    <>
      <Navbar />
      <LeftBar />
      <RightBar />
      <main className="App">
        <AnimatedCursor
          innerSize={5}
          outerSize={40}
          innerStyle={{ backgroundColor: "white" }}
          color="255,255,255"
          outerAlpha={.9}
          innerScale={0}
          outerScale={1.7}
          hasBlendMode={true}
          outerStyle={{ mixBlendMode: "exclusion" }}
        />
        <Hero />
        <About />
        <Projects />
        <OtherProjects />
        <Contact />
      </main>
    </>
  );
  
}

export default App;
