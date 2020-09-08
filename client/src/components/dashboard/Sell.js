import React from 'react'

import SellsideSelect from './Sell/SellsideSelect'
import Sellitem from './Sell/Sellitem'
import Selldisplay from './Sell/Selldisplay'

const Sell = () => {
    return (
        <div>
        <div>
            <SellsideSelect />
        </div>
        <div>
            <Sellitem/>
            <Selldisplay/>
        </div>
        </div>
    )
}

export default Sell