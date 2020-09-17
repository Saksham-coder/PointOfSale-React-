import React from 'react'
import {connect} from 'react-redux'
import './Selldisplay.css'


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
        <div className='selldisplaycard'>
            <span>{detail}</span>
            <div className='selldisplaycard_button'>
                <button onClick={item2}>-</button>
                <span>{quantity}</span>
                <button onClick={item}>+</button>
            </div>
            <span>₹{price*quantity}</span>
        </div>
    )
}

export default connect(null, {increase, decrease})(SelldisplayCard)