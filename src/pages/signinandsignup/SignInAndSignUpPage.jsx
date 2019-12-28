import React from 'react';

import SignIn from '../../components/signin/SignIn';
import SignUp from '../../components/signup/SignUp';

import './SignInAndSignUpPage.scss';

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
