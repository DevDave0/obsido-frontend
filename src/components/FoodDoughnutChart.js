import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2'
import { Segment, Header, Icon } from 'semantic-ui-react'

class FoodDoughnutChart extends Component {

    render(){

        let data =  {
            labels: ['Stocks', 'Cryptos', 'Food', 'Bills', 'Shopping', 'Misc'],
            datasets: [
                {
                    label: 'Amount',
                    hoverBackgroundColor: "rgba(51, 82, 73, 0.87)",
                    hoverBorderColor: "white",
                    data: [
                        100, 
                        100, 
                        100, 
                        100, 
                        100, 
                        100,
                    ],
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
                        text: (`$${numberWithCommas(this.props.foodAmount.reduce((a,b)=> a + b, 0))} spent`),
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
                }}
            />
            </Segment>
        </div>
    )
    }

}

export default FoodDoughnutChart;