import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import CircleLoader from "react-spinners/CircleLoader";
import "./App.css";
function MoveToTop() {
  const path = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
}
export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <CircleLoader
            color={"#011c38"}
            loading={true}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Navbar />
          <MoveToTop />
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="page" timeout={300}>
              <Routes location={location}>
                <Route index path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
          <Footer />
        </>
      )}
    </div>
  );
}
