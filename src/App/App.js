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
            {this.state.list.map((item,index)=>{
                        return <li key={index}>{item.id}{item.name}</li>
                    })
                  }
        </footer>
      </div>
    );
  }
}

export default App;
