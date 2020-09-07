import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2'
import { Segment, Header, Icon } from 'semantic-ui-react'
import {connect} from 'react-redux';
import { clearCategoryIndex, clearFood } from '../actions/index'

class BillsDoughnutChart extends Component {

    render(){

        const totalFoodAmount = this.props.foodAmount.reduce((a,b)=> a + b, 0)

        // this.props.foodvalues.unshift(totalFoodAmount)
        // this.props.foodnames.unshift('Food')

        // const subtractFromTotal = this.props.foodvalues[0] - (this.props.foodvalues.slice(1).reduce((a,b)=> a + b, 0))

        // this.props.foodvalues[0] = subtractFromTotal
    
        function getRandomColor() {
            let letters = '0123456789ABCDEF'.split('');
            let color = '#';
            for (let i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        // ['Food', 'Cryptos', 'Food', 'Bills', 'Shopping', 'Misc']

        let data =  {
            labels: (this.props.foodnames),
            datasets: [
                {
                    label: 'Amount',
                    hoverBackgroundColor: "rgba(51, 82, 73, 0.87)",
                    hoverBorderColor: "white",
                    data: (this.props.foodvalues),
                    backgroundColor: [
                        'rgba(70, 235, 70, 1', 
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
            {/* {console.log((this.props.foodnames).unshift('Food'))} */}
            {/* {console.log((this.props.foodvalues).unshift(totalFoodAmount))} */}

            {/* {console.log(subtractFromTotal)} */}

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
                        text: (`$${numberWithCommas(totalFoodAmount)} spent on food`),
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
            <button className="ui fluid teal button big" onClick={()=> {
                this.props.clearCategoryIndex()
                this.props.clearFood()

            }}>Go back to main categories</button>
        </div>
    )
    }

}



// const mapStateToProps = state => {
//     return {
//         foodnames: state.food.foods.map(food => food.name),
//         foodvalues: state.food.foods.map(food => food.amount)
//     }
// }


export default connect(null, { clearCategoryIndex, clearFood })(BillsDoughnutChart);