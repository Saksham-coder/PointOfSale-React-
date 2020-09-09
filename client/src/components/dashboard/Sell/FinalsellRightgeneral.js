import React, { Component } from 'react'
import { connect } from 'react-redux'
import {customer} from './../../../actions/profile'

export const FinalsellRightgeneral = ({name, phone, email, customer}) => {
    console.log(name, phone, email)

    const general = (e) => {
        if (e.target.name === 'phone'){
            customer({phone:e.target.value})
        }
        if (e.target.name === 'email'){
            customer({email:e.target.value})
        }
        if (e.target.name === 'name'){
            customer({name:e.target.value})
        }
    }

    return (
        <div>
            <p>Customer Phone</p>
            <input type="text" name="phone" value={phone} onChange={general}></input>
            <p>Customer Name</p>
            <input type="text" name="name" value={name} onChange={general}></input>
            <p>Customer Email</p>
            <input type="email" name="email" value={email} onChange={general}></input>
        </div>
    )
}

const mapStateToProps = (state) => ({
    name: state.profile.customer.name,
    phone: state.profile.customer.phone,
    email: state.profile.customer.email
})

export default connect(mapStateToProps,{customer})(FinalsellRightgeneral)
