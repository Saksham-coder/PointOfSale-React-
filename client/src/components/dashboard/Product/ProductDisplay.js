import React, { Component,Link, useEffect } from 'react'
import { connect } from 'react-redux'
import ProductDisplayCard from './ProductDisplayCard'
import './Productdisplay.css'
import {changeOrder, increasingPage} from './../../../actions/product'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

export const ProductDisplay = ({products, ordering, changeOrder,auth ,count ,  singleProductDetail}) => {

    useEffect(()=> {
        console.log("Checking in product display that product receive", products)
        changeOrder(auth.user.products, ordering)
    },[auth]) 

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
                {
                    ordering === 'asc' && 
                    <p onClick={order}>Sort Order <ArrowDropDownIcon/></p>
                }
                {
                    ordering === 'desc' && 
                    <p onClick={order}>Sort Order <ArrowDropUpIcon/></p>
                }
            </div>
                {
                    products.map(product => {
                        return <  ProductDisplayCard id={product._id} detail={product.details} category={product.category} price={product.price} />
                    })
                }
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    products:state.product.products,
    ordering:state.product.ordering,
    auth:state.auth
})


export default connect(mapStateToProps, {changeOrder})(ProductDisplay)
