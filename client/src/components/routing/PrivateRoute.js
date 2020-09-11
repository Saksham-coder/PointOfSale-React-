import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from './../../image/Loading.gif'
import Navbar from './../Navbar'
import './PrivateRoute.css'

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, productloaded },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
        !productloaded ? (
        <img
        src={Loading}
        style={{ width: '400px', margin: 'auto', display: 'block' }}
        alt='Loading...'
        />
      ) 
      :
        isAuthenticated ? (
            <div class='route_flex'>
                < Navbar/>
                <Component {...props} />
            </div>
        )
        :
       (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);