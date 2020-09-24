import React, { Component } from 'react';

class Group extends Component{
    constructor(props){
        super(props);    
    }

    render(){
        return(
            <div>
                {this.props.group.map((item,index) => {
                    return (
                        <span key={index}>
                            <header>
                                <span>{item.name}</span>
                                <div>item.trainers[0]
                                     item.trainers[1]
                                </div>
                            </header>
                        </span>                        
                    )
                  })
                } 
            </div>
        )
    }
}