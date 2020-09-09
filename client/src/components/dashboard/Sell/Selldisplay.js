import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Popper from '@material-ui/core/Popper';

import SelldisplayCard from './SelldisplayCard'
import {totalling,customer} from './../../../actions/profile'

const Selldisplay = ({items, discountValue,totalling,distype, total, customer}) => {

    useEffect(()=> {
        var  total = 0
        items.map(item=> {
            total += item.price* item.quantity
        })
        console.log("before discount applying", total)
        console.log(typeof(distype), typeof(total), typeof(discountValue))
        if (distype === 'Percentage' && discountValue){
            total -= parseInt(discountValue) * 0.01
        }
        if (distype === 'Value' && discountValue){
            total -= parseInt(discountValue) 
        }
        console.log("after discount applying", total)
        totalling({total})
    },[items,discountValue,distype])

    console.log(items)

    const discount = (e) => {
        console.log(e.target.name, e.target.value)
        if (e.target.name === 'Discount'){
            customer({discount:e.target.value})
        }else{
            customer({distype:e.target.value})
        }
    }
    return (
        <div>
            <div>
                {
                    items.map(item => {
                    return <SelldisplayCard  detail={item.details} price={item.price} quantity={item.quantity} />
                    })
                }
            </div>
            <div>
                <p>Discount Type:</p>
                <input onChange={discount} type="radio" id="percentage" name="Percentage" value="Percentage" />
                <label for="percentage">Percentage</label><br></br>
                <input onChange={discount} type="radio" id="value" name="Percentage" value="Value" />
                <label for="value">Value</label><br></br>

                <label for="discount">Discount</label><br></br>
                <input onChange={discount} type="number" id="discount" name="Discount" value={discountValue} />
            </div>
            
            <Link to='/app/sell/final'>
                <p>Charge {total}</p>
            </Link>
        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.profile.items,
    total: state.profile.total,
    discountValue: state.profile.discount,
    distype: state.profile.distype,
})

export default connect(mapStateToProps, {totalling, customer})(Selldisplay)
