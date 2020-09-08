import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import Popper from '@material-ui/core/Popper';

import SelldisplayCard from './SelldisplayCard'
import {totalling} from './../../../actions/profile'

const Selldisplay = ({items,totalling, total}) => {

    useEffect(()=> {
        var  total = 0
        items.map(item=> {
            total += item.price* item.quantity
        })
        console.log(total)
        totalling({total})
    },[items])

    console.log(items)
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
            <p>{total}</p>
        </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.profile.items,
    total: state.profile.total
})

export default connect(mapStateToProps, {totalling})(Selldisplay)
