import React, { Component } from 'react'
import { connect } from 'react-redux'

import CheckIcon from '@material-ui/icons/Check';

import FinalsellRight from './FinalsellRight'
import {customer} from './../../../actions/profile'

const Finalsell = ({paymentType,customer,revenue}) => {

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

            <FinalsellRight/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    paymentType:state.profile.customer.paymentType,
    revenue:state.profile.revenue
})


export default connect(mapStateToProps, {customer})(Finalsell)
