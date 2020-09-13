import React from 'react'
import  ReceiptDisplay from './Receipt/ReceiptDisplay'
import './Receipt.css'
import SearchIcon from '@material-ui/icons/Search';


const Receipts = () => {
    return (
        <div className='receipt'>
           <div className='sell_heading'>
                    <h2>Receipts</h2>
            </div>
            <div className='receipt_base'>
                <div className='receipt_base_search'>
                    <SearchIcon/>
                    <input type='text' />
                </div>
                <div className='receipt_base_display'>
                    <ReceiptDisplay/>
                </div>
                
            </div>
        </div>
    )
}

export default Receipts