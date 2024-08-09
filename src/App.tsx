import MainLayout from "./components/MainLayout/MainLayout";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedOutlet from "./components/AnimatedOutlet/AnimatedOutlet";
import "./App.css";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <MainLayout>
        <AnimatePresence mode="wait">
          <motion.div
            className="reset-container"
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AnimatedOutlet />
          </motion.div>
        </AnimatePresence>
      </MainLayout>
    </>
  );
}

export default App;
