import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddProductCard from './AddProductCard'
import './AddProduct.css'
import Checkbox from '@material-ui/core/Checkbox';

export const AddProduct = ({productList}) => {

    return (
        <div className='addproduct'>
            <div className='addproduct_heading'>
                <h3>Products / Quick Add</h3>
            </div>
            <div className='addproduct_base'>
            {
                productList.map(product => {
                return <AddProductCard  serial={product.tag} detail={product.detail} category={product.category} price={product.price} /> 
                })
            }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    productList: state.product.productList
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)
