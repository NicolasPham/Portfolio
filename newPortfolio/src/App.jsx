import { BrowserRouter } from "react-router-dom";
import { About, Hero, Navbar, Projects } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-dark darkBlue-gradient">
        <Navbar />
        <Hero />
        <About />
        <Projects />
      </div>
    </BrowserRouter>
  );
}

export default App;
