import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Productdisplay.css'


export const ProductDisplayCard = ({id, detail, price, category,products}) => {
    // console.log("From product display card ", id, detail, price, category)

    return (
        <div className='productdisplaycard'>
            <Link to={`/app/products/${id}`} >
                <p>{detail}</p>
                <p>{category}</p>
                <p>Zero Tax Group</p>
                <p>{price}</p>
                <p>-</p>
            </Link>
        </div>
    )
}

const mapStateToProps = (state) => ({
    products:state.product.products
})

export default connect(mapStateToProps)(ProductDisplayCard)
