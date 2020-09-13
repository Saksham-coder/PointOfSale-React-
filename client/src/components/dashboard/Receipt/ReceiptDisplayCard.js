import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export const ReceiptDisplayCard = ({id,number,created,mobile,payment,total}) => {
    return (
            <div className='receiptdisplaycard'>
                <Link to={`/app/receipts/${id}`} >
                    <p>{number}</p>
                    <p>{created}</p>
                    {
                        number ? <p>{mobile}</p>
                        :
                        <p>-</p>
                    }
                    <p>Fullfilled</p>
                    <p>{payment}</p>
                    <p>{total}</p>
                </Link>
            </div>
    )
}


export default ReceiptDisplayCard
