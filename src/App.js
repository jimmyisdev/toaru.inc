import "bootstrap/dist/css/bootstrap.min.css";
import "./style/style.scss";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App container-fluid p-0">
      <Router>
        <header className="App-header">
          <Navigation />
        </header>
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
