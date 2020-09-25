import React, { Component } from 'react';
import './App.scss';
import TraineeList from '../components/TraineeList/TraineeList';
import TrainerList from '../components/TrainerList/TrainerList';
import GroupList from '../components/GroupList/GroupList';

//TODO feedback: groups、trainees和trainers的数据需要存储在同一个组件中.
// 因为grouping分组会引起TrainerList和TraineeList组件的变化

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
