import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './Finalsell.css'
import _ from 'lodash'
import {setAlert} from './../../../actions/alert'

import CheckIcon from '@material-ui/icons/Check';

import FinalsellRight from './FinalsellRight'
import {customer,postingfinal} from './../../../actions/profile'

const Finalsell = ({paymentType,customer,userId,revenue,profile,postingfinal,items, setAlert}) => {

    // console.log(paymentType)

    const payment = (e) => {
        // console.log("payment function")
        // console.log(e.target.name)
        customer({paymentType:e.target.name})
    }

    const rev = (e) => {
        // console.log(e.target.name)
        customer({revenue:e.target.name})
    }

    const final = () => {
        let finalVal = ''
        let dummyVal = []
        if (!paymentType){
            dummyVal.push("·Payment_Type")
        }
        if(!revenue){
            dummyVal.push("·Revenue_From")
        }
        if(items.length === 0){
            dummyVal.push("·Items_Cart_Empty")
        }
        console.log(dummyVal)
        finalVal = _.join(dummyVal, ' ')
        console.log(finalVal)
        if(finalVal){
                setAlert(`Please Provide ${finalVal}`, 'danger')
            }
            else {
                postingfinal(profile,userId)
            }
        }

    return (
        <div className='sellfinal'>
            <div className='sellfinal_header'>
                <h3>Sell</h3>
            </div>
            <div className='sellfinal_base_current'>
                <div className='sellfinal_current'>
                    <p>Current</p>
                </div>
                <div className='sellfinal_base'>
                <div className='sellfinal_base_left'> 
                    <div className='sellfinal_base_first'>
                        <p>Payment Type</p>
                        <div className='sellfinal_base_button'>
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
                    </div>
                    <div className='sellfinal_base_second'>
                        <p>Revenue from:</p>
                        <div className='sellfinal_base_button'>
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
                    </div>
                    <div className='sellfinal_base_third'>
                        <button onClick={final}> Received ₹{profile.total} </button>
                    </div>
                </div>
                <div className='sellfinal_base_right'> 
                    <FinalsellRight/>
                </div> 
                </div>
            </div>

            
        </div>
    )
}

const mapStateToProps = (state) => ({
    paymentType:state.profile.customer.paymentType,
    revenue:state.profile.revenue,
    profile:state.profile,
    userId:state.auth.user._id,
    items:state.profile.items
})


export default connect(mapStateToProps, {customer,postingfinal, setAlert})(Finalsell)
