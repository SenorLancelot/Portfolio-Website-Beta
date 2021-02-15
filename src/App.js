import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import JumbotronComp from "./components/JumbotronComp";
import HomeComponent from './components/HomeComponent';
import ProjectsComponent from './components/ProjectsComponent';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <NavbarComponent />
      <JumbotronComp />
      {/* <HomeComponent/> */}
      {/* <ProjectsComponent/> */}
      {/* <Education/> */}
      <Contact/>
    </>
  );
}

export default App;
