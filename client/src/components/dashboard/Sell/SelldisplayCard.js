import React from 'react'
import {connect} from 'react-redux'

import {increase, decrease} from './../../../actions/profile'

const SelldisplayCard = ({detail, quantity, price, increase, decrease}) => {

    const item = () => {
        increase({detail})
    }

    const item2 = () => {
        if (quantity > 0){
        decrease({detail})
    }
    }

    return (
        <div>
            <span>{detail}</span>
            <button onClick={item2}>-</button>
            <span>{quantity}</span>
            <button onClick={item}>+</button>
            <span>{price}</span>
        </div>
    )
}

export default connect(null, {increase, decrease})(SelldisplayCard)