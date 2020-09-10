import React, { Component } from 'react'
import '../App.css'
import DailyLineGraph from '../components/DailyLineGraph'



class DailyGraphContainer extends Component {

    // capitalize = (s) => {
    //     return s.charAt(0).toUpperCase() + s.slice(1)
    // }

    render(){
        return (
            <div className="line ui raised segment"> 
                <div className="ui segment raised teal ">
                    <h2>Daily Spending for: {localStorage.userName}</h2>
                </div>
                    <DailyLineGraph />
            </div>
        )
    }
}


export default DailyGraphContainer