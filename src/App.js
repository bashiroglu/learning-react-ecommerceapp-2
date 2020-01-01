import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
/*  in these last commits I also faced problem with
 being not case sensitive git deteching changes machine, 
 we can basically avoid it by typing git config core.ignorecase false.
 Or we can use othe way around to make our git not case sensitive
 */
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shoppage/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUpPage from './pages/signinandsignup/SignInAndSignUpPage';
import CheckoutPage from './pages/checkoutpage/CheckoutPage';
// import { selectCollectionsForPreview } from './redux/shop/shopSelectors';

import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments
} from './firebase/firebase.utils';
// import {
//   auth,
//   createUserProfileDocument,
//   addCollectionAndDocuments
// } from './firebase/firebase.utils';
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
          addCollectionAndDocuments();
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    // addCollectionAndDocuments(
    //   'collections',
    //   collectionsArray.map(({ title, items }) => ({ title, items }))
    // );
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
              currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  // ,
  // collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
