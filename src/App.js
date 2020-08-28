import React from 'react';
import './App.css';
import Chart from './Chart'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>PieChart</h1>
          <Chart />
        </header>
      </div>

    );
  }
}

export default App;
