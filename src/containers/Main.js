import React from 'react'
import {connect} from 'react-redux';
import {loggedOut} from '../actions/index';
import ChartContainer from './ChartContainer'

const Main = (props) => {

    const logOut = (e) => {
        e.preventDefault()
        props.loggedOut()
        localStorage.clear()
    }

    return (
        <div>
            <h1>MainContainer</h1>
            <ChartContainer />
            <button onClick={(e) => logOut(e) } >Log Out</button>
        </div>
    )
}

export default connect(null, {loggedOut})(Main)