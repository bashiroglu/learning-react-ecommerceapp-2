import React from 'react';
import { Link } from 'react-router-dom';
/* this speacial syntax to impor swg and we import it as Logo(component), so we can use it, exactly as comp */
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;