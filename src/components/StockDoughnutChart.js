import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2'
import { Segment, Header, Icon } from 'semantic-ui-react'
import {connect} from 'react-redux';
import { clearCategoryIndex, clearStock } from '../actions/index'

class StockDoughnutChart extends Component {

    render(){

        const totalStockAmount = this.props.stockAmount.reduce((a,b)=> a + b, 0)
    
        function getRandomColor() {
            let letters = '0123456789ABCDEF'.split('');
            let color = '#';
            for (let i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function currencyFormat(num) {
            return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }

        let data =  {
            labels: (this.props.stocknames),
            datasets: [
                {
                    label: 'Amount',
                    hoverBackgroundColor: "rgba(51, 82, 73, 0.87)",
                    hoverBorderColor: "white",
                    data: (this.props.stockvalues),
                    backgroundColor: [
                        'rgba(255, 99, 132, 1', 
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                        getRandomColor(),
                    ]
                }
            ]
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
                width={200}
                height={400}
                options={{
                    autoDisplayLegend: true,
                    maintainAspectRatio: false,
                    animation: {
                        // animateScale: true
                    },
                    title: {
                        display: true,
                        text: (`${currencyFormat(totalStockAmount)} spent on stocks`),
                        fontSize: 25
                    },
                    legend: {
                        display: (this.props.allCategories.length > 0) ? true : false ,
                        position: "left",
                        align: "center",
                        labels: {
                            fontSize: 14
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
                                return currencyFormat(currentValue) + ' (' + percentage + '%)';
                            },
                            title: function(tooltipItem, data) {
                                return data.labels[tooltipItem[0].index];
                            }
                        }
                    }
                }}
            />
            </Segment>
            <button className="ui fluid teal button big" onClick={()=> {
                this.props.clearCategoryIndex()
                this.props.clearStock()

            }}>Go back to main categories</button>
        </div>
    )
    }

}


export default connect(null, { clearCategoryIndex, clearStock })(StockDoughnutChart);