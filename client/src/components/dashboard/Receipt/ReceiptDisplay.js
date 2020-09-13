import React, { Component,useEffect } from 'react'
import { connect } from 'react-redux'
import ReceiptDisplayCard from './ReceiptDisplayCard'
import './ReceiptDisplay.css'
import { increasingPage, decreasingPage} from './../../../actions/product'
import {loadUser} from './../../../actions/auth'

export const ReceiptDisplay = ({sold,count,increasingPage,receipt, decreasingPage}) => {

    useEffect(() => {
        (loadUser())
    }, [])

    const increasePage = () => {
        // console.log(sold)
        if (sold.length > parseInt(count)){
            increasingPage({sold})
        }
    }

    const decreasePage = () => {
        console.log(sold)
        decreasingPage({sold})
    }

    console.log("showing receipt==>>>", receipt)

    return (
        <div className='receiptdisplay'>
            <div className='receiptdisplay_base'>
                <p>Receipt Number</p>
                <p>Created At</p>
                <p>Customer Mobile</p>
                <p>Fulfillment Status</p>
                <p>Collected From</p>
                <p>Total</p>
            </div>
            <div className='receiptdisplay_main'> 
            {
                receipt ? 
                receipt.map(s => {
                    return <ReceiptDisplayCard id={s._id}  number={s.receipt}  created={s.date} mobile={s.customer.phone} payment={s.revenue} total={s.total}  />
                })
                :
                <div>Loading</div>
            }
            <div className='receiptdisplay_button'>
                {
                    count == 10 ? <button className='disable_button' onClick={decreasePage}>Previous</button>
                    :
                    <button onClick={decreasePage}>Previous</button>
                }
                {
                    sold.length > parseInt(count) ? <button  onClick={increasePage}>Next</button>
                    :
                    <button className='disable_button' onClick={increasePage}>Next</button>
                }
                
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    sold: state.auth.user.sold,
    receipt: state.receipt.receipt,
    count:state.receipt.count
})

export default connect(mapStateToProps,{increasingPage, decreasingPage})(ReceiptDisplay)
