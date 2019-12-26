import React from 'react';

import './custombutton.scss';

const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {/* this children bring the name of button for now */}
    {children}
  </button>
);

export default CustomButton;
