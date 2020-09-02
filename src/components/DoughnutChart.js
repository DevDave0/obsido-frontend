import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2'
import {connect} from 'react-redux';
import { fetchCategories } from '../actions/index'



// Ill have to do a fetch for all categories and then find the ones that match the user Id



function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


class DoughnutChart extends Component {

    componentDidMount() {
        this.props.fetchCategories()
    }
    
    // Here I want to input the sections of data with my own category data. 

    render(){
        let data =  {
            labels: ['Stocks', 'Cryptos', 'Food', 'Bills', 'Shopping', 'Misc'],
            datasets: [
                {
                    label: 'Percentage',
                    data: [getRandomInt(50, 200), getRandomInt(50, 200), getRandomInt(50, 200), getRandomInt(50, 200), getRandomInt(50, 200), getRandomInt(50, 200)],
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
    return (
        <div className='chart'>
            <Doughnut 
                data={data}
                onElementsClick={element => {console.log(element[0])}}
                width={200}
                height={500}
                options={{
                    maintainAspectRatio: false,
                    animation: {
                        animateScale: true
                    },
                    title: {
                        display: true,
                        text: "Categories",
                        fontSize: 25
                    },
                    legend: {
                        display: true,
                        position: "left",
                        labels: {
                            fontSize: 25
                        },
                        // layout: {
                        //     padding: {
                        //         left: 0,
                        //         right: 0,
                        //         bottom: 0,
                        //         top: 0
                        //     }
                        // }
                    }
                    // onClick: (e, element) => {alert(e.target)}
                }}
            />
        </div>
    )
    }

}


const mapStateToProps = state => {
    return {
        user: state.user,
        categories: state.category,
        loading: state.loading
    }
}

export default connect(mapStateToProps, {fetchCategories})(DoughnutChart)

