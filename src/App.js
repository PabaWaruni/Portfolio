import "./App.css";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Approach } from "./components/Approach";
import { Skills } from "./components/Skills";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <a className="skipLink" href="#about">Skip to content</a>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Approach />
        <Skills />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
