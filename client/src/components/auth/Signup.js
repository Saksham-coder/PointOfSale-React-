import React, { Fragment, useState } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { register } from './../../actions/auth'
import {setAlert} from './../../actions/alert'
import PropTypes from 'prop-types';

const Signup = ({ register, setAlert }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        // console.log(name, email, password, password2)
        if (password !== password2) {
          setAlert('Passwords do not match', 'danger');
        } else { 
          register({ name, email, password });
          setAlert('Account Created Succesfully ! Now Login', 'success');
        }
    };

    return ( 
        <div  className='forlogin'>
      <div className='login_box'> 
        <div className='login_box_left_signup'>
          {/* <img src='https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' /> */}
        </div>
        <div className='login_box_right'>
        <div className='login_box_right_padd'>
            <h1 className="text-primary">Join Now !</h1>
            <p className='text-secondary'>Fill Your Data to enter . Thank You.</p>
            <p className="lead">
              {/* <i className="fas fa-user" /> Sign Into Your Account */}
            </p>
            <form className="form" onSubmit={onSubmit}>
              <div className="form-group">
                <p>User</p>
                <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChange} />
              </div>
              <div className="form-group">
              <p>Email-id</p>
              <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                    />
              </div>
              <div className="form-group">
              <p>Password</p>
              <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange} />
              </div>
              <div className="form-group">
              <p>Confirm Password</p>
              <input
                        type="password2"
                        name="password2"
                        value={password2}
                        onChange={onChange} />
              </div>
              <input type="submit" className="btn btn-primary" value="Signup" />
            </form>
            <p className="my-1">
              Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
        </div>
      </div>
      </div>
    )
}

Signup.propTypes = {
    register: PropTypes.func.isRequired
};

export default connect(null, { register, setAlert })(Signup)