import React, { Component } from 'react'
import '../App.css'
import DailyLineGraph from '../components/DailyLineGraph'
import { fetchCategories } from '../actions/index'
import {connect} from 'react-redux';



class DailyGraphContainer extends Component {

    componentDidMount() {
        this.props.fetchCategories()
    }

    capitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    render(){
        return (
            <div className="line ui raised segment"> 
                <div className="ui segment raised teal ">
                    <h2>Daily Spending for: {this.capitalize(localStorage.userName)}</h2>
                </div>
                    <DailyLineGraph categories={this.props.categories}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.category.categories.map(category => category)
    }
}


export default connect(mapStateToProps, {fetchCategories})(DailyGraphContainer)