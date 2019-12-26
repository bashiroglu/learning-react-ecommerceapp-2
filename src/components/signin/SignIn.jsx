import React, { Component } from 'react';

import FormInput from '../custominput/CustomInput';
import CustomButton from '../custombutton/CustomButton';

import './signin.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = e => {
    e.preDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = e => {
    /* simple destructuring */
    const { value, name } = e.target;
    /* syntax to take to attribute or prop from 1 comp */
    /* by this we don't use unnecessary 2 function */
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            /* in here we just send func of handle change to child comp,
            but when action happen if refer here and the f works */
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.email}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <CustomButton type="submit"> Sign in </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
