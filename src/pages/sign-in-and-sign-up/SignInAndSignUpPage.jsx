import React from 'react';

import SignIn from '../../components/signin/SignIn';

// import './SignInAndSignUpPage.scss';

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    {/* we need this because we will have signup comp in here too */}
    <SignIn />
  </div>
);

export default SignInAndSignUpPage;
