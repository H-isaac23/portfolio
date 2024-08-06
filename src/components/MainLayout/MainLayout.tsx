import React from "react";
import "./layout.css";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="main-layout">
      <header className="header-bar">
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
      </header>
      <main className="main-body">{children}</main>
    </div>
  );
};

export default MainLayout;
