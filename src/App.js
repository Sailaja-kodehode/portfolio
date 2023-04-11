import React from "react";
// import Header from "./Components/Header/Header";
import NavBar from "./Components/Header/NavBar";
import Home from "./Components/Home/Home";
import About from "./Components/about/About";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Project/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
// import Landing from "./Component/Landing/Landing";
// import "./index.css";
import "./App.css";
function App() {
  return (
    <div>
      <NavBar />
      {/* <Header /> */}
      {/* <Landing /> */}
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
