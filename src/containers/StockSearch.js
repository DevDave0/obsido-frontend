import React, {useState} from 'react'
import {connect} from 'react-redux';
import {loggedOut, logoutUser, clearCategory, clearCategoryIndex, clearFood} from '../actions/index';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import classNames from 'classnames'
import UserInfoContainer from './UserInfoContainer'


const StockSearch = (props) => {

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
        props.history.push("/")
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
                    <UserInfoContainer />

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

export default connect(mapStateToProps, {loggedOut, logoutUser, clearCategory, clearCategoryIndex, clearFood})(StockSearch)