import React, { Component,useEffect } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import './DashboardRevenue.css'
import StoreIcon from '@material-ui/icons/Store';
import AssessmentIcon from '@material-ui/icons/Assessment';

export const DashboardRevenue = ({pricedata}) => {

    const {swiggy, zomato, foodpanda, store} = pricedata

    return (
        <div className='dashboardrevenue'>
            <div className='dashboardrevenue_card'>
                <div className='dashboardrevenue_card_header'>
                    <h4>Total Sales</h4>
                    <AssessmentIcon/>
                </div>
               <p>₹ {swiggy+ zomato+ foodpanda+ store}</p> 
            </div>
            <div className='dashboardrevenue_card'>
                <div className='dashboardrevenue_card_header'>
                    <h4>Swiggy Sales</h4>
                    <img src='https://cdn.iconscout.com/icon/free/png-512/swiggy-1613371-1369418.png'
                    alt='' />
                </div>
               <p>₹ {swiggy}</p> 
            </div>
            <div className='dashboardrevenue_card'>
                <div className='dashboardrevenue_card_header'>
                    <h4>Zomato Sales</h4>
                    <img src='https://cdn.iconscout.com/icon/free/png-512/zomato-1937646-1637644.png'
                     alt='' />
                </div>
               <p>₹ {zomato}</p> 
            </div>
            <div className='dashboardrevenue_card'>
                <div className='dashboardrevenue_card_header'>
                    <h4>Store Sales</h4>
                    <StoreIcon/>
                </div>
               <p>₹ {store}</p> 
            </div>
            <div className='dashboardrevenue_card'>
                <div className='dashboardrevenue_card_header'>
                    <h4>Foodpanda Sales</h4>
                    <img src='https://cdn.iconscout.com/icon/free/png-512/foodpanda-1613373-1369420.png'
                     alt='' />
                </div>
               <p>₹ {foodpanda}</p> 
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    pricedata : state.dashboard
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardRevenue)
