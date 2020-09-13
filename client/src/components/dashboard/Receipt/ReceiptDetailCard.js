import React, { Component } from 'react'
import { connect } from 'react-redux'

export const ReceiptDetailCard = ({detail, quantity,price}) => {
    return (
        <div className='receiptdetail_base_right_third'>
            <p>{detail}</p>
            <p>{quantity}</p>
            <p>-</p>
            <p>₹ {price}</p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptDetailCard)
