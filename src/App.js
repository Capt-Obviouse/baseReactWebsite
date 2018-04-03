import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './Assets/css/default.min.css';
import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import Homepage from './components/pages/homePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Route exact path='/' component={Homepage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
