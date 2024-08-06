import React from "react";
import MainLayout from "./components/MainLayout/MainLayout";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <>
      <MainLayout>
        {/* <p>some paragraph here</p> */}
        {/* <Projects /> */}
        {/* <Home /> */}
        <Contact />
      </MainLayout>
    </>
  );
}

export default App;
