import React from 'react'
import Sell from '../Sell'
import {connect} from 'react-redux'

import {filtering2, filtering3} from './../../../actions/auth'

const SellsideSelect = ({list, products, filtering2, filtering3}) => {

    const filterall = () => {
        console.log(products)
        filtering3({products})
    }

    const filterall2 = (e) => {
        console.log(e.target.innerText)

        filtering2({ category:e.target.innerText ,products})
    }

    return (
        <div>
            <p onClick={filterall}>All</p>
            {
                list.map(single => {
                    return <p onClick={filterall2} >{ single.category}</p>
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    products:state.auth.user.products,
    list : state.auth.user.products
})
 
export default connect(mapStateToProps, {filtering2,filtering3})(SellsideSelect)