import React from 'react'
import {Link} from 'react-router-dom'

 const Navbar = () => {
    return (
        <div>
                <Link to='/'>Dashboard</Link>
                <Link to='/app/sell'>Sell</Link>
                <Link to='/app/receipts'>receipts</Link>
                <Link to='/app/products'>product</Link>
        </div>
    )
}

export default Navbar