import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../carticon/CartIcon';
import CartDropdown from '../cartdropdown/CartDropdown';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLinkContainer,
  OptionDivContainer
} from './headerStyles';

import './header.scss';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <Link to="/shop">CONTACT</Link>

      {currentUser ? (
        <OptionDivContainer onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionDivContainer>
      ) : (
        <OptionLinkContainer to="/signin">SIGN IN</OptionLinkContainer>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
