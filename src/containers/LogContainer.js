import React, { Component } from 'react'
import AccountContainer from './AccountContainer'
import '../App.css'



class LogContainer extends Component {

    render(){
        return (
            <div className="log ui raised segment"> 
                <div className="ui segment teal inverted">
                    <h2>Spending Log</h2>
                </div>
                    <AccountContainer />
            </div>
        )
    }
}


export default LogContainer