import React, { Component } from 'react';
import './Group.scss';

class Group extends Component {
  render() {
    console.log(this.props.trainers[0].name);
    return (
      <div>
        <header className="group-header">
          <span className="group-name">{this.props.name}</span>
          {this.props.trainers.map((item, index) => {
            return (
              <span className="group-trainers" key={index}>
                {item.id}.{item.name}
              </span>
            );
          })}
        </header>
        <main>
          {this.props.trainees.map((item, index) => {
            return (
              <span className="group-trainees" key={index}>
                {item.id}.{item.name}
              </span>
            );
          })}
        </main>
      </div>
    );
  }
}

export default Group;
