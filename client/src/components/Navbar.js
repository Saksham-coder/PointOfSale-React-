import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ReceiptIcon from '@material-ui/icons/Receipt';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
 const Navbar = () => {
    return (
        <div className='navbar'>
                <Link to='/'> <HomeIcon/> <span>Dashboard</span></Link>
                <Link to='/app/sell'> <ShoppingCartIcon/> <span>Sell</span> </Link>
                <Link to='/app/receipts'> <ReceiptIcon/> <span>receipts</span>  </Link>
                <Link to='/app/products'> <LocalOfferIcon/> <span>product</span>  </Link>
        </div>
    )
}

export default Navbar