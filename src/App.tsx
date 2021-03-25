import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './pages/LandingPage';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Landing} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Router>
    
    </div>
  );
}

export default App;
