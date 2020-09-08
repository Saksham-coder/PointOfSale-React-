import React from 'react'

const SelldisplayCard = ({detail, quantity, price}) => {
    return (
        <div>
            <span>{detail}</span>
            <span>{quantity}</span>
            <span>{price}</span>
        </div>
    )
}

export default SelldisplayCard