import React, {Component} from 'react';
import {Line} from 'react-chartjs-2'
import { Segment, Header, Icon } from 'semantic-ui-react'
import {connect} from 'react-redux';


// Ill have to do a fetch for all categories and then find the ones that match the user Id

// function getRandomInt (min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// ^^^This function generates random numbers used for testing my chart


class DailyLineGraph extends Component {
    // Here I want to input the sections of data with my own category data. 

    render(){

        let data =  {
            labels: ['09/04/20', '09/05/20', '09/06/20', '09/07/20', '09/08/20', '09/09/20', '09/10/20'],
            datasets: [
                {
                    label: 'Amount',
                    hoverBackgroundColor: "rgba(51, 82, 73, 0.87)",
                    hoverBorderColor: "white",
                    data: [
                        1000, 
                        1900, 
                        500, 
                        1200, 
                        650, 
                        1200,
                        1000],
                    backgroundColor:"rgba(75,192,192,0.2)",
                    borderColor: "rgba(75,192,192,1)"
                }
            ]
        }

        function currencyFormat(num) {
            return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }
        
    return (
        <div className='line-graph' >
            {/* <Header as='h2' color='teal' textAlign='center'>
                <Icon name='dollar sign' />
                    Daily Spending
            </Header> */}
            <Segment raised>
            <Line 
                data={data}
                // onElementsClick={element => {
                //     if (element[0] === undefined){
                //         console.log('Please click an event!')
                //     } else {
                //         this.props.logCategoryIndex(element[0]._index)
                //     }
                // }}
                // (element => {this.props.logCategoryIndex(element[0]._index)})
                // width={800}
                // height={400}
                options={{
                    autoDisplayLegend: true,
                    responsive:true, 
                    maintainAspectRatio: true,
                    animation: {
                        animateScale: true
                    },
                    title: {
                        display: true,
                        text: 'Total amount spent per day',
                        fontSize: 25
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontSize: 16
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                fontSize: 16
                            }
                        }]
                    },
                    tooltips: {
                        callbacks: {
                            label: function(tooltipItem, data){
                                let dataset = data.datasets[tooltipItem.datasetIndex];
                                let meta = dataset._meta[Object.keys(dataset._meta)[0]];
                                let total = meta.total;
                                let currentValue = dataset.data[tooltipItem.index];
                                // let percentage = parseFloat((currentValue/total*100).toFixed(1));
                                return currencyFormat(currentValue);
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

export default connect(null)(DailyLineGraph);

