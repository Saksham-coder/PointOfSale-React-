import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux';
import { register } from './../../actions/auth'
import PropTypes from 'prop-types';

const Signup = ({ register }) => {
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
        console.log(name, email, password, password2)
        if (password !== password2) {
            alert('Passwords do not match', 'danger');
        } else {
            register({ name, email, password });
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={onChange} />

                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                    />

                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange} />

                </div>
                <div className="form-group">
                    <input
                        type="password2"
                        name="password2"
                        value={password2}
                        onChange={onChange} />
                </div>
                <input type="submit" value="Register" />
            </form>

        </div>
    )
}

Signup.propTypes = {
    register: PropTypes.func.isRequired
};

export default connect(null, { register })(Signup)