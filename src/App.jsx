import About from "./components/About";
import Contact from "./components/Contact";
import Expericence from "./components/Expericence";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import style from "./index.css";

function App() {
  return (
    <div>
      {" "}
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Expericence />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
