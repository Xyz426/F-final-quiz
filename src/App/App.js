import React, { Component } from 'react';
import './App.scss';
import TraineeList from '../components/TraineeList/TraineeList';


class App extends Component {
  render(){
    return(
      <div className='App'>        
        <TraineeList/>
      </div>
    )
  }
}
  
export default App;
