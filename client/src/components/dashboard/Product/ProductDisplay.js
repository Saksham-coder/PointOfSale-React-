import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductDisplayCard from './ProductDisplayCard'
import './Productdisplay.css'
import {changeOrder} from './../../../actions/product'


export const ProductDisplay = ({products, ordering, changeOrder}) => {

    const order = () => {
        console.log("Change in asc. or desc. order", products)
        changeOrder(products, ordering)
    }

    return (
        <div className='productdisplay_heading'>
            <div className='productdisplay_headingmain'>
                <p>Product Name</p>
                <p>Product Category</p>
                <p>Tax Group</p>
                <p>Product Price</p>
                <p onClick={order}>Sort Order</p>
            </div>
                {
                    products.map(product => {
                        return <  ProductDisplayCard detail={product.details} category={product.category} price={product.price} />
                    })
                }
        </div>
    )
}

const mapStateToProps = (state) => ({
    products:state.product.products,
    ordering:state.product.ordering
})


export default connect(mapStateToProps, {changeOrder})(ProductDisplay)
