import React, { Component } from 'react';
import Header from './Header';
import Profile from './Profile';
import BestBooks from './BestBooks';
import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Login from './Login';
 class App extends Component {
  render() {
    return (

     
      <Router >
          <Header />
          <div style={{ padding: '4vh 4vw', background: 'white', minHeight: '89vh' }}>
            <Switch>
              <Route exact path="/">
                {this.props.auth0.isAuthenticated ? <BestBooks /> : <Login />}
              </Route>
              <Route path='/profile'>
                <Profile />
              </Route>
            </Switch>
          </div>
          <Footer />
      </Router >
    )
  }
}

export default withAuth0(App);
