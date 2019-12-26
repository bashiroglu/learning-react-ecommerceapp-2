import React from 'react';

import './custombutton.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button /* we just get isGoogleSignIn prop and act based on it, adding class or not */
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
