import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import './App.css';



function App() {

    return (
        <Router>

            <Switch>
                <Route exact path="/">
                    <Header />
                    <About />
                    <Portfolio />
                    <Contact />
                    <Footer />
                </Route>
                <Route exact path="/contact">
                    <Header />
                    <Contact />
                </Route>
                <Route exact path="/about">
                    <Header />
                    <About />
                </Route>
                <Route exact path="/portfolio">
                    <Header />
                    <Portfolio />
                </Route>
            </Switch>

        </Router>
        
    );
}

export default App;
