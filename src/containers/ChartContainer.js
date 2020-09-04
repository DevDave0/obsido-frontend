import React, {Component} from 'react'
import CategoryForm from '../components/CategoryForm'
import DoughnutChart from '../components/DoughnutChart'
import { fetchCategories } from '../actions/index'
import {connect} from 'react-redux';

class ChartContainer extends Component {

    componentDidMount() {
        this.props.fetchCategories()
    }

    render(){
        return (
            <div>
                <h1>ChartContainer</h1>
                <DoughnutChart 
                    allCategories={this.props.categories}
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

const mapStateToProps = state => {
    return {
        categories: state.category.categories.map(category => category),
        stockAmount: state.category.categories.filter(category => {
            if(category.name === 'Stocks'){
                return category.amount
            }
        }).map(category => category.amount),

        cryptoAmount: state.category.categories.filter(category => {
            if(category.name === 'Crypto'){
                return category.amount
            }
        }).map(category => category.amount),

        foodAmount: state.category.categories.filter(category => {
            if(category.name === 'Food'){
                return category.amount
            }
        }).map(category => category.amount),

        billsAmount: state.category.categories.filter(category => {
            if(category.name === 'Bills'){
                return category.amount
            }
        }).map(category => category.amount),

        shoppingAmount: state.category.categories.filter(category => {
            if(category.name === 'Shopping'){
                return category.amount
            }
        }).map(category => category.amount),

        miscAmount: state.category.categories.filter(category => {
            if(category.name === 'Misc'){
                return category.amount
            }
        }).map(category => category.amount)
    }
}

export default connect(mapStateToProps, {fetchCategories})(ChartContainer)