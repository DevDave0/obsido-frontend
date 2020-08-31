import React from 'react';
import './App.css';
import Chart from './components/Chart';
import SignUp from './SignUp';
import Login from './Login'
import {BrowserRouter, Route} from 'react-router-dom'


class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <h1>PieChart</h1>
          <Login />
          <SignUp />
          <Chart />

          <Route path="/" component={ Login } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
