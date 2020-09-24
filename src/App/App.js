import React, { Component } from 'react';
import './App.scss';
import TraineeList from '../components/TraineeList/TraineeList';
import TrainerList from '../components/TrainerList/TrainerList';
import GroupList from '../components/GroupList/GroupList';
class App extends Component {
  render(){
    return(
      <div className='App'>
        <GroupList/>
        <TrainerList/>
        <TraineeList/>
      </div>
    )
  }
}
  
export default App;
