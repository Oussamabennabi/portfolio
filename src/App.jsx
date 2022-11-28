import AnimatedCursor from "react-animated-cursor";
import "./App.css";
import {
  Navbar,
  Hero,
  About,
  Projects,
  ProfessionalProjects,
  Contact,
  RightBar,
  LeftBar,
} from "./components";
function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={5}
        outerSize={46}
        innerStyle={{ backgroundColor: "white" }}
        color="255,255,255"
        outerAlpha={0.9}
        innerScale={0}
        outerScale={1.4}
        trailingSpeed={3.5}
        hasBlendMode={true}
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
      />
      <Navbar />
      <LeftBar />
      <RightBar />
      <main className="App">
        <Hero />
        <About />
        <ProfessionalProjects />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
