import React, { Component } from 'react';
import './TrainerList.scss';

class TrainerList extends Component{
    constructor(props){
        super(props);
        this.state={
            trainers:[]
        }
    }    

    componentDidMount(){
        this.getTrainers();
    }

    getTrainers = () => {
        fetch('http://localhost:8080/trainers?grouped=false', {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            if (response.ok) {
              return Promise.resolve(response.json());
            }
            return Promise.reject();
          })
          .then((data) => {
            this.setState({
                trainers: data,
            });
          })
          .catch(() => {
            console.log('err');
          });
      };
    
        
    render(){
        return(
            <div className='trainer-list'>
                <div className='header-title'>讲师列表</div>
                {/*TODO feedback: 列表元素没有使用ul li*/}
                {this.state.trainers.map((item,index) => {
                    return(
                        //TODO feedback: 使用index作为key不是最佳实践
                        <span key={index} className='trainer'>
                            {item.id}{item.name}
                        </span>
                    )
                })}       
            </div>
        )
    }
}

export default TrainerList;