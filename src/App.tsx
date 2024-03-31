import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import Exercise from "./pages/exercise";
import Vocab1 from "./pages/grammar/vocabulary/vocab1";
 
function App() {
    return (
      <div>
          <Router>
            <div className="TopBar">
              <h1 className="Title">
                Hungarian Grammar
              </h1>
              <Navbar />
            </div>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/about" element={<About/>} />
                  <Route
                      path="/contact"
                      element={<Contact/>}
                  />
                  <Route path="/exercise" element={<Exercise/>} />
                  /* Vocabulary */
                  <Route path="/vocab1" element={<Vocab1/>} />
              </Routes>
          </Router>
      </div>
    );
}
 
export default App;
