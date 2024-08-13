import React from "react";
import "./layout.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="main-layout"
    >
      <header className="header-bar">
        <nav className="navbar">
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
              About
            </span>
          </Link>
        </nav>
      </header>
      <main className="main-body">{children}</main>
    </motion.div>
  );
};

export default MainLayout;
