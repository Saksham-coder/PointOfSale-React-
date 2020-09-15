import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import AddProductCard from './AddProductCard'
import './AddProduct.css'
import Checkbox from '@material-ui/core/Checkbox';
import {addProduct} from './../../../actions/product'

export const AddProduct = ({productList, addProduct, id}) => {

    const addPro = () => {
        addProduct({productList, id})
    }

    return (
        <div className='addproduct'>
            <div className='addproduct_heading'>
                <h3>Products / Quick Add</h3>
            </div>
            <div className='addproduct_base'>
            {
                productList.map(product => {
                return <AddProductCard  mark={product.checking} serial={product.tag} detail={product.detail} category={product.category} price={product.price} /> 
                })
            }
            <div className='addproduct_bottom'>
                <Link to='/app/products'>Go Back</Link>
                <button onClick={addPro}> Save </button>
            </div> 
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    productList: state.product.productList,
    id:state.auth.user._id
})


export default connect(mapStateToProps, {addProduct})(AddProduct)
