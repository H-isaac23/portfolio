import React from "react";
import MainLayout from "./components/MainLayout/MainLayout";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  return (
    <>
      <MainLayout>
        {/* <p>some paragraph here</p> */}
        {/* <Projects /> */}
        <Home />
      </MainLayout>
    </>
  );
}

export default App;
