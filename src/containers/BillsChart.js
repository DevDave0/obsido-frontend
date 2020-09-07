import React, { Component } from 'react'
import CategoryForm from '../components/CategoryForm'
import DoughnutChart from '../components/DoughnutChart'

class BillsChart extends Component {

    // componentDidMount() {
    //     this.props.fetchFoods()
    // }

    render() {

        return (
            <div className='main-chart-container'>
            <h1>BillsContainer</h1>
    
            <DoughnutChart 
                allCategories={this.props.allCategories}
                stockAmount={this.props.stockAmount}
                cryptoAmount={this.props.cryptoAmount}
                foodAmount={this.props.foodAmount}
                billsAmount={this.props.billsAmount}
                shoppingAmount={this.props.shoppingAmount}
                miscAmount={this.props.miscAmount}
            />
            <CategoryForm />
        </div>
        )

    }
}

export default BillsChart