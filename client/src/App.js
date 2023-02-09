import "./styles.scss";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [mode, setMode] = useState(true);

  const changeMode = () => {
    setMode((mode) => !mode);
  };

  return (
    <div className={`app ${mode ? "theme-light" : "theme-dark"}`}>
      <Router>
        <Navbar mode={mode} changeMode={changeMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
