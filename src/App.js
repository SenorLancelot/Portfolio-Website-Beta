import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import JumbotronComp from "./components/JumbotronComp";
import HomeComponent from "./components/HomeComponent";
import ProjectsComponent from "./components/ProjectsComponent";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <JumbotronComp />

        <Switch>
          <Route path="/home" component={HomeComponent} />
          <Route path="/education" component={Education} />
          <Route path="/projects" component={ProjectsComponent} />
          <Route path="/contactme" component={Contact} />

          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>

      {/* <HomeComponent />
      <ProjectsComponent />
      <Education />
      <Contact /> */}
    </>
  );
}

export default App;
