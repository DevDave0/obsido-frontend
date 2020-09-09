import React from 'react';
import './App.css';
import SignUp from './SignUp';
import Login from './Login'
import {BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Main from './containers/Main'
import {connect} from 'react-redux';
import {loggedIn} from './actions/index';
import Log from './containers/Log'


class App extends React.Component {

  componentDidMount(){
    if(localStorage.token) {
      // this action sets logged in status to true which is needed for my redirects
      this.props.loggedIn()
    }
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">

            <Route path="/sign_up" render={(routeProps) => (this.props.login) ? <Redirect to='/home' /> :
            <SignUp routeProps={routeProps} />} />

            <Route exact path="/" render={(routeProps) => (this.props.login) ? <Redirect to='/home' /> :
            <Login routeProps={routeProps} />} />

            <Route exact path="/home" render={(routeProps) => (this.props.login) ? <Main routeProps={routeProps}/> : 
            <Redirect to='/' /> } />

            <Route exact path='/log'  render={(routeProps) => <Log {...routeProps} />} />

        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, { loggedIn })(App);
