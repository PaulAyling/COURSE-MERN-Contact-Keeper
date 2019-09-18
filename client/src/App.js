import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

import Infoboxes from './components/pages/Infoboxes';
import MyInfoboxes from './components/pages/MyInfoboxes';
import InfoboxEdit from './components/pages/InfoboxEdit';
import InfoboxState from './context/infobox/InfoboxState';
import setAuthToken from './utils/setAuthToken';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <InfoboxState>
        <ContactState>
          <AlertState>
            <Router>
              <Fragment>
                <Navbar />
                <div className='container'>
                  <Alerts />
                  <Switch>
                    <PrivateRoute exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />

                    <PrivateRoute exact path='/myinfoboxes' component={MyInfoboxes} />
                    <Route exact path='/infoboxes' component={Infoboxes} />
                    <Route exact path='/infoboxedit' component={InfoboxEdit} />
                  </Switch>
                </div>
              </Fragment>
            </Router>
          </AlertState>
        </ContactState>
      </InfoboxState>
    </AuthState>
  );
};

export default App;
