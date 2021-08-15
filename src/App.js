import React, { Component } from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import { withAuth0 } from '@auth0/auth0-react';
export class App extends Component {
  render() {
    return (
      <div>
        {
           this.props.auth0.isAuthenticated?
           <LogoutButton/>:
           <LoginButton/>
        }
        
        
        <Profile/>
      </div>
    )
  }
}

export default withAuth0(App);
