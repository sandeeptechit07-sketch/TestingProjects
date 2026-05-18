import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Login from './login'
import Page from "./page/page";
import Name from "./name/name";
import Home from "./Home/Home";
import About from "./About";
import Services from "./Services";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
       {/* <Login/> */}
       {/* <Page/> */}
       <Name/>
       <Home/>
       <About/>
       <Services/>
    </>

  );
}

export default App;
