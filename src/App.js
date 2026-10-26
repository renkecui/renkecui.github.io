import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from './components/Skills';
import Experience from "./components/Experience";
import ProjectCards from "./components/ProjectCards";
import ContactRestAPI from "./components/ContactRestAPI";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Experience />
      <ProjectCards />
      <ContactRestAPI />
      <Footer />
    </div>
  );
}

export default App;
