import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from "react-apexcharts";

const DashboardData = ({pricedata}) => {
    console.log(pricedata)

    const {swiggy, zomato, foodpanda, store} = pricedata
    
    let data = {
      
        series: [swiggy, zomato, foodpanda, store],
        options: {
          chart: {
            type: 'donut',
          },
          labels: ['Swiggy', 'Zomato', 'Foodpanda', 'Store'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 300
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };


    return (
        <div>
            <Chart options={data.options} series={data.series}  width="350" type="donut" />
        </div>
    )
}



const mapStateToProps = (state) => ({
    pricedata : state.dashboard
})

export default connect(mapStateToProps)(DashboardData)

