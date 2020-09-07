import React, {Component} from 'react'
import { fetchCategories, fetchFoods } from '../actions/index'
import {connect} from 'react-redux';

import MainChart from './MainChart'
import StockChart from './StockChart'
import CryptoChart from './CryptoChart'
import FoodChart from './FoodChart'
import BillsChart from './BillsChart'
import ShoppingChart from './ShoppingChart'
import MiscChart from './MiscChart'

// Here we want to do conditional rendering of when one of the main categories are clicked, action fires, changes state to a specific index, use that index in the redux state to display
// the correct chart. Send down the amount as a prop, use that amount as a max in spending, find a way to randomize color choices. 


class ChartContainer extends Component {

    componentDidMount() {
        this.props.fetchCategories()
        // this.props.fetchFoods()
    }

    render(){


        return (
                <div className='top-chart-container'>

                {this.props.categoryIndex === 7 ? <MainChart 
                        allCategories={this.props.categories}
                        stockAmount={this.props.stockAmount}
                        cryptoAmount={this.props.cryptoAmount}
                        foodAmount={this.props.foodAmount}
                        billsAmount={this.props.billsAmount}
                        shoppingAmount={this.props.shoppingAmount}
                        miscAmount={this.props.miscAmount}
                    /> :
                    this.props.categoryIndex === 0 ? <StockChart 
                    allCategories={this.props.categories}
                    stockAmount={this.props.stockAmount}
                    cryptoAmount={this.props.cryptoAmount}
                    foodAmount={this.props.foodAmount}
                    billsAmount={this.props.billsAmount}
                    shoppingAmount={this.props.shoppingAmount}
                    miscAmount={this.props.miscAmount}
                /> : 
                    this.props.categoryIndex === 1 ? <CryptoChart 
                    allCategories={this.props.categories}
                    stockAmount={this.props.stockAmount}
                    cryptoAmount={this.props.cryptoAmount}
                    foodAmount={this.props.foodAmount}
                    billsAmount={this.props.billsAmount}
                    shoppingAmount={this.props.shoppingAmount}
                    miscAmount={this.props.miscAmount}
                /> : 
                    this.props.categoryIndex === 2 ? <FoodChart 
                    allCategories={this.props.categories}
                    foodAmount={this.props.foodAmount}
                /> : 
                    this.props.categoryIndex === 3 ? <BillsChart 
                    allCategories={this.props.categories}
                    billsAmount={this.props.billsAmount}
                /> : 
                    this.props.categoryIndex === 4 ? <ShoppingChart 
                    allCategories={this.props.categories}
                    stockAmount={this.props.stockAmount}
                    cryptoAmount={this.props.cryptoAmount}
                    foodAmount={this.props.foodAmount}
                    billsAmount={this.props.billsAmount}
                    shoppingAmount={this.props.shoppingAmount}
                    miscAmount={this.props.miscAmount}
                /> :
                    this.props.categoryIndex === 5 ? <MiscChart 
                    allCategories={this.props.categories}
                    stockAmount={this.props.stockAmount}
                    cryptoAmount={this.props.cryptoAmount}
                    foodAmount={this.props.foodAmount}
                    billsAmount={this.props.billsAmount}
                    shoppingAmount={this.props.shoppingAmount}
                    miscAmount={this.props.miscAmount}
                /> : 
                null
                }

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
        }).map(category => category.amount),

        categoryIndex: state.categoryIndex
    }
}

export default connect(mapStateToProps, {fetchCategories, fetchFoods})(ChartContainer)