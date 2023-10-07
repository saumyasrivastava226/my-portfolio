import React from 'react';
import './App.css';
import { Header } from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
       
      </Router>
    </div>
  );
}

export default App;
