import React, {useState} from 'react'
import {connect} from 'react-redux';
import {loggedOut, logoutUser, clearCategory, clearCategoryIndex, clearFood} from '../actions/index';
import ChartContainer from './ChartContainer'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import classNames from 'classnames'

const Main = (props) => {

    const [toggle, setToggle] = useState(false);

    const classes = classNames(
        'pusher',
        'bottom',
        {'dimmed': toggle}
    )

    const logOut = (e) => {
        e.preventDefault()
        props.loggedOut()
        props.logoutUser(props.user)
        props.clearCategory(props.category)
        props.clearCategoryIndex()
        props.clearFood()
        localStorage.clear()
    }

    const toggleMenu = () => {
        setToggle(!toggle);
    }

    return (
        <div>

            <Header 
                toggleMenu={toggleMenu} 
                logOut={logOut}
            />
            <div className='ui attached pushable' style={{height: '100vh'}}>
                <Sidebar toggleMenu={toggle} />
                <div className={classes}>
                    <br></br>
                    <br></br>

                    <h1 className='obsido'>obsido</h1>
                    <br></br>
                    <br></br>


                    

                    {/* set conditional rendering */}
                    <ChartContainer />

                </div>

            </div>
        </div>
    )
}

    const mapStateToProps = state => {
        return {
            user: state.user,
            category: state.category
        }
    }

export default connect(mapStateToProps, {loggedOut, logoutUser, clearCategory, clearCategoryIndex, clearFood})(Main)