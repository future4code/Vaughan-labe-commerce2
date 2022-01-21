import React from 'react';
import './App.css';

import Home from './components/Home';
import {BrowserRouter as Router} from 'react-router-dom/'

class App extends React.Component {
  render(){
    return(
      <div className="app">
        <Router>
          <Home>
            </Home>
        </Router>
      </div>
    );
  }
}

export default App;
