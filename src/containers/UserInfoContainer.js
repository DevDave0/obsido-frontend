import React, { Component } from 'react'
import UserInfoCard from '../components/UserInfoCard'
import '../App.css'



class UserInfoContainer extends Component {

    capitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    render(){
        return (
            <div className="log ui raised segment"> 
                <div className="ui segment raised teal ">
                    <h2>Account Information for: {this.capitalize(localStorage.userName)}</h2>
                </div>
                    {/* <AccountContainer /> */}
                    <UserInfoCard />
            </div>
        )
    }
}


export default UserInfoContainer