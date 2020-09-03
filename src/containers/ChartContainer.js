import React, {Component} from 'react'
import Counter from '../components/Counter'
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
                {console.log(this.props.categories)}
                <h1>ChartContainer</h1>
                <DoughnutChart 
                    allCategories={this.props.categories}
                    stockAmount={this.props.stockAmount}
                />
                <CategoryForm />
                {/* <Counter /> */}
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
        }).map(category => category.amount)
    }
}

export default connect(mapStateToProps, {fetchCategories})(ChartContainer)