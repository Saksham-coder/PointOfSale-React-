import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from "react-apexcharts";
import _ from "lodash"

const DashboardDateTimedata = ({data}) => {
    console.log(data)

    let time = []
    let total = []

    let todayDate = new Date().toLocaleString()

    

    data.map(d => {
        console.log(d)
        console.log(todayDate.split(" ")[0] , d.date.split(',')[0])
        if (todayDate.split(",")[0] === d.date.split(',')[0]){
            console.log("matched")
            time.push(d.date.split(',')[1])
            total.push(parseInt(d.total))
    }
    })

    console.log("data that will be mapped",time, total)

    _.reverse(time)
    _.reverse(total)
    // const {swiggy, zomato, foodpanda, store} = pricedata
    
    let data2 ={
          
        series: [{
            name: "Sales",
            data: total
        }],
        options: {
          chart: {
            height: 200,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Today Last Sales',
            align: 'center'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: time,
          }
        },
      
      
      };
      
      
    //   };


    return (
        <div>
            <Chart options={data2.options} series={data2.series}  type="line" height={250} />
            {/* <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} /> */}
        </div>
    )
}



const mapStateToProps = (state) => ({
    data : state.receipt.receipt
})

export default connect(mapStateToProps)(DashboardDateTimedata)

