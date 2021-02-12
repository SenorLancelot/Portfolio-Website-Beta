import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import JumbotronComp from "./components/JumbotronComp";
import HomeComponent from './components/HomeComponent';

function App() {
  return (
    <>
      <NavbarComponent />
      <JumbotronComp />
      <HomeComponent/>
    </>
  );
}

export default App;
