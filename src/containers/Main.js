import React from 'react'
import {connect} from 'react-redux';
import {loggedOut, logoutUser, clearCategory} from '../actions/index';
import ChartContainer from './ChartContainer'

const Main = (props) => {

    const logOut = (e) => {
        e.preventDefault()
        props.loggedOut()
        props.logoutUser(props.user)
        props.clearCategory(props.category)
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

    const mapStateToProps = state => {
        return {
            user: state.user,
            category: state.category
        }
    }

export default connect(mapStateToProps, {loggedOut, logoutUser, clearCategory})(Main)