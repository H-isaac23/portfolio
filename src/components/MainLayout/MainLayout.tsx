import React from "react";
import "./layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className="main-layout">
        <nav className="navbar">
          <span className="nav-logo">Logo here</span>
          <span className="nav-item">Home</span>
          <span className="nav-item">Projects</span>
          <span className="nav-item">Contact</span>
        </nav>
        <main className="main-body">{children}</main>
      </header>
      <footer className="footer">
        <nav>hi</nav>
        <nav>hello</nav>
        <nav>wat</nav>
      </footer>
    </>
  );
};

export default MainLayout;
