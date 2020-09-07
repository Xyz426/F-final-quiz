import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
        list:[],
        randomList:[]   
    }
  }
  
  getUserList = () => {
    fetch('http://localhost:8080/userList',{
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((response) => {
      if(response.ok){
        return Promise.resolve(response.json());
      }
      return Promise.reject();
    })
    .then((data) => {
      this.setState({
        list: data
      })
      console.log(this.state.list)
    })
    .catch(() => {
      console.log('fail!')
    })
  }
  componentDidMount(){
    this.getUserList();
  }
  render() {
    return (
      <div data-testid="app" className="App">
        <header>
          <div>
            <h1 className="title">分组列表</h1>
            <button className="grouping">分组学员</button>
          </div>
        </header>

        <main>
            {this.state.randomList.map((item,index)=>{
                        return <li key={index}>{item.id}{item.name}</li>
                    })
                  }
        </main>

        <footer>
            <h1>学员列表</h1>
            {this.state.list.map((item,index)=>{
                        return (
                          <span key={index}>
                            {item.id}.{item.userName}
                          </span>                        
                        )
                    })
                  }
        </footer>
      </div>
    );
  }
}

export default App;
