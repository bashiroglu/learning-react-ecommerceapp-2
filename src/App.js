import React, { Component } from 'react';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage';

import './App.css';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';
/* we transfered this to class to add state */
class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    /* onAuthStateChanged is method form auth library to follow whether user sign in or not  */
    /* then we use set state when state(user object, state which comes from auth object) change */
    /* this system called OAuth  */
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    /* we un unsubscribe to prevent leaking data*/
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* we send currentUser in prop of currentUser */}
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
