import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Expertise from "./components/Expertise";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import SparkleBackground from "./components/SparkleBackground";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route
          path="/"
          element={
            <div className="App flex flex-col min-h-screen">
              <SparkleBackground />
              <Navbar />
              <Header />
              <AboutMe />
              <Expertise />
              <Portfolio />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
