import React, { Component } from 'react';
import './App.scss';
import TraineeList from '../components/TraineeList/TraineeList';
import TrainerList from '../components/TrainerList/TrainerList';

class App extends Component {
  render(){
    return(
      <div className='App'>
        <TrainerList/>
        <TraineeList/>
      </div>
    )
  }
}
  
export default App;
