import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Infoboxes from './components/pages/Infoboxes';
import MyInfoboxes from './components/pages/MyInfoboxes';
import InfoboxEdit from './components/pages/InfoboxEdit';


import ContactState from './context/contact/ContactState';
import InfoboxState from './context/infobox/InfoboxState';
import './App.css';
const App = () => {
  return (
    <InfoboxState>
      <ContactState>
        <Router>
          <Fragment>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/myinfoboxes' component={MyInfoboxes} />
                <Route exact path='/infoboxes' component={Infoboxes} />
                <Route exact path='/infoboxedit' component={InfoboxEdit} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ContactState>
    </InfoboxState>
  );
};

export default App;
