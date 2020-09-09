import React, { Component } from 'react'
import { connect } from 'react-redux'
import {customer} from './../../../actions/profile'


export const FinalsellRightdelivery = ({shippingAddress,city,pincode,customer}) => {

    const general = (e) => {
        if (e.target.name === 'address'){
            customer({address:e.target.value})
        }
        if (e.target.name === 'city'){
            customer({city:e.target.value})
        }
        if (e.target.name === 'pincode'){
            customer({pincode:e.target.value})
        }
    }

    return (
        <div>
            <p>Shipping Address</p>
            <input type="text" name="address" value={shippingAddress} onChange={general}></input>
            <p>City</p>
            <input type="text" name="city" value={city} onChange={general}></input>
            <p>Pincode</p>
            <input type="email" name="pincode" value={pincode} onChange={general}></input>
        </div>
    )
}

const mapStateToProps = (state) => ({
    shippingAddress: state.profile.customer.shippingAddress,
    city: state.profile.customer.city,
    pincode: state.profile.customer.pincode
})


export default connect(mapStateToProps, {customer})(FinalsellRightdelivery)
