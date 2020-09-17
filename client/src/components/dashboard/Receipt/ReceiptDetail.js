import React, { Component,useEffect } from 'react'
import { connect } from 'react-redux'
import {singleReceiptDetail} from './../../../actions/product'
import ReceiptDetailCard from './ReceiptDetailCard'
import './ReceiptDetail.css'

export const ReceiptDetail = (props) => {

    useEffect( () => {
        props.singleReceiptDetail({id:props.match.params.id})
    },[])

    const { date, receipt, revenue, discount, distype, customer, items, total } = props.receipt

    // console.log(date, receipt,revenue, discount, distype, customer, items, total)

    return (
        <div className='receiptdetail'>
            <div className='receiptdetail_heading'>
               <h2>Receipt</h2> 
                   
            </div>
            <div className='receiptdetail_base'>
                <div className='receiptdetail_base_left'>
                    <h4>Receipt Details</h4>
                    <span>on {date}</span>
                    <br></br>
                    <span>Main Register</span>
                    <br></br>
                    <span>{receipt}</span>
                </div>
                <div className='receiptdetail_base_right'>
                    <div className='receiptdetail_base_right_first'>
                        <p>Status</p>
                        <p>Paid</p>
                        <p>{revenue}</p>
                    </div>
                    <div className='receiptdetail_base_right_second'>
                        <p>Items</p>
                        <p>Quantity</p>
                        <p>Tax %</p>
                        <p>Price</p>
                    </div>
                    {
                        items ?
                        items.map(i => {
                            return  <ReceiptDetailCard detail={i.details}  quantity={i.quantity} price={i.price} />
                        })
                       :
                       <p>Loading</p>
                    }
                    <div className='receiptdetail_base_right_fourth'> 
                        <p>Subtotal</p>
                        {
                            {discount} ? <span>₹ {discount+total}</span>
                            :
                            <span> - </span>
                        }
                        
                    </div>
                    <div className='receiptdetail_base_right_fifth'> 
                        <p>Total</p>
                        <span>₹ {total}</span>
                    </div>
                    <div className='receiptdetail_base_right_sixth'>
                        {
                            customer ?
                            <span>₹ {total} on {customer.paymentType}</span>
                            :
                            <span>Loading</span>
                        }
                    </div>
                    <div className='receiptdetail_base_right_seventh'> 
                        <span>{date}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    receipt: state.receipt.singleReceipt
})


export default connect(mapStateToProps,{singleReceiptDetail})(ReceiptDetail)
