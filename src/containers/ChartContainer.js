import React, {Component} from 'react'
import { fetchCategories } from '../actions/index'
import {connect} from 'react-redux';

import MainChart from './MainChart'
import StockChart from './StockChart'
import CryptoChart from './CryptoChart'
import FoodChart from './FoodChart'
import BillsChart from './BillsChart'
import ShoppingChart from './ShoppingChart'
import MiscChart from './MiscChart'

class ChartContainer extends Component {

    componentDidMount() {
        this.props.fetchCategories()
    }

    render(){
        return (
                <div className='top-chart-container'>

                    <MainChart 
                        allCategories={this.props.categories}
                        stockAmount={this.props.stockAmount}
                        cryptoAmount={this.props.cryptoAmount}
                        foodAmount={this.props.foodAmount}
                        billsAmount={this.props.billsAmount}
                        shoppingAmount={this.props.shoppingAmount}
                        miscAmount={this.props.miscAmount}
                    />

                    {/* <StockChart 
                        allCategories={this.props.categories}
                        stockAmount={this.props.stockAmount}
                        cryptoAmount={this.props.cryptoAmount}
                        foodAmount={this.props.foodAmount}
                        billsAmount={this.props.billsAmount}
                        shoppingAmount={this.props.shoppingAmount}
                        miscAmount={this.props.miscAmount}
                    />

                    <CryptoChart 
                        allCategories={this.props.categories}
                        stockAmount={this.props.stockAmount}
                        cryptoAmount={this.props.cryptoAmount}
                        foodAmount={this.props.foodAmount}
                        billsAmount={this.props.billsAmount}
                        shoppingAmount={this.props.shoppingAmount}
                        miscAmount={this.props.miscAmount}
                    />

                    <FoodChart 
                        allCategories={this.props.categories}
                        stockAmount={this.props.stockAmount}
                        cryptoAmount={this.props.cryptoAmount}
                        foodAmount={this.props.foodAmount}
                        billsAmount={this.props.billsAmount}
                        shoppingAmount={this.props.shoppingAmount}
                        miscAmount={this.props.miscAmount}
                    />

                    <BillsChart 
                        allCategories={this.props.categories}
                        stockAmount={this.props.stockAmount}
                        cryptoAmount={this.props.cryptoAmount}
                        foodAmount={this.props.foodAmount}
                        billsAmount={this.props.billsAmount}
                        shoppingAmount={this.props.shoppingAmount}
                        miscAmount={this.props.miscAmount}
                    />

                    <ShoppingChart 
                        allCategories={this.props.categories}
                        stockAmount={this.props.stockAmount}
                        cryptoAmount={this.props.cryptoAmount}
                        foodAmount={this.props.foodAmount}
                        billsAmount={this.props.billsAmount}
                        shoppingAmount={this.props.shoppingAmount}
                        miscAmount={this.props.miscAmount}
                    />

                    <MiscChart 
                        allCategories={this.props.categories}
                        stockAmount={this.props.stockAmount}
                        cryptoAmount={this.props.cryptoAmount}
                        foodAmount={this.props.foodAmount}
                        billsAmount={this.props.billsAmount}
                        shoppingAmount={this.props.shoppingAmount}
                        miscAmount={this.props.miscAmount}
                    /> */}

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