import React from 'react';
import './App.css';
import Chart from './components/Chart';
import SignUp from './SignUp';
import Login from './Login'


class App extends React.Component {
  render(){
    return (
      <div className="App">
          <h1>PieChart</h1>
          <Login />
          <SignUp />
          <Chart />
      </div>

    );
  }
}

export default App;
