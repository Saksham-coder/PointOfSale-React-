import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Productdisplay.css'

export const ProductDisplayCard = ({detail, price, category}) => {
    return (
        <div className='productdisplaycard'>
            <p>{detail}</p>
            <p>{category}</p>
            <p>Zero Tax Group</p>
            <p>{price}</p>
            <p>-</p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(ProductDisplayCard)
