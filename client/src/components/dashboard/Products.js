import React from 'react';
import {connect} from 'react-redux'
import ProductDisplay from './Product/ProductDisplay'
import SearchIcon from '@material-ui/icons/Search';
import './Product.css'

import {filteringInProduct} from './../../actions/product'

 const Products = ({propProduct,filteringInProduct}) => {

    const change = (e) => {
        console.log(e.target.value)
        filteringInProduct({propProduct, value:e.target.value})
    }

    return (
        <div className='product'>
           <div className='sell_heading'>
                    <h2>Products</h2>
            </div>
            <div className='product_base'>
                <div className='product_base_search'>
                    <SearchIcon/>
                    <input type='text' placeholder='Filter by product name' onChange={change} />
                </div>
                <div className='product_base_display'>
                    <ProductDisplay/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    propProduct:state.auth
})

export default connect(mapStateToProps, {filteringInProduct})(Products)
