import React from 'react';
import './App.css';
import Chart from './components/Chart';
import SignUp from './SignUp';


class App extends React.Component {
  render(){
    return (
      <div className="App">
          <h1>PieChart</h1>
          <SignUp />
          <Chart />
      </div>

    );
  }
}

export default App;
