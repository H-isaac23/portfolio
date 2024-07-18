import React from "react";
import MainLayout from "./components/MainLayout/MainLayout";
import Projects from "./components/Projects/Projects";
import "./App.css";

function App() {
  return (
    <>
      <MainLayout>
        {/* <p>some paragraph here</p> */}
        <Projects />
      </MainLayout>
    </>
  );
}

export default App;
