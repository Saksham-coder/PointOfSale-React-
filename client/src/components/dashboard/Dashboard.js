import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import  DashboardRevenue from './Dashboard/DashboardRevenue'
import  DashboardData from './Dashboard/DashboardData'

import {calculations} from './../../actions/product'
import './Dashboard.css'

 const Dashboard = ({data, sold, calculations}) => {

    useEffect(()=> {
        calculations({data, sold})
    },[sold])


    return (
        <div className='dashboard'>
            <div className='dashboard_header'>
                    <h2>Dashboard</h2>
            </div>
            <div className='dashboard_base'>
                <div className='dashboard_first'>
                    <DashboardRevenue />
                </div>
                <div className='dashboard_second'>
                {
                        data.swiggy ? <DashboardData />
                        :
                        <p>Loading</p>
                }
                </div>
                <div className='dashboard_third'>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.dashboard,
    sold: state.auth.user.sold
})


export default connect(mapStateToProps,{calculations})(Dashboard)
