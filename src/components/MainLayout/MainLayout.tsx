import React from "react";
import "./layout.css";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className="main-layout">
        <nav className="navbar">
          {/* <span className="nav-logo">Logo</span> */}
          <Link to="/">
            <span className="nav-item">Home</span>
          </Link>
          <Link to="/projects">
            <span className="nav-item">Projects</span>
          </Link>
          <Link to="/contact">
            <span className="nav-item">About / Contact</span>
          </Link>
        </nav>
        <main className="main-body">{children}</main>
      </header>
    </>
  );
};

export default MainLayout;
