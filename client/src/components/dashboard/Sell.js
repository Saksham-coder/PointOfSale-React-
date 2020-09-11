import React from 'react'
import { connect } from 'react-redux'
import Loading from './../../image/Loading.gif'

import SellsideSelect from './Sell/SellsideSelect'
import Sellitem from './Sell/Sellitem'
import Selldisplay from './Sell/Selldisplay'
import './Sell.css'

const Sell = ({productloaded}) => {
    return (
        <div className='sell'>   
                <div className='sell_heading'>
                    <h2>Sell</h2>
                </div>
                <div className='sell_bottom'>
                    <div className='sell_bottom1'>
                    <div className='sell_bottom1a'>
                        <SellsideSelect />
                        <Sellitem/>
                    </div>
                    </div>
                    <div className='sell_bottom2'>
                        <Selldisplay/>
                    </div>
                </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    productloaded:state.auth.productloaded
})


export default connect(mapStateToProps)(Sell)