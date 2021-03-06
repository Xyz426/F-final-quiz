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
        // TODO feedback: 没有把API请求抽取到单独的utils文件
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
            // eslint-disable-next-line no-console
            console.log('err');
          });
      };
    
        
    render(){
        return(
            <div className='trainee-list'>
                <div className='header-title'>学员列表</div>
                {this.state.trainees.map((item) => {
                    return(
                        <ul key={item.id} className='trainee'>
                          <li>{item.id}.{item.name}</li>
                        </ul>
                    )
                })}       
            </div>
        )
    }
}

export default TraineeList;