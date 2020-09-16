import React, {Component} from 'react';
import {Line} from 'react-chartjs-2'
import { Segment } from 'semantic-ui-react'
import {connect} from 'react-redux';
// import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';



class DailyLineGraph extends Component {


    render(){

        let categoryDates = this.props.categories.map(category => {
            return moment(category.created_at).format('MM/DD/YYYY')
        })

        let uniqueDates = categoryDates.filter((v, i, a) => a.indexOf(v) === i)

        let sumVals = []
        let daysSum = []

        let sumVal = uniqueDates.forEach(day => {
            let total = 0;
            this.props.categories.forEach(category => {
                if (day === (moment(category.created_at).format('MM/DD/YYYY'))) {
                    total += category.amount
                }
            })
            sumVals.push(total)
            daysSum.push([day, total])
        })

        let data =  {
            labels: (daysSum.map(array => {
                return array[0]
            })),
            datasets: [
                {
                    label: 'Amount',
                    hoverBackgroundColor: "rgba(51, 82, 73, 0.87)",
                    hoverBorderColor: "white",
                    data: (daysSum.map(array => {
                        return array[1]
                    })),
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

            {console.log(daysSum)}

            {/* <Header as='h2' color='teal' textAlign='center'>
                <Icon name='dollar sign' />
                    Daily Spending
            </Header> */}
            <Segment raised>
            <Line 
                data={data}
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

