import React from 'react'
import Chart from '../components/Chart'
import {connect} from 'react-redux';
import {loggedOut} from '../actions/index';

const Main = (props) => {

    const logOut = (e) => {
        e.preventDefault()
        props.loggedOut()
        localStorage.clear()
    }

    return (
        <div>
            <h1>MainContainer</h1>
            <Chart />
            <button onClick={(e) => logOut(e) } >Log Out</button>
        </div>
    )
}

export default connect(null, {loggedOut})(Main)