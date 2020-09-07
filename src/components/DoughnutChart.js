import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2'
import { Segment, Header, Icon } from 'semantic-ui-react'
import {connect} from 'react-redux';
import { logCategoryIndex } from '../actions/index'

// Ill have to do a fetch for all categories and then find the ones that match the user Id

// function getRandomInt (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// ^^^This function generates random numbers used for testing my chart


class DoughnutChart extends Component {
    // Here I want to input the sections of data with my own category data. 


    render(){


        let data =  {
            labels: ['Stocks', 'Crypto', 'Food', 'Bills', 'Shopping', 'Misc'],
            datasets: [
                {
                    label: 'Amount',
                    hoverBackgroundColor: "rgba(51, 82, 73, 0.87)",
                    hoverBorderColor: "white",
                    data: [
                        this.props.stockAmount.reduce((a,b)=> a + b, 0), 
                        this.props.cryptoAmount.reduce((a,b)=> a + b, 0), 
                        this.props.foodAmount.reduce((a,b)=> a + b, 0), 
                        this.props.billsAmount.reduce((a,b)=> a + b, 0), 
                        this.props.shoppingAmount.reduce((a,b)=> a + b, 0), 
                        this.props.miscAmount.reduce((a,b)=> a + b, 0)],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1',
                        'rgba(255, 159, 64, 1',
                        'rgba(235, 235, 70, 1', 
                        'rgba(70, 235, 70, 1',  
                        'rgba(54, 162, 235, 1', 
                        'rgba(153, 102, 255, 1',
                    ]
                }
            ]
        }

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        
    return (
        <div className='main-chart-container-chart' >
            <Header as='h2' color='teal' textAlign='center'>
                <Icon name='dollar sign' />
                    Expenditures
            </Header>
            <Segment raised>
            <Doughnut 
                data={data}
                onElementsClick={element => {
                    if (element[0] === undefined){
                        console.log('Please click an event!')
                    } else {
                        this.props.logCategoryIndex(element[0]._index)
                    }
                }}
                // (element => {this.props.logCategoryIndex(element[0]._index)})
                width={200}
                height={400}
                options={{
                    autoDisplayLegend: true,
                    maintainAspectRatio: false,
                    animation: {
                        animateScale: true
                    },
                    title: {
                        display: true,
                        text: (`$${numberWithCommas(this.props.allCategories.map(category => category.amount).reduce((a,b)=> a + b, 0))} spent`),
                        fontSize: 25
                    },
                    legend: {
                        display: (this.props.allCategories.length > 0) ? true : false ,
                        position: "left",
                        align: "center",
                        labels: {
                            fontSize: 30
                        },

                    },
                    tooltips: {
                        callbacks: {
                            label: function(tooltipItem, data){
                                let dataset = data.datasets[tooltipItem.datasetIndex];
                                let meta = dataset._meta[Object.keys(dataset._meta)[0]];
                                let total = meta.total;
                                let currentValue = dataset.data[tooltipItem.index];
                                let percentage = parseFloat((currentValue/total*100).toFixed(1));
                                return '$' + numberWithCommas(currentValue) + ' (' + percentage + '%)';
                            },
                            title: function(tooltipItem, data) {
                                return data.labels[tooltipItem[0].index];
                            }
                        }
                    }
                }}
            />
            </Segment>
        </div>
    )
    }

}

export default connect(null, {logCategoryIndex})(DoughnutChart);

