import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Projects from './components/Projects';


import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './Components/Header';
import About from './Components/About';
import Achievements from './Components/Achievements';
import Experience from './Components/Experience';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/achievements" component={Achievements} />
        <Route path="/experience" component={Experience} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
