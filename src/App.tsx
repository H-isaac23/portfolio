import MainLayout from "./components/MainLayout/MainLayout";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
}

export default App;
