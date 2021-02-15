import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import JumbotronComp from "./components/JumbotronComp";
import HomeComponent from './components/HomeComponent';
import ProjectsComponent from './components/ProjectsComponent';
import Education from './components/Education';

function App() {
  return (
    <>
      <NavbarComponent />
      <JumbotronComp />
      {/* <HomeComponent/> */}
      {/* <ProjectsComponent/> */}
      <Education/>
    </>
  );
}

export default App;
