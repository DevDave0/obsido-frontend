import React from 'react';
import './App.css';
import Chart from './components/Chart'
import SignUp from './SignUp'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>PieChart</h1>
          <SignUp />
          <Chart />
        </header>
      </div>

    );
  }
}

export default App;
