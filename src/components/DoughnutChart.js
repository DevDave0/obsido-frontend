import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2'


class DoughnutChart extends Component {

    render() {

        return (
            <div className='chart'>
                <Doughnut />
            </div>
        )
    }
}

export default DoughnutChart;

