import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import CheckIcon from '@material-ui/icons/Check';

import FinalsellRight from './FinalsellRight'
import {customer,postingfinal} from './../../../actions/profile'

const Finalsell = ({paymentType,customer,userId,revenue,profile,postingfinal}) => {

    console.log(paymentType)

    const payment = (e) => {
        console.log("payment function")
        console.log(e.target.name)
        customer({paymentType:e.target.name})
    }

    const rev = (e) => {
        console.log(e.target.name)
        customer({revenue:e.target.name})
    }

    const final = () => {
        postingfinal(profile,userId)

        // if (isAuthenticated) {
        //     return <Redirect to="/" />;
        //   }
    }

    return (
        <div>
            <div>
                <p>Payment Type</p>
                {
                     paymentType === 'cash' ? <button onClick={payment} name='cash'>< CheckIcon/>Cash</button>
                     :
                     <button onClick={payment} name='cash'>Cash</button>
                }
                {
                     paymentType === 'card' ? <button onClick={payment} name='card'>< CheckIcon/>Credit/Debit card</button>
                     :
                     <button onClick={payment} name='card'>Credit/Debit card</button>
                }
                {
                     paymentType === 'other' ? <button onClick={payment} name='other'>< CheckIcon/>Other</button>
                     :
                     <button onClick={payment} name='other'>Other</button>
                }  
            </div>
            <div>
                <p>Revenue from:</p>
                {
                    revenue === 'Foodpanda' ? <button onClick={rev} name='Foodpanda'>< CheckIcon/>Foodpanda</button>
                    :
                    <button onClick={rev} name='Foodpanda'>Foodpanda</button>
                }
                {
                    revenue === 'Swiggy' ? <button onClick={rev} name='Swiggy'>< CheckIcon/>Swiggy</button>
                    :
                    <button onClick={rev} name='Swiggy'>Swiggy</button>
                }
                {
                    revenue === 'Zomato' ? <button onClick={rev} name='Zomato'>< CheckIcon/>Zomato</button>
                    :
                    <button onClick={rev} name='Zomato'>Zomato</button>
                }
                {
                    revenue === 'Store' ? <button onClick={rev} name='Store'>< CheckIcon/>Your Store</button>
                    :
                    <button onClick={rev} name='Store'>Your Store</button>
                }
            </div>

            <div>
                <button onClick={final}> Received {profile.total} </button>
            </div>

            <FinalsellRight/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    paymentType:state.profile.customer.paymentType,
    revenue:state.profile.revenue,
    profile:state.profile,
    userId:state.auth.user._id
})


export default connect(mapStateToProps, {customer,postingfinal})(Finalsell)
