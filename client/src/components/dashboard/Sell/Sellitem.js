import React from 'react'
import {connect} from 'react-redux'

import SellitemCard from "./SellitemCard"
import {filtering} from './../../../actions/auth'

const Sellitem = ({products,copyProducts,filtering}) => {
    console.log('Products in Sell item card==.>>>', products,copyProducts)

    const change = (e) => {
        console.log(e.target.value)
        filtering({products, value:e.target.value})
    }

    return (
        <div>
        <div>
        <input
            type="text"
            placeholder="Search Product"
            name="searchProduct"
            onChange={change}
          />
        </div>
            {
                copyProducts.map(product => {
                    return <SellitemCard  detail={product.details} price={product.price} />
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    products:state.auth.user.products,
    copyProducts:state.auth.copyProduct

})

export default connect(mapStateToProps, {filtering})(Sellitem)