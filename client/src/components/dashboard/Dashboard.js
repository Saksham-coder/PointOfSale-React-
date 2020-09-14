import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import  DashboardRevenue from './Dashboard/DashboardRevenue'
import  DashboardData from './Dashboard/DashboardData'
import DashboardDateTimedata from './Dashboard/DashboardDateTimedata'

import {calculations} from './../../actions/product'
import './Dashboard.css'

 const Dashboard = ({data, sold, calculations, receipt}) => {

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
                    <div className='dashboard_second_pie'>
                        {
                                data.swiggy ? <DashboardData />
                                :
                                <p>Loading</p>
                        }
                    </div>
                    <div className='dashboard_second_line'>
                        {
                                receipt ? <DashboardDateTimedata />
                                :
                                <p>Loading</p>
                        }  
                    </div>
                </div>
                <div className='dashboard_third'>
                
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.dashboard,
    sold: state.auth.user.sold,
    receipt : state.receipt.receipt
})


export default connect(mapStateToProps,{calculations})(Dashboard)
