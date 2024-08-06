import React from "react";
import MainLayout from "./components/MainLayout/MainLayout";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <MainLayout>
        {/* <p>some paragraph here</p> */}
        {/* <Projects /> */}
        {/* <Home /> */}
        {/* <Contact /> */}
        <Outlet />
      </MainLayout>
    </>
  );
}

export default App;
