import React from 'react'
import './SellitemCard.css'
import {connect} from 'react-redux'

import {pushing} from './../../../actions/profile'

const SellitemCard = ({detail, price, pushing}) => {

    const push = () => {
        console.log(detail, price)
        pushing({detail, price})
    }

    return (
        <div onClick={push} className='sellitemcard'>
            <p>{detail}</p>
            <p>{price}</p>
        </div>
    )
}


export default connect(null,{pushing})(SellitemCard)