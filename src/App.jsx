import About from "./About";
import Navbar from "./components/Navbar";
import Fouter from "./Fouter";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Skills />
            <About />
            <Projects />
            <Fouter />
        </main>
    );
};
export default App;
