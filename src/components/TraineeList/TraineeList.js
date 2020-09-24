import React, { Component } from 'react';
import './TraineeList.scss';

class TraineeList extends Component{
    constructor(props){
        super(props);
        this.state={
            trainees:[]
        }
    }    

    componentDidMount(){
        this.getTrainees();
    }

    getTrainees = () => {
        fetch('http://localhost:8080/trainees?grouped=false', {
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
                trainees: data,
            });
          })
          .catch(() => {
            console.log('err');
          });
      };
    
        
    render(){
        return(
            <div className='trainee-list'>
                <div className='header-title'>学员列表</div>
                {this.state.trainees.map((item,index) => {
                    return(
                        <span key={index} className='trainee'>
                            {item.id}.{item.name}
                        </span>
                    )
                })}       
            </div>
        )
    }
}

export default TraineeList;