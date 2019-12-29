import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; /* this is for wehen we use many 
reselcts and pass the state all, by using this we do it automatically */

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUpPage from './pages/signinandsignup/SignInAndSignUpPage';
import CheckoutPage from './pages/checkoutpage/CheckoutPage';

import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/userAction';
import { selectCurrentUser } from './redux/user/userSelectors';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            path="/signin"
            render={() =>
              currentUser ? (
                /* Redirect take to param and Redirect when we access that route */ <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

/* const mapStateToProps = state => ({
  currentUser: state.user.currentUser
}); as you see we didn't pass state in below1 */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
/*  first setCurrentUser is prop to give data to comp */
/* second one is our action function get user as a parametr  */
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
/* the same we giv connect HOF but as a secend parametr */
export default connect(mapStateToProps, mapDispatchToProps)(App);
