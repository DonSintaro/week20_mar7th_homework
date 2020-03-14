import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavHeader from "./components/NavHeader";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";


function App() {

  
  return (
    <>

    <Router>
          <div>
            <NavHeader />
            <Route exact path="/" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Footer />
          </div>
    </Router>




    </>
  );
}

export default App;
