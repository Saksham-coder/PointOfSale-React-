import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import './Login.css'
import {Nature} from './../../image/Nature.jpg'

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
    <div  className='forlogin'>
      <div className='login_box'> 
        <div className='login_box_left'>
          {/* <img src='https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' /> */}
        </div>
        <div className='login_box_right'>
        <div className='login_box_right_padd'>
            <h1 className="text-primary">Welcome</h1>
            <p className='text-secondary'>Fill Your Data to enter . Thank You.</p>
            <p className="lead">
              {/* <i className="fas fa-user" /> Sign Into Your Account */}
            </p>
            <form className="form" onSubmit={onSubmit}>
              <div className="form-group">
                <p>User</p>
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group">
              <p>Password</p>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={onChange}
                />
              </div>
              <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </div>
        </div>
      </div>
      </div>
    </Fragment>
  );
};


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);