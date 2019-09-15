import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Infoshots from './components/pages/Infoshots';
import MyInfoshots from './components/pages/MyInfoshots';
import './App.css';

import ContactState from './context/contact/ContactState';
import InfoshotState from './context/infoshot/InfoshotState';


const App = () => {
  return (
    <InfoshotState>
    <ContactState>
      <Router>
        <Fragment>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/myinfoshots' component={MyInfoshots} />
              <Route exact path='/infoshots' component={Infoshots} />

            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
    </InfoshotState>
  );
};

export default App;
