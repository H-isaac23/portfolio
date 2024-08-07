import React from "react";
import "./layout.css";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="main-layout">
      <header className="header-bar">
        <nav className="navbar">
          {/* <span className="nav-logo">Logo</span> */}
          <Link to="/">
            <span
              className={pathname === "/" ? "nav-item nav-active" : "nav-item"}
            >
              Home
            </span>
          </Link>
          <Link to="/projects">
            <span
              className={
                pathname === "/projects" ? "nav-item nav-active" : "nav-item"
              }
            >
              Projects
            </span>
          </Link>
          <Link to="/contact">
            <span
              className={
                pathname === "/contact" ? "nav-item nav-active" : "nav-item"
              }
            >
              About / Contact
            </span>
          </Link>
        </nav>
      </header>
      <main className="main-body">{children}</main>
    </div>
  );
};

export default MainLayout;
