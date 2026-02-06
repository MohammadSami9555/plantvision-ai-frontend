import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Prompt from "./Prompt";
import Analysis from "./Analysis";
import HowItWorks from "./HowItWorks";
import Upload from "./Upload";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="container">

        <section id="home" className="section">
          <Home />
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="how" className="section">
          <HowItWorks />
        </section>

        <section id="upload" className="section">
          <Upload />
        </section>

        

        <section id="analysis" className="section">
          <Analysis />
        </section>

      </div>
    </>
  );
}
