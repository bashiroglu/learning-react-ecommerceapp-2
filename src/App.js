import React, { Component } from 'react';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage';

import './App.css';
import { Switch, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
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
